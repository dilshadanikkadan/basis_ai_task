import { verify } from "jsonwebtoken"
import { config } from "../../_boot/config"

export const verifyToken=(token:string)=>{
    return verify(token,config.secrets.access_token) as any
 }