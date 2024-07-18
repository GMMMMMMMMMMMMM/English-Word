const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');
let currentProgress = 0;
let timer;
let seconds = 0;

function updateProgress() {
    currentProgress += 1;
    const progressPercent = (currentProgress / 100) * 100;
    progress.style.width = `${progressPercent}%`;
    if (currentProgress === 100) {
        clearInterval(timer);
        showReviewSection();
    }
}

function updateTimer() {
    seconds++;
    const minutes = Math.floor(seconds / 60);
    const displaySeconds = seconds % 60;
    document.getElementById('timer-display').textContent = `${minutes.toString().padStart(2, '0')}:${displaySeconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    timer = setInterval(updateTimer, 1000);
}

function showReviewSection() {
    document.querySelector('.review-section').style.display = 'block';
}

document.addEventListener('click', event => {
    if (event.target.matches('.options li')) {
        setTimeout(updateProgress, 500);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    startTimer();
});
