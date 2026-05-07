const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

// если в HTML есть скорость клика (extended задание)
const speed = document.getElementById('clicker__speed');

let clicks = 0;
let lastClickTime = null;

cookie.onclick = function () {
    const now = new Date();

    // увеличиваем счётчик кликов
    clicks++;
    counter.textContent = clicks;

    // анимация: увеличение/уменьшение печеньки
    if (cookie.width === 200) {
        cookie.width = 220;
    } else {
        cookie.width = 200;
    }

    // расчёт скорости клика (если элемент есть)
    if (lastClickTime !== null && speed) {
        const diff = (now - lastClickTime) / 1000; // секунды
        const cps = 1 / diff; // кликов в секунду
        speed.textContent = cps.toFixed(2);
    }

    lastClickTime = now;
};