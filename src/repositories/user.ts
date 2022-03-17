import { Logger } from "../utils/logger";
const logger = new Logger("USER");

export class UserRepository {
  public static async getUser() {
    return {
      name: "Test",
    };
  }
  public static async addUser() {
    logger.info("addUser", { name: "Test" });
  }
  public static async updateUser() {
    logger.info("updateUser");
  }
  public static async deleteUser() {
    logger.info("deleteUser");
  }
}
