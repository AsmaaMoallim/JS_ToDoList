const addform = document.querySelector(".add");
const todos = document.querySelector(".todos");

addform.addEventListener("submit", (e) => {
  e.preventDefault();

  Todo = `<li class="list-group-item text-light d-flex justify-content-between align-items-cen">
                <span>${addform.add.value}
                </span>
                <i class="far fa-trash-alt delete"></i>
        </li>`;

  todos.innerHTML += Todo;
  addform.add.value = "";

});
todos.addEventListener("click", (e) => {
  let classlis = e.target.getAttribute("class");
  if (classlis) {
    if (classlis.includes("delete")) {
      e.target.parentNode.remove();
    }
  }
});
