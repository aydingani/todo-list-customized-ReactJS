import { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Inputt = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  const handleAddTodo = () => {
    if (inputValue) {
      let newTodos;
      if (editIndex !== null) {
        newTodos = [...todos];
        newTodos[editIndex] = inputValue;
        setEditIndex(null);
      } else {
        newTodos([...todos, inputValue]);
      }
      setTodos(newTodos);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const handleEditTodo = (index) => {
    setInputValue(todos[index]);
    setEditIndex(index);
  };

  return (
    <div className="whole">
      <AddTodo
        inputValue={inputValue}
        onInputChange={setInputValue}
        onAddTodo={handleAddTodo}
        editIndex={editIndex}
      />
      <h3>My Todo List</h3>
      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onEditTodo={handleEditTodo}
      />
    </div>
  );
};

export default Inputt;
