function newElement() {
  const task = document.getElementById("task").value;

  if (task == "") {
    const toastError = document.getElementById("liveToastError");
    toastError.classList.remove("hide");
    toastError.classList.add("show");
    return;
  }

  const list = document.getElementById("list");
  const newElement = document.createElement("li");
  newElement.textContent = task;
  list.appendChild(newElement);

  const toastAdd = document.getElementById("liveToastAdd");
  toastAdd.classList.remove("hide");
  toastAdd.classList.add("show");

  document.getElementById("task").value = "";
}
