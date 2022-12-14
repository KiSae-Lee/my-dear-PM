alert("app.js start!");
const a = 5; // constant value. cannot be updated.
const b = "hi"; // string.

let c = 10; // normal variable. can be updated.

var d = 3; // old style for variable. works same as let. never use it.

const flag = true; // boolean.
const NULL = null; // null. means nothing.
let UNDEFINED;

let daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT"];
const nonsence = [1, "number", false, null, undefined]; // can put any datatype in the array.

daysOfWeek.push("SUN"); // add item at the last index.

// object in javascript. just like simple class in c++.
// properties in const object can be changed.
const player = {
  name: "MyPlayer",
  points: 10,
};

player.lastName = "JavaScript"; // properties can be added anytime.

// method in javascript.
function sayHello(nameOfPerson) {
  if (nameOfPerson == undefined) {
    nameOfPerson = "none";
  }
  console.log("Hello from function! My name is " + nameOfPerson + ".");
}

// method in the object
const myObject = {
  name: "OBJECT",
  sayHello: function () {
    console.log("Hello! I'm " + myObject.name);
  },
};

// function with a return.
function calculateKRAge(internationalAge) {
  return internationalAge + 2;
}

// prompt. get input from the user.
const age = prompt("How old are you?");
if (isNaN(parseInt(age))) {
  alert("How old are you? plase give me a number...");
} else {
  alert("You are " + age);
}

// get html object to the javssicript.
console.dir(document);

// grab an id.
const title = document.getElementById("title");
console.dir(title);
title.innerText = "Got you!";

// grab a class.
const hellos = document.getElementsByClassName("Hello");
console.log(hellos);

// grab a tag.
const tags = document.getElementsByTagName("h1");
console.log(tags);

// grab by query selector. Uses very frequently.
const selectClass = document.querySelector(".myClass h1"); // class and tag.
console.log(selectClass);
selectClass.style.color = "blue";

const selectID = document.querySelector("#title"); // id.
console.log(selectID);

// grab by QuerySelectorAll. Uses very frequently.
const select2 = document.querySelectorAll(".myClass h1");
console.log(select2);

// click event. You can search what can you do in javascript on MDN.
// the event always start from 'on' prefix.
function handleTitleClick() {
  console.log("title was clicked");
  selectID.style.color = "blue";
}

function HandleMouseEnter() {
  console.log("mouse enter!");
}

function HandleMouseLeave() {
  console.log("mouse leave!");
}

selectID.addEventListener("click", handleTitleClick);
// or
selectID.onclick = handleTitleClick; // choose one you like more.
selectID.addEventListener("mouseenter", HandleMouseEnter);
selectID.addEventListener("mouseleave", HandleMouseLeave);

// window events.
function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleCopy() {
  console.log("copied!");
  selectID.innerText = "You copied!";
}
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleCopy);

// some logs.
console.log("app.js start!");
console.log(UNDEFINED);
console.log(daysOfWeek);
console.log(daysOfWeek[0]); // get a element of the array.

console.log(player);
console.log(player.name, player.points);
console.log(player["name"]); // just like `player.name`

sayHello("H");

myObject.sayHello();

console.log(calculateKRAge(27));
