import { NextFunction, Request, Response } from "express";
import { i18n } from "../config/i18n";
export const setLanguage = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const acceptLanguageHeader: string = req.get("Accept-Language") || "";
  i18n.setLocale(acceptLanguageHeader);
  return next();
};
