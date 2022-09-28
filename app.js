// debug options.
const DEBUG = true;
function debugLog(message) {
  if (DEBUG) {
    console.log(message);
  }
}

// login stuffs.
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  debugLog("onLoginSubmit function called!");

  const username = loginInput.value;
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;

  debugLog(event);
  debugLog(`login submitted! Username: ${loginInput.value}`);
}

loginForm.addEventListener("submit", onLoginSubmit);

// creator link.
const linkFlag = false;
const link = document.querySelector("#github");

function handleLinkClick(event) {
  if (!linkFlag) {
    event.preventDefault();
  }
  debugLog(event);
}

link.addEventListener("click", handleLinkClick);
