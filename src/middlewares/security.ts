import * as jwt from "jsonwebtoken";
import env from "../config/env";
import { IJwtPayload } from "../utils/interfaces";

export const isAuthenticated = (payload: IJwtPayload): string => {
  return jwt.sign(payload, env.jwt.secret!, {
    expiresIn: env.jwt.expiration,
  });
};
