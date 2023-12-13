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

export const userController = {
    createUser,
};
