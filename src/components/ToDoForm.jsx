import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToDoSchema } from "../schemas/ToDoSchema.js";
import { createToDo } from "../actions/todos.js";

export default function ToDoForm() {
  const form = useForm({
    defaultValues: {
      content: "",
    },
    resolver: zodResolver(ToDoSchema),
  });
  const handleSubmit = (data) => {
    createToDo(data.content);
    form.reset();
  };
  return (
    <form
      className={"flex flex-row gap-x-2 w-full p-6"}
      onSubmit={form.handleSubmit(handleSubmit)}
    >
      <input
        className={"border-black border-2 rounded-lg w-full p-2"}
        placeholder={"Descriptif de la tâche..."}
        {...form.register("content")}
      />
      <button
        className={"border-2 rounded-xl p-2 cursor-pointer"}
        type="submit"
      >
        Ajouter
      </button>
    </form>
  );
}
