import { Router } from "express";
import docs from "./v1/docs";
import user from "./v1/user";
const router = Router();

router.use("/v1", docs);
router.use("/v1", user);

export default router;
