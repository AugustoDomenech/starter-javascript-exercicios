var tasks = [];

addTask = () => {
  var inputElement = document.querySelector("input");
  var indexTask = tasks.push(inputElement.value);
  inputElement.value = "";
  renderList();
};

renderList = () => {
  var listElement = document.querySelector("#listTask");
  listElement.innerHTML = "";
  for (task in tasks) {
    var txtTask = document.createTextNode(tasks[task]);
    var btnRemove = document.createElement("button");
    var btnResolved = document.createElement("button");

    btnRemove.innerHTML = "✘";
    btnRemove.setAttribute("onclick", `removeTask(${task})`);

    btnResolved.innerHTML = "✔";

    var listElement = document.querySelector("#listTask");
    listElement.appendChild(txtTask);
    listElement.appendChild(btnRemove);
    listElement.appendChild(btnResolved);
  }
};

removeTask = index => {
  tasks.splice(index, 1);
  renderList();
};
