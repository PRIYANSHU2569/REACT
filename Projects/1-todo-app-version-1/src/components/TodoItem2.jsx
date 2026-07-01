function TodoItem() {
  let todoitem = "Buy Milk";
  let todoDate = "24/12/2023";

  return (
    <div className="container">
      <div className="row pg-row">
        <div className="col-6">{todoitem}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger pg-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
