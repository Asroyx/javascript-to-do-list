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

  document.getElementById("task").value = "";
}
