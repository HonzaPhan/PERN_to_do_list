import express from "express";
import { pool } from "./db";
import {
  createNewToDoItem,
  createNewUser,
  deleteToDoItem,
  getAllToDoItems,
  updateToDoItem,
} from "./queries/toDoQueries";
import cors from "cors";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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

// SIGN UP
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const salt = bcrypt.genSalt(10)
  const hashedPassword = bcrypt.hashSync(password, await salt)
  
  try {
    await pool.query(createNewUser, [email, hashedPassword]);
    res.json(createNewUser)

    const token = jwt.sign({ email }, 'secret', { expiresIn: '1h' })

    res.json({ email, token})
  } catch (error) {
    console.log(error);
    if(error) {
      res.json({ detail: error.detail })
    }
  }
})

// LOGIN
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    
  } catch (error) {
    console.log(error);
  }
})

app.listen(PORT, () => {
  console.log(`Server running on: ${PORT}`);
});
