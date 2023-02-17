import { useState } from "react";

import "./todolist.scss";

import Form from "./Components/Form";
import Title from "./Components/Title";
import Todo from "./Components/Todo";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function DeleteToDo(id, currArr) {
    let updateArray = [];
    updateArray = currArr.filter((el) => el.id !== id);
    setTodos(updateArray);
  }

  return (
    <div className="todo-component">
      <Title title="To Do List" />
      <Form
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        todos={todos}
        setTodos={setTodos}
      />
      <Todo todos={todos} DeleteToDo={DeleteToDo} />
    </div>
  );
};

export default TodoList;
