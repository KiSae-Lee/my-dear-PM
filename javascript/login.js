const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const UERNAME_KEY = "username";

const LOCAL_USERNAME = localStorage.getItem(UERNAME_KEY);

function paintGreeting(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello! ${username}`;
}

function onBegin() {
  if (LOCAL_USERNAME != null) {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting(LOCAL_USERNAME);
  }
}

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(UERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreeting(username);
}

// main.
onBegin();
loginForm.addEventListener("submit", onLoginSubmit);
