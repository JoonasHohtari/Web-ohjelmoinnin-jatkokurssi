import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = async (todo) => {
    console.log(todo);
    const response = await fetch(
      "https://todo-list-1b032-default-rtdb.europe-west1.firebasedatabase.app/todos.json",
      {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    fetchTodos();
  };

  const fetchTodos = async () => {
    const response = await fetch(
      "https://todo-list-1b032-default-rtdb.europe-west1.firebasedatabase.app/todos.json"
    );
    const data = await response.json();

    const fetchedTodos = [];

    for (const key in data) {
      fetchedTodos.push({
        id: key,
        text: data[key].text,
        date: data[key].date,
      });
    }
    setTodos(fetchedTodos);
  };

  useEffect(() => {
    console.log("Use Effect");
    fetchTodos();
  }, []);
  let content;

  todos.length > 0
    ? (content = <TodoList todos={todos} />)
    : (content = <p>You have no todos yet!</p>);

  return (
    <>
      <section>
        <AddTodo onAddTodo={addTodoHandler} />
      </section>
      <section>{content}</section>
    </>
  );
};

export default App;
