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
    if (e.target.value.length < 25) {
      setCheck(!false);
    }
    if (e.target.value.length >= 25 && /^[a-zA-Z\s]*$/.test(value)) {
      setCheck(!true);
    }
    setDescription(e.target.value);
  };

  return (
    <form className="addform">
      <label>Title</label>
      <input
        type="text"
        placeholder="Title"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {value != "" && !/^[a-zA-Z\s]*$/.test(value) && (
        <div className="error">Title should contain only alphabets</div>
      )}
      <label>Description</label>
      <textarea
        type="text"
        placeholder="Description"
        className="textarea"
        value={description}
        onChange={handleDescription}
      />
      {description != "" && description.length < 25 && (
        <div className="error">Description length must be greater than 25</div>
      )}
      <label>Column</label>
      <select value={column} onChange={(e) => setColumn(e.target.value)}>
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
