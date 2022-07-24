import React, { useState } from "react";

function EditForm({
  handleClose,
  updateTodo,
  addTodo,
  todo,
  col,
  index,
  removeTodo,
}) {
  const [text, setText] = useState(todo.text);
  const [description, setDescription] = useState(todo.description);
  const [column, setColumn] = useState(col);
  const [check, setCheck] = useState(false);
  const [delcheck, setDelcheck] = useState(false);
  const handleSubmit = (e) => {
    handleClose();
    if (col !== column) {
      removeTodo(index, col);
      addTodo(text, description, column);
    }
    if (todo.text !== text || todo.description !== description) {
      updateTodo(text, description, index, col);
    }
    e.preventDefault();
  };

  const handleDescription = (e) => {
    console.log(e.target.value);
    if (e.target.value.length ===0) {
      setCheck(true);
    }
    else
    {
      setCheck(false);
    }
    setDescription(e.target.value);
  };
  const handleColumn = (e) => {
    if (e.target.value !== col) {
      setDelcheck(true);
    }
    if (e.target.value === col) {
      setDelcheck(false);
    }
    setColumn(e.target.value);
  };
  return (
    <form className="addform">
      <label className="form-label">Title</label>
      <input
        type="text"
        placeholder="title"
        className="input form-control"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {!/^[a-zA-Z\s]*$/.test(text) && (
        <div className="error">Title should contain only alphabets</div>
      )}

      <label className="form-label">Description</label>
      <textarea
        type="text"
        placeholder="description"
        className="textarea form-control"
        value={description}
        onChange={handleDescription}
      />
      {description.length < 25 && (
        <div className="error">Description length must be greater than 25</div>
      )}
      <label className="form-label">Column</label>
      <select value={column} className="form-control" onChange={handleColumn}>
        <option value="To-do"> To-do </option>
        <option value="Doing"> Doing </option>
        <option value="Done"> Done </option>
      </select>
      <div className="editbutton">
        <button
          className="submitbutton"
          onClick={() => {
            removeTodo(index, column);
          }}
          disabled={delcheck}
        >
          Delete
        </button>
        <button
          className="submitbutton"
          onClick={handleSubmit}
          disabled={check}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default EditForm;
