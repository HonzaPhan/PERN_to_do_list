CREATE DATABASE todoapp;

CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    user_email VARCHAR(150) NOT NULL,
    title VARCHAR(30) NOT NULL,
    progress INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
    email VARCHAR(150) PRIMARY KEY,
    hashed_password VARCHAR(150) NOT NULL
);

INSERT INTO todos (id, user_email, title, progress, created_at) VALUES
    ('honzaphan98@gmail.com', 'To Do', 0)