import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Inputt = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos), [todos]);
  });

  const handleAddTodo = () => {
    if (inputValue) {
      if (editIndex !== null) {
        const newTodos = [...todos];
        newTodos[editIndex] = inputValue;
        setTodos(newTodos);
        setEditIndex(null);
      } else {
        setTodos([inputValue, ...todos]);
      }
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
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
