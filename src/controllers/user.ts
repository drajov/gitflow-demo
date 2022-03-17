import { NextFunction, Request, Response } from "express";
import { messages } from "../config/messages";
import { statuses } from "../config/statuses";
import { UserRepository } from "../repositories/user";
import { IUser } from "../utils/interfaces";
import { Context, Logger } from "../utils/logger";
import { errorResponse, ResponseBuilder } from "../utils/response";
const logger = new Logger(Context.USER);

export class UserController {
  public static async getUser(
    req: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      const user: IUser = await UserRepository.getUser();
      logger.info("User log:", messages.invalid_request());
      return new ResponseBuilder<IUser>()
        .setStatus(true)
        .setData(user)
        .setResponse(response)
        .setResponseStatus(statuses.success)
        .build();
    } catch (error) {
      return errorResponse(response, statuses.server_error, [error as Error]);
    }
  }

  public static async addUser(
    req: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      await UserRepository.addUser();
      return new ResponseBuilder<any>()
        .setData({ message: "User sucesfully added!" })
        .setResponse(response)
        .setResponseStatus(statuses.success)
        .build();
    } catch (error) {
      return errorResponse(response, statuses.server_error, [error as Error]);
    }
  }
  public static async updateUser(
    req: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      await UserRepository.updateUser();
      return new ResponseBuilder<any>()
        .setData({ message: "User sucesfully updated!" })
        .setResponse(response)
        .setResponseStatus(statuses.success)
        .build();
    } catch (error) {
      return errorResponse(response, statuses.server_error, [error as Error]);
    }
  }
  public static async deleteUser(
    req: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      await UserRepository.deleteUser();
      return new ResponseBuilder<any>()
        .setData({ message: "User sucesfully deleted!" })
        .setResponse(response)
        .setResponseStatus(statuses.success)
        .build();
    } catch (error) {
      return errorResponse(response, statuses.server_error, [error as Error]);
    }
  }
}
