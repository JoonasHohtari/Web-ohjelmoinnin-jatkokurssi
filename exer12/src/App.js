import AddTodo from "./components/AddPerson";
import TodoList from "./components/FamousPeople";
import { useState, useEffect } from "react";

const App = () => {
  const [famousppl, setTodos] = useState([]);

  const addTodoHandler = async (todo) => {
    console.log(todo);
    const response = await fetch(
      "https://exercise-12-93e21-default-rtdb.europe-west1.firebasedatabase.app/famousppl.json",
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
      "https://exercise-12-93e21-default-rtdb.europe-west1.firebasedatabase.app//famousppl.json"
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
