let totalSeconds = 0;
let timerInterval = null;
let initialSeconds = 0;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start")
const pauseBtn = document.getElementById("pause")
const resetBtn = document.getElementById("reset")
const setTimeBtn = document.getElementById("setTime")

// 🎵 referencia al audio de la alarma
const alarmSound = document.getElementById("alarm-sound");

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
    if (timerInterval) return; // Evita múltiples intervalos
    timerInterval = setInterval(() => {
        if (totalSeconds > 0) {
            totalSeconds--;
            updateDisplay();
        } else {
            clearInterval(timerInterval);
            timerInterval = null;
            // 🔔 Reproducir sonido cuando termine
            alarmSound.currentTime = 0; 
            alarmSound.play();
            alert("⏰ ¡Tiempo Terminado!");
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
    // 🔇 detener sonido si estaba sonando
    alarmSound.pause();
    alarmSound.currentTime = 0;
});

updateDisplay();
