'use strict';

const monthsEl = document.querySelector('.months');
const daysEl = document.querySelector('.days');
const hoursEl = document.querySelector('.hours');
const minutesEl = document.querySelector('.minutes');
const secondsEl = document.querySelector('.seconds');


function timeToString(time, words) {
  const num =  time%10;

  if (time >= 5 && time <= 20) return `${time} ${words[2]}`;
  if (num === 1) return `${time} ${words[0]}`;
  if (num >= 2 && num <= 4) return `${time} ${words[1]}`
  return `${time} ${words[2]}`
}

function renderTimer() {
  const now = new Date();
  const nextYear = new Date(`${now.getFullYear()+1}-01-01`);
  const time = nextYear.getTime() - now.getTime();
  
  const months = Math.floor(time / (1000 * 60 * 60 * 24 * 30) % 12);
  const days = Math.floor(time / (1000 * 60 * 60 * 24) % 30);
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const seconds = Math.floor((time / 1000) % 60);

  monthsEl.textContent = timeToString(months, ['месяц', 'месяца', 'месяцев']);
  daysEl.textContent = timeToString(days, ['день', 'дня', 'дней']);
  hoursEl.textContent = timeToString(hours, ['час', 'часа', 'часов']);
  minutesEl.textContent = timeToString(minutes, ['минута', 'минуты', 'минут']);
  secondsEl.textContent = timeToString(seconds, ['секунда', 'секунды', 'секунд']);
}

renderTimer()
setInterval(()=> renderTimer(), 1000)
