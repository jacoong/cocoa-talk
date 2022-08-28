const statusbar__column__time = document.querySelector(".status-bar__column__time");

function showTime(){
const date = new Date();
const h = String(date.getHours()).padStart(2,"0");
const m = String(date.getMinutes()).padStart(2,"0");
const time = `${h}:${m}`
statusbar__column__time.innerText = `${time}`
console.log(time);
}

showTime();
setInterval(showTime, 1000);



