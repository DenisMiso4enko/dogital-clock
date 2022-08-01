// Найти нужные элементы на странице

const hourlEl = document.getElementById('hour')
const minuteEl = document.getElementById('minets')
const secondEl = document.getElementById('seconds')
// const amPmEl = document.getElementById('amPm')

// Функция
function updateClock() {
    // Задать часы, минуты, секунды
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    // let ampm = "AM"
    
    // Проверка, если 
    if (h > 12) {
        h = h - 12
        // ampm = "PM"
    }
    // Проверка, если на часах меньше 10, то будет отобразаться 0 
    h = h < 10 ? '0' + h : h
    m = m < 10 ? '0' + m : m
    s = s < 10 ? '0' + s : s

    // Добовляем функции времени в разметку
    hourlEl.innerText = h
    minuteEl.innerText = m
    secondEl.innerText = s
    // amPmEl.innerText = ampm
    
    // Функция обновления каждую секунду
    setTimeout(() => {
        updateClock()
    }, 1000)
}

// Вызов функции
updateClock()


