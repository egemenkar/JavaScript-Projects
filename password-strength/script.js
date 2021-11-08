const password = document.getElementById("password");
const background = document.getElementById("background");

password.addEventListener("input", (e) => setBlur(e.target.value));

function setBlur(password) {
        background.style.filter = `blur(${20 - password.length * 2}px)`;
} 