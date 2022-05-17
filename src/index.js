import "./styles.css";

let clcokEl = document.getElementById("app");
let timeEl = document.createElement("h1");
const displayTime = () => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (hours > 12) hours -= 12;
  if (hours === 0) hours = 1;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  const currentTime = `${hours} : ${minutes} : ${seconds}`;
  timeEl.innerText = currentTime;
  clcokEl.appendChild(timeEl);
};

setInterval(displayTime, 1000);
