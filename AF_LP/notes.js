document.addEventListener("DOMContentLoaded", function () {
    var noteArea = document.getElementById("noteArea");
    var saveBtn = document.getElementById("saveNote");
    var clearBtn = document.getElementById("clearNote");
    var themeToggle = document.getElementById("themeToggle");
    if (noteArea) {
        noteArea.value = localStorage.getItem("noteContent") || "";
    }
    if (saveBtn && noteArea) {
        saveBtn.addEventListener("click", function () {
            localStorage.setItem("noteContent", noteArea.value);
            alert("Nota salva!");
        });
    }
    if (clearBtn && noteArea) {
        clearBtn.addEventListener("click", function () {
            noteArea.value = "";
            localStorage.removeItem("noteContent");
        });
    }
    // Alternância de tema
    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            document.body.classList.toggle("bg-dark");
            document.body.classList.toggle("text-white");
            var icon = themeToggle.querySelector("i");
            if (icon) {
                icon.classList.toggle("fa-moon");
                icon.classList.toggle("fa-sun");
            }
        });
    }
});
