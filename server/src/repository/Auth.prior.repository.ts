import { AuthorizationModel } from "../models/auth.prior.model";

export const buildAuthReq = async (payload: any) => {
    console.log("=========================");
    console.log(payload);
    console.log("=========================");
    
    const newAuthReq = new AuthorizationModel({
      ...payload,
    });
    const result = await newAuthReq.save();
    return result;
  };