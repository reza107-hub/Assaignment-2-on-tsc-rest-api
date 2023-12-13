import { Request, Response } from 'express';
import UserValidationSchema from './user.validation';
import { userServices } from './user.services';

const createUser = async (req: Request, res: Response) => {
    try {
        const userData = req.body;
        const zodParsedData = UserValidationSchema.parse(userData);

        const result = await userServices.createUserIntoDB(zodParsedData);
        res.status(200).json({
            success: true,
            message: 'User created successfully',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error,
        });
    }
};

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUserFromDB();
    res.status(200).json({
      success: true,
      message: "Users fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const result = await userServices.getSingleUserFromDB(parseInt(id));
    res.status(200).json({
      success: true,
      message: "User fetched successfully!",
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: {
        code: error.code || 500,
        description: error.description || "User not found!",
      },
    });
  }
};

export const userController = {
  createUser,
  getAllUser,
  getSingleUser,
};
