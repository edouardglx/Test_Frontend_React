import "./todolist.scss";

import Form from "./Components/Form";
import Title from "./Components/Title";
import Todo from "./Components/Todo";

const TodoList = () => {
  return (
    <div className="todo-component">
      <Title title="To Do List" />
      <Form />
      <Todo />
    </div>
  );
};

export default TodoList;
