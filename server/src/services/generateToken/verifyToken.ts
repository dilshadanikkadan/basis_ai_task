import { verify } from "jsonwebtoken";
import { config } from "../../_boot/config";

export const verifyToken = (token: string) => {
  try {
    return verify(token, config.secrets.access_token) as any;
  } catch (error) {}
};
