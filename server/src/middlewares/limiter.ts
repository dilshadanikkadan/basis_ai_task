import rateLimit from 'express-rate-limit';
import { BadRequestError } from '../exceptions/bad-request-error';

const limitHandler = (req:any, res:any, next:any, options:any) => {
    throw new  BadRequestError("Too many requests, please try again later.")
  };
export const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,  
  max: 3,  
  handler:limitHandler,
  statusCode: 429,
});