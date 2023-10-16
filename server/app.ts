import express from "express";
import cors from "cors";
import toDos from "./routes/toDos";
import login from "./routes/login";
import signUp from "./routes/signUp";

const PORT = process.env.PORT ?? 8000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/todos", toDos)
app.use("/login", login)
app.use("/signup", signUp)


export { app, PORT }