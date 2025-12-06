function TodoItem({ todoname, tododate }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-4">{todoname}</div>
        <div className="col-3">{tododate}</div>
        <div className="col-1">
          <button type="button" className="btn btn-danger kg-button">
            delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;