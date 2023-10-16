import { pool } from "../db";
import { LoginControllerRequest, LoginControllerResponse } from "../helpers/Types";
import { getUser } from "../queries/toDoQueries";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// LOGIN
const loginController = async (req: LoginControllerRequest, res: LoginControllerResponse) => {
  const { email, password } = req.body;

  try {
    const users = await pool.query(getUser, [email]);

    if (!users.rows.length) {
      res.json({ detail: "User not found" });
      return;
    }

    const success = await bcrypt.compare(
      password,
      users.rows[0].hashedPassword
    );
    const token = jwt.sign({ email }, "secret", { expiresIn: "1h" });

    if (success) {
      res.json({ email: users.rows[0].email, token });
    } else {
      res.json({ detail: "Login Failed" });
    }
  } catch (error) {
    if(res.status(500)) {
      res.json({ detail: "An error occurred during login" });
    }
  }
};

export { loginController };