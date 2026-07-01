function TodoItem() {
  let todoitem = "Go to college";
  let todoDate = "25/12/2023";

  return (
    <div className="container">
      <div className="row pg-row">
        <div className="col-6">{todoitem}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger pg-btn ">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
