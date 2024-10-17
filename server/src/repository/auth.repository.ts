import { UserModel } from "../models/auth.model";

export const buildUser = async (payload: any) => {
  const newPatients = new UserModel({
    ...payload,
  });
  const result = await newPatients.save();
  return result;
};

export const findUserName = async (payload: string) => {
  const result = await UserModel.findOne({ userName: payload });
  if (!result) return null;
  return result;
};

export const findUser = async (payload: any) => {
    const result = await UserModel.findOne({ _id: payload });
    if (!result) return null;
    return result;
  };
  