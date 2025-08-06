const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting")

const CLASS_HIDDEN = "hidden";
const USERNAME_KEY = "username";

function onLogin(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(CLASS_HIDDEN);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Welcome ${username}`;
    greeting.classList.remove(CLASS_HIDDEN);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.addEventListener("submit", onLogin);
    loginForm.classList.remove(CLASS_HIDDEN);
} else {
    paintGreetings(savedUsername);
}