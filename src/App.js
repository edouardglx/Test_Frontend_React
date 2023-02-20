import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoList from "./ToDoList";
import Form from "./Components/Form";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Home" element={<TodoList />} />
          <Route path="/Home/add" element={<Form />} />
          <Route path="/Home/delete/:id" element={<TodoList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
