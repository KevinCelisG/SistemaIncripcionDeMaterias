import { Router } from "express";
import { methods as courseController } from "../controllers/course.controller";

const router = Router();

router.get("/", courseController.getCourses);
router.post("/", courseController.addCourse);
router.get("/:id", courseController.getCourse);
router.put("/:id", courseController.updateCourse);

export default router;
