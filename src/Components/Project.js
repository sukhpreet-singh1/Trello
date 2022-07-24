import { useState, useEffect } from "react";
import '../App.css';
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Person from "./Images/Person.png";
import Search from "./Images/Search.svg";
import User from "./Images/User.png";
import Filter from "./Images/Filter.svg";
import { useNavigate } from "react-router-dom";

function Project() {
  const [todos, setTodos] = useState(
    JSON.parse(window.localStorage.getItem("todos")) || [
      [{ text: "first", description: "abcdefghijklmnopqrstuvwxyza" }],
      [{ text: "lunch", description: "abcdefghijklmnopqrstuvwxyza" }],
      [{ text: "Bodoapp", description: "abcdefghijklmnopqrstuvwxyza" }],
    ]
  );
  
  let navigate = useNavigate();
  useEffect(() => {
      let authToken = !sessionStorage.getItem('Auth Token')?localStorage.getItem('Auth Token'):sessionStorage.getItem('Auth Token')

        if (authToken) {
            navigate('/')
            
        }

        if (!authToken) {
            navigate('/login')
        }
        //eslint-disable-next-line
    }, [])
  useEffect(() => {
    setTodos(JSON.parse(window.localStorage.getItem("todos")));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
    <div className="row app">
      <div className="col-2 sidebar">
        <Sidebar/>
      </div>
      <div className="col-10 ps-5">
      <h3 className="d-flex justify-content-between pt-2 pe-2 pb-2">
        <div className="d-flex flex-row align-items-center"><img alt="x" src={Search} height={20} width={20}/><div className="heading">Search</div></div>
        <img alt="x" className="pt-2" src={Person} height={30}/>
        <div className="d-flex flex-row m-0 align-items-center"><div className="heading">Hi!Sukhpreet </div><img alt="x" src={User} height={36} width={36}/> </div>
      </h3>
      <div className="d-flex flex-row justify-content-between align-items-center pt-5"><h4>Projects</h4><div className="pe-4"><img alt="x" src={Filter}/> Filter</div></div>  
      <button className="button" onClick={showModal}>
        Add Task
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: 10,
        }}
      >
        <div className="todo-list">
          <Modal show={show} handleClose={hideModal}>
            <TodoForm addTodo={addTodo} handleClose={hideModal} />
          </Modal>
          <h5>To-do</h5>
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
          <h5>Doing</h5>
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
          <h5>Done</h5>
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
    </div>
  );
}

export default Project;
