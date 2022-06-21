import { Router } from "express";
import { methods as inscriptionController } from "../controllers/inscription.controller";

const router = Router();

router.get("/", inscriptionController.getInscriptions);
router.post("/", inscriptionController.addInscription);
router.get("/:id", inscriptionController.getInscription);
router.put("/:id", inscriptionController.updateInscription);

export default router;
