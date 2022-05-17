import "./styles.css";

let clcokEl = document.getElementById("app");
let timeEl = document.createElement("h1");
const displayTime = () => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let Am_Pm;

  if (hours > 12) {
    hours -= 12;
    Am_Pm = "PM";
  }
  if (hours === 0) {
    hours = 12;
    Am_Pm = "AM";
  }
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  const currentTime = `${hours} : ${minutes} : ${seconds} ${Am_Pm}`;
  timeEl.innerText = currentTime;
  clcokEl.appendChild(timeEl);
};

setInterval(displayTime, 1000);
