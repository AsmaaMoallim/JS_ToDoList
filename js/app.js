const addform = document.querySelector(".add");
const todos = document.querySelector(".todos");
const search = document.querySelector(".search input");

// create li template
const generateTemplate = (todo) => {
  const html = `<li class="list-group-item text-light d-flex justify-content-between align-items-cen">
                <span>${todo}
                </span>
                <i class="far fa-trash-alt delete"></i></li>`;

  todos.innerHTML += html;
};

// add todo
addform.addEventListener("submit", (e) => {
  e.preventDefault();
  Todo = addform.add.value.trim();

  if (Todo.length) {
    generateTemplate(addform.add.value.trim());
    addform.reset(); // this is new
  }
});

// delete todo
todos.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentNode.remove();
  }
});

// filter todos
const filterTodos = (searchKey) => {
  Array.from(todos.children)
    .filter((item) => !item.textContent.includes(searchKey))
    .forEach((item) => item.classList.add("filtered"));

  Array.from(todos.children)
    .filter((item) => item.textContent.includes(searchKey))
    .forEach((item) => item.classList.remove("filtered"));
};

// search
search.addEventListener("keyup", (e) => {
  e.preventDefault();

  searchKey = search.value.trim();
  filterTodos(searchKey);
});
