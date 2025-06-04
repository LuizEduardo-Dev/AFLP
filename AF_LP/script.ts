







//Parallax
const canvas = document.getElementById("particleCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
    constructor(public x: number, public y: number, public size: number, public speedX: number, public speedY: number) {}
    
    draw() {
        ctx.fillStyle = "rgba(144, 58, 255, 0.8)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.draw();
    }
}

const particles: Particle[] = [];
for (let i = 0; i < 50; i++) {
    particles.push(new Particle(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() * 5 + 2,
        Math.random() * 2 - 1,
        Math.random() * 2 - 1
    ));
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => p.update());
}

animate();

//TodoList
document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput") as HTMLInputElement;
    const addTaskBtn = document.getElementById("addTaskBtn") as HTMLButtonElement;
    const taskList = document.getElementById("taskList") as HTMLUListElement;

    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = `${taskText} <button class="btn btn-danger btn-sm remove-task">X</button>`;

        taskList.appendChild(li);
        taskInput.value = "";

        li.querySelector(".remove-task")!.addEventListener("click", () => {
            li.remove();
        });
    });
});
