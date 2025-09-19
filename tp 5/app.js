let totalSeconds = 0;
let timerInterval = null;
let initialSeconds = 0;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start")
const pauseBtn = document.getElementById("pause")
const resetBtn = document.getElementById("reset")
const setTimeBtn = document.getElementById("setTime")

function updateDisplay() {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    timerDisplay.textContent = `${String(minutes).padStart(
        2,
        "0"
    )}:${String(seconds).padStart(2, "0")} `;
}

setTimeBtn.addEventListener("click", () => {
    const mins = parseInt(document.getElementById("minutes").value) || 0;
    const secs = parseInt(document.getElementById("seconds").value) || 0;
    totalSeconds = mins * 60 + secs;
    initialSeconds = totalSeconds;
    updateDisplay();
});

startBtn.addEventListener("click", () => {
    if (timerInterval) return; // Evita Multiples Intervalos
    timerInterval = setInterval(() => {
        if (totalSeconds > 0) {
            totalSeconds--;
            updateDisplay();
        } else {
            clearInterval(timerInterval);
            timerInterval = null;
            alert("¡Tiempo Terminado!")
        }
    }, 1000);
});

pauseBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
});

resetBtn.addEventListener("click", () => {
    totalSeconds = initialSeconds;
    updateDisplay();
    clearInterval(timerInterval);
    timerInterval = null;
});

updateDisplay();
