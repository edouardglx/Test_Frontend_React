const Todo = ({ todos, DeleteToDo }) => {
  return (
    <>
      {todos ? (
        <div className="list-component">
          {todos.map((el, index) => {
            return (
              <div key={index + 1} className="item">
                <span>{index + 1}</span>
                <span>{el.task}</span>
                <span
                  className="trash"
                  onClick={() => {
                    DeleteToDo(el.id, todos);
                  }}
                >
                  🗑️
                </span>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="list-component">
          <p>Vous n'avez rien à faire pour le moment</p>
        </div>
      )}
    </>
  );
};

export default Todo;
