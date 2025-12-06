export function AddTodo() {
  return (
    
      <div className="container">
        <div className="row kg-row">
          <div className="col-4">
            <input type="text" placeholder="Enter Todo Here" />
          </div>
          <div className="col-3" id="second">
            <input type="date" />
          </div>
          <div className="col-1">
            <button type="button" className="btn btn-success kg-button" id="add">
              Add
            </button>
          </div>
        </div>
      </div>
  );
}
