import {sign}  from 'jsonwebtoken'
import { config } from '../../_boot/config'
import mongoose from 'mongoose'

interface IPayload{
  _id:any,
  userName:string
}
export const generateToken=(payload:IPayload)=>{
   return sign(payload,config.secrets.access_token,{expiresIn:"7d"})
}