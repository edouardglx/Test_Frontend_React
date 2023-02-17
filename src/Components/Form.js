import { nanoid } from "nanoid";

const Form = ({ newTodo, setNewTodo, todos, setTodos }) => {
  return (
    <form
      className="add-component"
      onSubmit={(e) => {
        e.preventDefault();
        if (newTodo) {
          setTodos([...todos, { id: nanoid(10), task: newTodo }]);
          setNewTodo("");
        }
      }}
    >
      <input
        name="add"
        type="text"
        placeholder="Add to do..."
        onChange={(event) => {
          setNewTodo(event.target.value);
        }}
        value={newTodo}
        autoComplete="off"
      ></input>
      <button type="Submit">Add</button>
    </form>
  );
};

export default Form;
