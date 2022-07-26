import { Router } from "express";
import { methods as logController } from "../controllers/log.controller";

const router = Router();

router.get("/", userController.getLogs);
router.post("/", userController.addLog);
router.get("/:id", userController.getLog);

export default router;
