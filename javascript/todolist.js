







var todoInput = document.getElementById("todo-input");
var taskList  = document.getElementById("task-list");
var container = document.getElementById("todo-list-container");




todoInput.addEventListener("keypress", function (e) {
    // console.log(todoInput.value);

    if (e.keyCode === 13) {
        var li = document.createElement("li");
        taskList.appendChild(li).innerText = todoInput.value;

    }
});

