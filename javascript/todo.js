const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const listToDelete = event.target.parentElement;
  listToDelete.remove();
  toDos = toDos.filter((item) => item.id !== parseInt(listToDelete.id));
  saveToDos();
}

function paintToDo(newToDoObj) {
  const list = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDoObj.text;
  list.id = newToDoObj.id;

  const btn = document.createElement("button");
  btn.innerText = "X";
  btn.addEventListener("click", deleteToDo);

  list.appendChild(span);
  list.appendChild(btn);

  toDoList.appendChild(list);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos != null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
