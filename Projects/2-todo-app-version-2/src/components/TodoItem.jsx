function TodoItem(){


  let todoitem = 'Go to college';
  let todoDate = '25/12/2023';

  return(
    <div class="container">
        <div class="row pg-row">
          <div class="col-6">
            {todoitem}
          </div>
          <div class="col-4">
            {todoDate}
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger pg-btn ">Delete</button>
          </div>
        </div>
        </div>

  );
}
export default TodoItem;