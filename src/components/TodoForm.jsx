import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useTodo } from "@/contexts";
import { useToast } from "./ui/use-toast";

function TodoForm() {
  const { addTodo, todos } = useTodo();
  const [todo, setTodo] = useState("");
  const { toast } = useToast();

  const todoHandler = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
    toast({ title: "todo added successfully..." });
    console.log("todos", todos);
  };

  return (
    <form className="flex gap-2" onSubmit={todoHandler}>
      <Input
        className="w-[100%] bg-white text-black"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button>Add Todo</Button>
    </form>
  );
}

export default TodoForm;
