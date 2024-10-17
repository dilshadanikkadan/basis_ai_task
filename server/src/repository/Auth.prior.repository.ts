import { AuthorizationModel } from "../models/auth.prior.model";

export const buildAuthReq = async (payload: any) => {
    
    const newAuthReq = new AuthorizationModel({
      ...payload,
    });
    const result = await newAuthReq.save();
    return result;
  };