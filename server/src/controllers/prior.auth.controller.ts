import { Request, Response, NextFunction } from "express";
import * as repository from "../../src/repository/Auth.prior.repository";

export const createAuthPriorController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    
    //after validating the req.body passing to repo layer
    const response = await repository.buildAuthReq({
      ...req.body,
    });

    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};
