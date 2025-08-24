export default function TodoItem2() {
  let TodoName = "Go to College";
  let TodoDate = "17/8/2025";

  return (
    <div className="container">
      <div class="row Kg-row">
        <div class="col-6">{TodoName}</div>
        <div class="col-4">{TodoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger Kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
// export default TodoItem2;
