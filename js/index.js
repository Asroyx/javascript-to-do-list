function newElement() {
  const task = document.getElementById("task").value;

  const list = document.getElementById("list");
  const newElement = document.createElement("li");
  newElement.textContent = task;
  list.appendChild(newElement);

  document.getElementById("task").value = "";
}
