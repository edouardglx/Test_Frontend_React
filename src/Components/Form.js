import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [newTodo, setNewTodo] = useState("");
  const handleTask = async () => {
    try {
      if (newTodo.length >= 6) {
        const taskToSend = {
          task: newTodo,
          done: false,
        };
        const response = await axios.post(
          "http://localhost:3008/Home/add",
          taskToSend
        );
        setNewTodo("");
        console.log(response.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <form className="add-component" onSubmit={handleTask}>
      <input
        name="add"
        type="text"
        placeholder="Add to do..."
        onChange={(event) => {
          setNewTodo(event.target.value);
        }}
        value={newTodo.task}
        autoComplete="off"
      ></input>
      <button type="Submit">Add</button>
    </form>
  );
};

export default Form;
