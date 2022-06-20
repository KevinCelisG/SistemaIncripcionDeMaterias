import { Router } from "express";
import { methods as subjectController } from "../controllers/subject.controller";

const router = Router();

router.get("/", subjectController.getSubjects);

export default router;