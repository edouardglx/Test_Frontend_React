import { useState, useEffect } from "react";
import axios from "axios";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [idToSend, setIdToSend] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3008/Home");
        setTodos(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const DeleteToDo = async () => {
      try {
        const response = await axios.delete(
          `http://localhost:3008/Home/delete/${idToSend}`
        );
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    DeleteToDo();
  }, [idToSend]);

  return (
    <>
      {todos !== [] ? (
        <div className="list-component">
          {todos.map((el, index) => {
            return (
              <div key={index + 1} className="item">
                <span>{index + 1}</span>
                <span>{el.task}</span>
                <span
                  className="trash"
                  onClick={() => {
                    setIdToSend(el._id);
                  }}
                >
                  🗑️
                </span>
              </div>
            );
          })}
        </div>
      ) : (
        <p>Vous n'avez pas de tache pour le moment!</p>
      )}
    </>
  );
};

export default Todo;
