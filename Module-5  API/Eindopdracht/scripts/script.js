const displayResults = document.querySelector("#displayTodo");

const getDataCall = async () => {
  const data = await getData();
  console.log(data);
  let html = ``;
  data.forEach(todo => {
    html += `<li data-id="${todo.id}" class="todo-item">
    <div class='todoDescription'>${todo.description}</div>
    <i class="fa fa-trash" ></i>
    </li>`;
    displayResults.innerHTML = html;
  });
};
getDataCall();

// Add todo
const addTodoButton = document.querySelector("#addTodoButton");
const addTodo = document.querySelector("#todoTextfield");

const postDataCall = async () => {
  const newTodo = await addTodo.value.trim();
  const newTodoData = { description: newTodo, done: false };
  document.querySelector("#todoTextfield").value = "";
  postData(newTodoData);
};

addTodoButton.addEventListener("click", async () => {
  if (addTodo.value.trim() == "") {
  } else {
    postDataCall();
  }
});

addTodo.addEventListener("keypress", async e => {
  if (e.key === "Enter" && addTodo.value.trim() == "") {
  } else if (e.key === "Enter") {
    postDataCall();
  }
});

// delete todo
displayResults.addEventListener("click", e => {
  if (e.target.tagName === "I") {
    const id = e.target.parentElement.getAttribute("data-id");
    deleteData(id);
  }
});
