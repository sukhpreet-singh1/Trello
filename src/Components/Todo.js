import React, { useState } from 'react'
import '../App.css'
import EditForm from './EditForm';
import Modal from './Modal';
function Todo({todo,index,col,removeTodo,addTodo,updateTodo,handleClose}) {
  const [show,setShow]=useState(false);
  const showModal =()=>{ setShow(true) };
  const hideModal =()=>{ setShow(false) };
  return (
    <div>
      <Modal show={show} handleClose={hideModal}>
        <EditForm handleClose={handleClose} updateTodo={updateTodo} addTodo={addTodo} todo={todo} col={col} index={index} removeTodo={removeTodo} />
      </Modal>
    <div className="todoouter" onClick={showModal}>
        <div className="todo" >
        <label className='headlabel'>Text</label>
        {todo.text}
        <label className='headlabel'>Description</label>
        {todo.description}
        </div>
    </div>
    </div>
  )
}

export default Todo