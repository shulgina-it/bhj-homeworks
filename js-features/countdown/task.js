const timer = document.getElementById('timer');

let time = Number(timer.textContent);

function formatTime(value) {
  const hours = String(Math.floor(value / 3600)).padStart(2, '0');

  const minutes = String(Math.floor((value % 3600) / 60)).padStart(2, '0');

  const seconds = String(value % 60).padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
}

timer.textContent = formatTime(time);

const intervalId = setInterval(() => {
  time--;

  timer.textContent = formatTime(time);

  if (time === 0) {
    clearInterval(intervalId);

    alert('Вы победили в конкурсе!');
  }
}, 1000);