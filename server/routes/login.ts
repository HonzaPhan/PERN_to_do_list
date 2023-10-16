import { Router } from "express";
import { loginController } from "../controllers/loginController";

const router = Router();

router.post("/:userEmail", loginController);

export default router;
