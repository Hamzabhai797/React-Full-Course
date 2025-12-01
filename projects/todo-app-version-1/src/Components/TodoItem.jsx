function TodoItem() {
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-4">Buy Milk</div>
        <div class="col-3">21/11/2025</div>
        <div class="col-1">
          <button type="button" class="btn btn-danger kg-button">
            delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;