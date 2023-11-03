function newElement() {
  const task = document.getElementById("task").value;

  if (task == "") {
    const toastError = document.getElementById("liveToastError");
    toastError.classList.remove("hide");
    toastError.classList.add("show");

    setTimeout(function () {
      toastError.classList.remove("show");
      toastError.classList.add("hide");
    }, 2000);
    return;
  }

  const list = document.getElementById("list");
  const newElement = document.createElement("li");
  newElement.textContent = task;
  list.appendChild(newElement);

  const toastAdd = document.getElementById("liveToastAdd");
  toastAdd.classList.remove("hide");
  toastAdd.classList.add("show");

  setTimeout(function () {
    toastAdd.classList.remove("show");
    toastAdd.classList.add("hide");
  }, 2000);

  document.getElementById("task").value = "";
}
