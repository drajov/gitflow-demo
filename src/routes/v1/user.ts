import { Router } from "express";
import { UserController } from "../../controllers/user";
import { isAuthenticated } from "../../middlewares/security";
const router = Router();

router
  .get("/user", UserController.getUser)
  .post("/user", UserController.addUser)
  .put("/user", [isAuthenticated], UserController.updateUser)
  .delete("/user", UserController.deleteUser);

export default router;
