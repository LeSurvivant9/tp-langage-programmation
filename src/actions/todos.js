import { neon } from "@neondatabase/serverless";

export const getAllToDos = async () => {
  const sql = neon(import.meta.env.VITE_DATABASE_URL);
  return sql`SELECT * FROM todos`;
}

export const createToDo = async (content) => {
  const sql = neon(import.meta.env.VITE_DATABASE_URL);
  return sql`INSERT INTO todos (content) VALUES (${content})`;
}

export const updateToDo = async (id, isCheck) => {
  const sql = neon(import.meta.env.VITE_DATABASE_URL);
  return sql`UPDATE todos SET is_check = ${isCheck} WHERE id = ${id}`;
}

export const deleteToDo = async (id) => {
  const sql = neon(import.meta.env.VITE_DATABASE_URL);
  return sql`DELETE FROM todos WHERE id = ${id}`;
}