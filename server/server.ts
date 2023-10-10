import express from "express";
import { pool } from "./db";
import {
  createNewToDoItem,
  deleteToDoItem,
  getAllToDoItems,
  updateToDoItem,
} from "./queries/toDoQueries";
import cors from "cors";

const PORT = process.env.PORT ?? 8000;
const app = express();
app.use(express.json());
app.use(cors());

// GET ALL TODOS
app.get("/todos/:userEmail", async (req, res) => {
  const { userEmail } = req.params;

  try {
    const todos = await pool.query(getAllToDoItems, [userEmail]);
    res.json(todos.rows);
  } catch (error) {
    console.log(error);
  }
});

// CREATE TODO
app.post("/todos/", async (req, res) => {
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
});

// UPDATE TODO
app.put("/todos/:id", async (req, res) => {
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
});

// DELETE TODO
app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const editTodo = await pool.query(deleteToDoItem, [id]);
    res.json(editTodo);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on: ${PORT}`);
});
