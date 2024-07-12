const player = document.querySelector(".player");

const viewer = player.querySelector(".viewer");
const toggle = player.querySelector(".toggle");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const range = player.querySelectorAll(".player__slider");
const skipBtn = player.querySelectorAll(".player__button");



function togglePlay() {
    const method = viewer.paused ? "play" : "pause";
    viewer[method]();
}

function buttonUpdate() {
    const btn = viewer.paused ? '►' : '❚ ❚';
    toggle.textContent = btn;
}

function skip() {
    viewer.currentTime += parseFloat(this.dataset.skip);

}

function rangeHandler() {
    viewer[this.name] = this.value;
}

function progressHandler() {
    const percent = (viewer.currentTime/viewer.duration)*100;
    progressBar.style.flexBasis = `${percent}%`;
}

function clickBar(e) {
    const position = (e.offsetX/progress.offsetWidth)*viewer.duration;
    viewer.currentTime = position
}



viewer.addEventListener("click",togglePlay)
viewer.addEventListener("play",buttonUpdate)
viewer.addEventListener("pause",buttonUpdate)
viewer.addEventListener("timeupdate",progressHandler)

toggle.addEventListener("click",togglePlay)
skipBtn.forEach(b => b.addEventListener("click",skip))
range.forEach(r => r.addEventListener("change",rangeHandler))
range.forEach(r => r.addEventListener("mousemove",rangeHandler))





let mousedown = false;
progress.addEventListener('click', clickBar);
progress.addEventListener('mousemove', (e) => mousedown && clickBar(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);











