document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput") as HTMLInputElement;
    const addTaskBtn = document.getElementById("addTaskBtn") as HTMLButtonElement;
    const taskList = document.getElementById("taskList") as HTMLUListElement;
    const themeToggle = document.getElementById("themeToggle") as HTMLButtonElement;

    // Adicionar tarefa
    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";

        li.innerHTML = `
            <div class="form-check">
                <input class="form-check-input me-2 task-checkbox" type="checkbox">
                <label class="form-check-label">${taskText}</label>
            </div>
            <button class="btn btn-danger btn-sm remove-task">X</button>
        `;

        taskList.appendChild(li);
        taskInput.value = "";

        // Remover tarefa
        li.querySelector(".remove-task")!.addEventListener("click", () => {
            li.remove();
        });

        // Marcar tarefa como concluída
        li.querySelector(".task-checkbox")!.addEventListener("change", (e) => {
            const label = li.querySelector(".form-check-label")!;
            if ((e.target as HTMLInputElement).checked) {
                label.classList.add("text-decoration-line-through", "text-muted");
            } else {
                label.classList.remove("text-decoration-line-through", "text-muted");
            }
        });
    });

    // Alternância de tema
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("bg-dark");
        document.body.classList.toggle("text-white");

        const icon = themeToggle.querySelector("i")!;
        icon.classList.toggle("fa-moon");
        icon.classList.toggle("fa-sun");
    });
});
