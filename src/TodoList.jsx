import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDeleteTodo, onEditTodo }) => (
  <ul>
    {todos.map((todo, index) => (
      <TodoItem
        key={index}
        todo={todo}
        onDelete={() => onDeleteTodo(index)}
        onEdit={() => onEditTodo(index)}
      />
    ))}
  </ul>
);

export default TodoList;
