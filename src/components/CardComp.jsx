import { useTodo } from "@/contexts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { TodoForm, TodoItem } from "./index";

function CardComp() {
  const { todos } = useTodo();

  console.log("todos from cardcomp>>", todos);

  return (
    <Card className="sm-w-[100%] md-[100%] bg-neutral-800 text-white">
      <CardHeader>
        <CardTitle className="text-center">Advance Todo</CardTitle>
        <TodoForm />
      </CardHeader>
      <CardContent>
        {todos && todos.length > 0 ? (
          todos.map((todo) => (
            <>
              <TodoItem key={todo.id} todo={todo} />
            </>
          ))
        ) : (
          <p className="text-yellow-400 text-center">
            no todo add a new todo item{" "}
          </p>
        )}
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}

export default CardComp;
