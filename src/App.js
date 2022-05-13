import { useState, useEffect } from "react";
import "./App.css";
import Todo from "./Components/Todo";
import TodoForm from "./Components/TodoForm";
import Modal from "./Components/Modal";
function App() {
  const [todos, setTodos] = useState(
    JSON.parse(window.localStorage.getItem("todos")) || [
      [{ text: "first", description: "abcdefghijklmnopqrstuvwxyza" }],
      [{ text: "lunch", description: "abcdefghijklmnopqrstuvwxyza" }],
      [{ text: "Bodoapp", description: "abcdefghijklmnopqrstuvwxyza" }],
    ]
  );
  useEffect(() => {
    setTodos(JSON.parse(window.localStorage.getItem("todos")));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [col, setCol] = useState(0);
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };

  const getIndex = (num) => {
    let index = 0;
    if (num === "To-do") {
      index = 0;
    }
    if (num === "Doing") {
      index = 1;
    }
    if (num === "Done") {
      index = 2;
    }
    return index;
  };
  const addTodo = (text, description, num) => {
    let index = getIndex(num);
    const newTodos = [
      ...todos,
      todos[index].push({ text, description }),
      ...todos,
    ];
    setTodos(newTodos);
  };
  const removeTodo = (index, col) => {
    col = getIndex(col);
    const newTodos = [...todos, todos[col].splice(index, 1), ...todos];
    setTodos(newTodos);
  };
  const updateTodo = (text, description, index, col) => {
    col = getIndex(col);
    const newTodos = [
      ...todos,
      (todos[col][index].text = text),
      (todos[col][index].description = description),
      ...todos,
    ];
    setTodos(newTodos);
  };
  return (
    <div className="app">
      <h3 className="heading">Trello</h3>
      <button className="button" onClick={showModal}>
        Add Task
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: 20,
        }}
      >
        <div className="todo-list">
          <Modal show={show} handleClose={hideModal}>
            <TodoForm addTodo={addTodo} handleClose={hideModal} />
          </Modal>
          <h3>To-do</h3>
          {todos[0].map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              col={"To-do"}
              addTodo={addTodo}
              removeTodo={removeTodo}
              updateTodo={updateTodo}
              handleClose={hideModal}
            />
          ))}
        </div>
        <div className="todo-list">
          <h3>Doing</h3>

          {todos[1].map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              col={"Doing"}
              addTodo={addTodo}
              removeTodo={removeTodo}
              updateTodo={updateTodo}
              handleClose={hideModal}
            />
          ))}
        </div>
        <div className="todo-list">
          <h3>Done</h3>

          {todos[2].map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              col={"Done"}
              addTodo={addTodo}
              removeTodo={removeTodo}
              updateTodo={updateTodo}
              handleClose={hideModal}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
