import { Router } from "express";
import { methods as userController } from "../controllers/users.controller";

const router = Router();

router.get("/", userController.getUsers);
router.post("/", userController.addUsers);
router.get("/:id", userController.getUser);
router.put("/:id", userController.updateUser);

export default router;