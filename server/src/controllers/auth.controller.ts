import { Request, Response, NextFunction } from "express";
import * as repository from "../../src/repository/auth.repository";
import { generateToken } from "../services/generateToken/genrateToken";
import { BadRequestError } from "../exceptions/bad-request-error";
import { Password } from "../services/password/password.service";
import { verifyToken } from "../services/generateToken/verifyToken";

 /*
    authCreateController
  */
export const authCreateController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {

    //after validating the req.body passing to repo layer
    const response = await repository.buildUser(req.body);

    const token = generateToken({
      _id: response._id,
      userName: response.userName,
    });

    res.cookie("token", token);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

// authLoginController
export const authLoginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userName, password } = req.body;
    const isUserExist = await repository.findUserName(userName);

    if (!isUserExist) throw new BadRequestError("no user foudd");

    const isMatchPassword = await Password.compare(
      isUserExist.password,
      password
    );

    if (!isMatchPassword)
      throw new BadRequestError("passoword is not matching");

    const token = generateToken({
      _id: isUserExist._id,
      userName: isUserExist.userName,
    });

    res.cookie("token", token);
    res.status(200).json(isUserExist);
  } catch (error) {
    next(error);
  }
};



 /*
    currentUserController
  */
export const currentUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.token;
    const user = verifyToken(token);

    if (!user) throw new BadRequestError("user is not valid!!!");

    const isUser = await repository.findUser(user._id);

    if(!isUser)  throw new BadRequestError("user is not valid!!!");

    res.status(200).json(isUser);
  } catch (error) {
    next(error);
  }
};

 /*
    logoutController
  */

export const logoutController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      res.clearCookie("token");
      res.status(200).json("sucessfullt logout")
    } catch (error) {
      next(error);
    }
}