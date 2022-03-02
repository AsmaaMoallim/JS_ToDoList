const addform = document.querySelector(".add");
const todos = document.querySelector(".todos");
const searchform = document.querySelector(".search");

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
