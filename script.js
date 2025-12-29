// Typing Effect
const text = ["Full Stack Developer", "PHP & CakePHP Expert", "System Integration Specialist"];
let index = 0;
let char = 0;
const typingEl = document.getElementById("typingText");

function type() {
    if (char < text[index].length) {
        typingEl.innerHTML += text[index].charAt(char);
        char++;
        setTimeout(type, 80);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (char > 0) {
        typingEl.innerHTML = text[index].substring(0, char - 1);
        char--;
        setTimeout(erase, 40);
    } else {
        index = (index + 1) % text.length;
        setTimeout(type, 300);
    }
}

type();

// Skill Animation on Scroll
const bars = document.querySelectorAll(".progress");

window.addEventListener("scroll", () => {
    bars.forEach(bar => {
        const value = bar.getAttribute("data-value");
        const top = bar.getBoundingClientRect().top;
        if (top < window.innerHeight) {
            bar.style.width = value + "%";
        }
    });
});

// Theme Toggle
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
});

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
}
