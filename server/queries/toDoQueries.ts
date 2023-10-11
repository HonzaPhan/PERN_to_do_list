export const getAllToDoItems = "SELECT * FROM todoslist WHERE user_email = $1";

export const getUser = "SELECT * FROM users WHERE email = $1";

export const createNewToDoItem =
  "INSERT INTO todoslist (user_email, title, progress) VALUES ($1, $2, $3) RETURNING *";

export const updateToDoItem = "UPDATE todoslist SET user_email = $1, title = $2, progress = $3 WHERE id = $4 RETURNING *";

export const deleteToDoItem = "DELETE FROM todoslist WHERE id = $1 RETURNING *";

export const createNewUser = "INSERT INTO users (email, hashed_password) VALUES ($1, $2) RETURNING *";