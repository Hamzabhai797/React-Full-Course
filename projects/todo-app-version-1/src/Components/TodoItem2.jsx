function TodoItem2() {

  let name = "Go to College";
  let date = "21/11/2025";
  return (
    <div class="container">
      <div class="row">
        <div class="col-6">{name}</div>
        <div class="col-4">{date}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem2;