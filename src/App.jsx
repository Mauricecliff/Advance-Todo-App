import { useEffect, useState } from "react";
import { CardComp } from "./components";
import { TodoContextProvider } from "./contexts";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const editTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => {
        return prevTodo.id === id ? todo : prevTodo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) =>
      prev.filter((prevTodo) => {
        return prevTodo.id !== id;
      })
    );
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  //delete selected todo
  const deleteCompleted = () => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.completed === false));
  };

  //retrieving from browser localstorage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  //setting the todos state to browser localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider
      value={{
        todos,
        toggleComplete,
        addTodo,
        deleteTodo,
        editTodo,
        deleteCompleted,
      }}
    >
      <div>
        <div className="flex justify-center mt-3">
          <CardComp />
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
