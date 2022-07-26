import { Router } from "express";
import { methods as logController } from "../controllers/log.controller";

const router = Router();

router.get("/", logController.getLogs);
router.post("/", logController.addLog);
router.get("/:id", logController.getLog);

export default router;
