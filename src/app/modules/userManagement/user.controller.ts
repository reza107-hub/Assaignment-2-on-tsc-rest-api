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

const updateASingleUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const updatedData = req.body;
    const result = await userServices.updateASingleUserFromDB(
      parseInt(userId),
      updatedData
    );
    res.status(200).json({
      success: true,
      message: "User updated successfully!",
      data: result,
    });
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

const deleteAUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const result = await userServices.deleteAUserFromDB(parseInt(userId));
    res.status(200).json({
      success: true,
      message: "User deleted successfully!",
      data: result.upsertedId,
    });
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

const addProductToOrder = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const orderData = req.body;
    // console.log(userId,orderData)
    await userServices.addProductToOrderDB(parseInt(userId), orderData);
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: null,
    });
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

const retrieveOrdersOfaSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;

    // console.log(userId,orderData)
    const result = await userServices.retrieveOrdersOfaSingleUserDB(
      parseInt(userId)
    );
    res.status(200).json({
      success: true,
      message: "Order fetched successfully!",
      data: result,
    });
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

const getTotalPriceForAnUsersOrder = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;

    // console.log(userId,orderData)
    const result = await userServices.getTotalPriceForAnUsersOrderDB(
      parseInt(userId)
    );
    res.status(200).json({
      success: true,
      message: "Total price calculated successfully!",
      data: {
        "total-price": result,
      },
    });
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
  updateASingleUser,
  deleteAUser,
  addProductToOrder,
  retrieveOrdersOfaSingleUser,
  getTotalPriceForAnUsersOrder,
};
