import React, { useState } from "react";
import "../App.css";
function TodoForm({ addTodo, handleClose }) {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [column, setColumn] = useState("To-do");
  const [check, setCheck] = useState(true);
  const handleSubmit = (e) => {
    handleClose();
    e.preventDefault();
    if (!value) return;
    addTodo(value, description, column);
    setValue("");
    setDescription("");
    setColumn("");
  };
  const handleDescription = (e) => {
    if (e.target.value.length===0) {
      setCheck(!false);
    }
    else
    {
      setCheck(false);
    }
    setDescription(e.target.value);
  };

  return (
    <form className="addform">
      <label className="form-label">Title</label>
      <input
        type="text"
        placeholder="Title"
        className="input form-control"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {value !== "" && !/^[a-zA-Z\s]*$/.test(value) && (
        <div className="error">Title should contain only alphabets</div>
      )}
      <label>Description</label>
      <textarea
        type="text"
        placeholder="Description"
        className="textarea form-control"
        value={description}
        onChange={handleDescription}
      />
      {description !== "" && description.length < 1 && (
        <div className="error">Description should not be empty</div>
      )}
      <label className="form-label">Column</label>
      <select value={column} className="form-control" onChange={(e) => setColumn(e.target.value)}>
        <option value="To-do"> To-do </option>
        <option value="Doing"> Doing </option>
        <option value="Done"> Done </option>
      </select>
      <div className="editbutton">
        <button
          className="submitbutton"
          onClick={handleSubmit}
          disabled={check}
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
