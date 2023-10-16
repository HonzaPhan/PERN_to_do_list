import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { pool } from '../db';
import { createNewUser } from '../queries/toDoQueries';
import { SignUpControllerRequest, SignUpControllerResponse } from '../helpers/Types';

const singUpController = async (req: SignUpControllerRequest, res: SignUpControllerResponse) => {
  const { email, password } = req.body;
  
  const salt = bcrypt.genSalt(10);
  const hashedPassword = bcrypt.hashSync(password, await salt);

  try {
    await pool.query(createNewUser, [email, hashedPassword]);
    res.json(createNewUser);

    const token = jwt.sign({ email }, "secret", { expiresIn: "1h" });

    res.json({ email, token });
  } catch (error) {
    console.log(error);
    if (error) {
      res.json({ detail: "User already exists" });
    }
  }
};

export { singUpController };
