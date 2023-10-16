import { Router } from "express";
import { singUpController } from "../controllers/singUpController";

const router = Router();

router.post("/", singUpController);

export default router;
