export function AddTodo() {
  return (
    
      <div class="container">
        <div class="row kg-row">
          <div class="col-4">
            <input type="text" placeholder="Enter Todo Here" />
          </div>
          <div class="col-3" id="second">
            <input type="date" />
          </div>
          <div class="col-1">
            <button type="button" class="btn btn-success kg-button" id="add">
              Add
            </button>
          </div>
        </div>
      </div>
  );
}
