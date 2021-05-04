function createTodo() {
  let no = num.value;
  let user = username.value;
  let todos = task.value;
  let status = stat.value;

  let allTodo = {
    slno: no,
    user_name: user,
    todos: todos,
    status: status,
  }
localStorage.setItem(no, JSON.stringify(allTodo));
}
function displayTodo() {
  // fetch all todos
  let len = localStorage.length;
  let html_data = ``;
  for (let i = 0; i < len; i++) {
    let todoo = JSON.parse(localStorage.getItem(localStorage.key(i)));
    console.log(todoo);

    html_data += ` <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h6 class="card-subtitle mb-2 text-muted">${todoo.slno}</h6>
          <h5 class="card-title">${todoo.todos}</h5>
          <p class="card-text">${todoo.status}</p>
          <a href="#" class="card-link">${todoo.user_name}</a>
        </div>
      </div> `;
  }
  document.querySelector("#result").innerHTML = html_data;
}
