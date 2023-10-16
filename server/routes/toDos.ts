import { Router } from "express";
import {
  createNewToDo,
  deleteToDo,
  getAllToDos,
  updateToDo,
} from "../controllers/toDoController";

const router = Router();

router
  .get("/:userEmail", getAllToDos)
  .post("/", createNewToDo)
  .put("/:id", updateToDo)
  .delete("/:id", deleteToDo);

export default router;
