import { UpdateQuery } from 'mongoose';
import { User } from './user.models';
import { TOrder, TUser } from './user.interface';

const createUserIntoDB = async (userData: TUser) => {
  const result = await User.create(userData);
  return result;
};


const getAllUserFromDB = async () => {
  const result = await User.find().select("-password");
  return result;
};

export const userServices = {
  createUserIntoDB,
  getAllUserFromDB,
};
