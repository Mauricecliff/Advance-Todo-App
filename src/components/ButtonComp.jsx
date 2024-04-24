/* eslint-disable react/prop-types */
import React from "react";
import { Button } from "./ui/button";
import { useTodo } from "@/contexts";
import { toast } from "./ui/use-toast";

function ButtonComp({
  title = "add",
  className = "bg-slate-800 w-full",
  avTodo,
  setIsEdit,
  todo,
}) {
  const { editTodo } = useTodo();

  const editHandler = () => {
    editTodo(todo.id, { ...todo, todo: avTodo });
    setIsEdit(false);
    toast({ title: "todo updated successfully" });
  };

  return (
    <Button className={`${className}`} onClick={() => editHandler()}>
      {title}
    </Button>
  );
}

export default ButtonComp;
