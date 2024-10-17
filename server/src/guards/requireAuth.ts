import jwt from 'jsonwebtoken'
import { config } from '../_boot/config';
import { Request, Response, NextFunction } from "express";


declare global {
    namespace Express {
      interface Request {
        user?: any; 
      }
    }
  }

  /*
    this is guard for managing the auth with jwt
  */
 
export const requireAuth = (req:Request, res:Response, next:NextFunction) => {
  const token = req.cookies.token || req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  jwt.verify(token,config.secrets.access_token, (err:any, user:any) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }

    req.user  = user;
    next();
  });
};
