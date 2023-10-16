import { pool } from "../db";
import {
  CreateNewToDoRequest,
  CreateNewToDoResponse,
  DeleteToDoRequest,
  DeleteToDoResponse,
  GetAllToDosRequest,
  GetAllToDosResponse,
  UpdateToDoRequest,
  UpdateToDoResponse,
} from "../helpers/Types";
import {
  getAllToDoItems,
  createNewToDoItem,
  updateToDoItem,
  deleteToDoItem,
} from "../queries/toDoQueries";

// GET ALL TODOS
const getAllToDos = async (
  req: GetAllToDosRequest,
  res: GetAllToDosResponse
) => {
  const { userEmail } = req.params;

  try {
    const todos = await pool.query(getAllToDoItems, [userEmail]);
    res.json(todos.rows);
  } catch (error) {
    throw error;
  }
};

// CREATE TODO
const createNewToDo = async (
  req: CreateNewToDoRequest,
  res: CreateNewToDoResponse
) => {
  const { user_email, title, progress } = req.body;

  try {
    const newTodo = await pool.query(createNewToDoItem, [
      user_email,
      title,
      progress,
    ]);
    res.json(newTodo);
  } catch (error) {
    console.log(error);
  }
};

// UPDATE TODO
const updateToDo = async (req: UpdateToDoRequest, res: UpdateToDoResponse) => {
  const { id } = req.params;
  const { user_email, title, progress } = req.body;

  try {
    const editTodo = await pool.query(updateToDoItem, [
      user_email,
      title,
      progress,
      id,
    ]);
    res.json(editTodo);
  } catch (error) {
    console.log(error);
  }
};

// DELETE TODO
const deleteToDo = async (req: DeleteToDoRequest, res: DeleteToDoResponse) => {
    const { id } = req.params;

  try {
    const editTodo = await pool.query(deleteToDoItem, [id]);
    res.json(editTodo);
  } catch (error) {
    console.log(error);
  }
}

export { getAllToDos, createNewToDo, updateToDo, deleteToDo };
