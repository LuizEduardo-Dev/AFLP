document.addEventListener("DOMContentLoaded", () => {
    const noteArea = document.getElementById("noteArea") as HTMLTextAreaElement | null;
    const saveBtn = document.getElementById("saveNote") as HTMLButtonElement | null;
    const clearBtn = document.getElementById("clearNote") as HTMLButtonElement | null;
    const themeToggle = document.getElementById("themeToggle") as HTMLButtonElement | null;

    if (noteArea) {
        noteArea.value = localStorage.getItem("noteContent") || "";
    }

    if (saveBtn && noteArea) {
        saveBtn.addEventListener("click", () => {
            localStorage.setItem("noteContent", noteArea.value);
            alert("Nota salva!");
        });
    }

    if (clearBtn && noteArea) {
        clearBtn.addEventListener("click", () => {
            noteArea.value = "";
            localStorage.removeItem("noteContent");
        });
    }

    // Alternância de tema
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("bg-dark");
            document.body.classList.toggle("text-white");

            const icon = themeToggle.querySelector("i");
            if (icon) {
                icon.classList.toggle("fa-moon");
                icon.classList.toggle("fa-sun");
            }
        });
    }
});
