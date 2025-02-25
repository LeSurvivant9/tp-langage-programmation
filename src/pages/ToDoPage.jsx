import ToDoForm from "../components/ToDoForm.jsx";
import {useState, useEffect} from "react";
import { getAllToDos, updateToDo, deleteToDo } from "../actions/todos.js";

export default function ToDoPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getAllToDos().then((data) => {
      setTodos(data);
    });
  });
  return (
    <div>
      <ToDoForm/>
      <div>
        {todos.map((todo) => (
          <div key={todo.id} className={"flex flex-row gap-x-4 w-full p-6"}>
            <input
              type="checkbox"
              defaultChecked={todo.is_check}
              onChange={(e) => {
                updateToDo(todo.id, e.target.checked);
              }}
            />
            <span className={todo.is_check ? "line-through" : ""}>
              {todo.content}
            </span>
            <button
              className={"border-2 rounded-xl p-2 cursor-pointer hover:bg-red-400"}
              onClick={() => {
                deleteToDo(todo.id);
              }}
            >
              Supprimer
            </button>
            <span>{todo.is_check}</span>
          </div>
        ))}
    </div>
  </div>
  );
}