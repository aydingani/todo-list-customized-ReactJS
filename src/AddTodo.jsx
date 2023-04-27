const AddTodo = ({ inputValue, onInputChange, onAddTodo, editIndex }) => (
  <div>
    <input
      type="text"
      value={inputValue}
      onChange={(e) => onInputChange(e.target.value)}
    />
    <button className="add-btn" onClick={onAddTodo}>
      {editIndex !== null ? "Save" : "Add"}
    </button>
  </div>
);

export default AddTodo;
