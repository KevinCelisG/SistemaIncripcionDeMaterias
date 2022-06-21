import { Router } from "express";
import { methods as subjectController } from "../controllers/subject.controller";

const router = Router();

router.get("/", subjectController.getSubjects);
router.post("/", subjectController.addSubjects);
router.get("/:id", subjectController.getSubject);
router.put("/:id", subjectController.updateSubject);

export default router;