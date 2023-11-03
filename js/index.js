function newElement() {
  const task = document.getElementById("task").value;

  if (task == "") {
    const toast = document.getElementById("liveToastError");
    toast.classList.remove("hide");
    toast.classList.add("show");
    return;
  }

  const list = document.getElementById("list");
  const newElement = document.createElement("li");
  newElement.textContent = task;
  list.appendChild(newElement);

  document.getElementById("task").value = "";
}
