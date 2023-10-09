import express from 'express';
import { pool } from './db';
import { getAllToDoItems } from './queries/toDoQueries';
import cors from 'cors';

const PORT = process.env.PORT ?? 8000;
const app = express();
app.use(express.json());
app.use(cors());

// GET ALL TODOS
app.get('/todos/:userEmail', async (req, res) => {
    const { userEmail } = req.params

    try {
        const todos = await pool.query(getAllToDoItems, [userEmail]);
        res.json(todos.rows);
    } catch (error) {
        console.log(error);
    }
});

app.listen(PORT, () => {
  console.log(`Server running on: ${PORT}`);
})