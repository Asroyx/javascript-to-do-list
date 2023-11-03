const list = document.getElementById("list");

list.addEventListener("click", (e) => {
  e.target.classList.toggle("checked");
});

function newElement() {
  const task = document.getElementById("task").value;
  const toastError = document.getElementById("liveToastError");
  const toastAdd = document.getElementById("liveToastAdd");

  if (task === "") {
    toastError.classList.replace("hide", "show");
    setTimeout(() => toastError.classList.replace("show", "hide"), 2000);
    return;
  }

  const newElement = document.createElement("li");
  newElement.textContent = task;
  list.appendChild(newElement);

  const span = document.createElement("SPAN");
  span.className = "close";
  span.textContent = "\u00D7";
  newElement.appendChild(span);

  span.addEventListener("click", () => list.removeChild(newElement));

  toastAdd.classList.replace("hide", "show");
  setTimeout(() => toastAdd.classList.replace("show", "hide"), 2000);

  document.getElementById("task").value = "";
}
