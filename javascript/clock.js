const clock = document.querySelector("h2#clock");

const Days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function getClock() {
  const date = new Date();
  const day = date.getDay();
  const hour = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${Days[day]} ${hour}:${min}:${sec}`;
}

getClock();
setInterval(getClock, 1000);
