document.addEventListener("DOMContentLoaded", function () {
    var taskInput = document.getElementById("taskInput");
    var addTaskBtn = document.getElementById("addTaskBtn");
    var taskList = document.getElementById("taskList");
    var themeToggle = document.getElementById("themeToggle");
    // Adicionar tarefa
    addTaskBtn.addEventListener("click", function () {
        var taskText = taskInput.value.trim();
        if (taskText === "")
            return;
        var li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = "\n            <div class=\"form-check\">\n                <input class=\"form-check-input me-2 task-checkbox\" type=\"checkbox\">\n                <label class=\"form-check-label\">".concat(taskText, "</label>\n            </div>\n            <button class=\"btn btn-danger btn-sm remove-task\">X</button>\n        ");
        taskList.appendChild(li);
        taskInput.value = "";
        // Remover tarefa
        li.querySelector(".remove-task").addEventListener("click", function () {
            li.remove();
        });
        // Marcar tarefa como concluída
        li.querySelector(".task-checkbox").addEventListener("change", function (e) {
            var label = li.querySelector(".form-check-label");
            if (e.target.checked) {
                label.classList.add("text-decoration-line-through", "text-muted");
            }
            else {
                label.classList.remove("text-decoration-line-through", "text-muted");
            }
        });
    });
    // Alternância de tema
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("bg-dark");
        document.body.classList.toggle("text-white");
        var icon = themeToggle.querySelector("i");
        icon.classList.toggle("fa-moon");
        icon.classList.toggle("fa-sun");
    });
});
