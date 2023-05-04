const AddTodo = ({ inputValue, onInputChange, onAddTodo, editIndex }) => (
  <div className="form-row">
    <label className="new-note">New Note</label>
    <input
      type="text"
      maxLength="35"
      value={inputValue}
      placeholder="Your Note"
      onChange={(e) => onInputChange(e.target.value)}
    />
    <span className="remaining-symbols">{inputValue.length}/35</span>
    <button className="add-btn" onClick={onAddTodo}>
      {editIndex !== null ? "Save" : "Add"}
    </button>
  </div>
);

export default AddTodo;
