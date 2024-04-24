/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useTodo } from "@/contexts";
import { useToast } from "./ui/use-toast";
import { Input } from "./ui/input";
import { ButtonComp } from "./index";
import { Button } from "./ui/button";
import { Checkbox } from "@/components/ui/checkbox";
// eslint-disable-next-line react/prop-types
function TodoItem({ todo }) {
  const { deleteTodo, toggleComplete, deleteCompleted } = useTodo();
  const { toast } = useToast();
  const [isEdit, setIsEdit] = useState(false);
  const [styles, setStyles] = useState("");
  const [title, setTitle] = useState("");
  const [avTodo, setAvTodo] = useState(todo.todo);
  const [isChecked, setIsChecked] = useState(false);

  const updateMe = () => {
    setIsEdit(true);
    setStyles("bg-yellow-400 capitalize w-50% text-center");
    setTitle("update");
  };

  const deleteHandler = (id) => {
    deleteTodo(id);
    toast({ title: "todo deleted successfully..." });
  };

  const cancelMe = () => {
    setIsEdit(false);
  };

  const toggleHandler = () => {
    setIsChecked((prev) => !prev);
    toggleComplete(todo.id);
  };

  const deleteCompletedHandler = () => {
    deleteCompleted();
    toast({ title: "all selected todo deleted..." });
  };

  console.log("todo frm item>>", todo, isChecked);
  return (
    <div>
      <div key={todo.id} className=" bg-white rounded-md p-4 mt-3 text-black">
        {isEdit ? (
          <div>
            <Input
              type="email"
              placeholder="Email"
              className="bg-white text-black"
              value={avTodo}
              onChange={(e) => setAvTodo(e.target.value)}
            />
            <div className="flex justify-center gap-3 mt-3">
              <ButtonComp
                title={title}
                className={styles}
                avTodo={avTodo}
                setIsEdit={setIsEdit}
                todo={todo}
              />
              <Button className="bg-[brown]" onClick={cancelMe}>
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div className="">
              {isChecked && (
                <div className="flex justify-center my-3">
                  <Button
                    className="bg-red-900 hover:bg-red-900 capitalize"
                    onClick={deleteCompletedHandler}
                  >
                    Delete checked todo
                  </Button>
                </div>
              )}
              <div className="flex justify-between items-center my-[20px]">
                <div>
                  <Checkbox
                    id="terms"
                    value={isChecked}
                    onCheckedChange={toggleHandler}
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mx-2 uppercase"
                  >
                    ctd
                  </label>
                </div>
                <div>
                  <p>{todo?.todo}</p>
                </div>
                <div>
                  <Button
                    className="text-white capitalize bg-red-400 hover:bg-red-400"
                    onClick={() => deleteHandler(todo.id)}
                  >
                    delete
                  </Button>
                </div>
              </div>
              <div className="mt-3 w-full">
                <Button className="w-full" onClick={() => updateMe()}>
                  Edit
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default TodoItem;
