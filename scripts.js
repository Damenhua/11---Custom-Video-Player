const player = document.querySelector(".player");

const viewer = player.querySelector(".viewer");
const toggle = player.querySelector(".toggle");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector("progress__filled");
const range = player.querySelectorAll(".player__slider");
const skipBtn = player.querySelectorAll(".player__button");



function togglePlay() {
    const method = video.paused ? "play" : "pause";
    video[method]();
}

function buttonUpdate() {
    const btn = video.paused ? '►' : '❚ ❚';
    toggle.textContent = btn;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);

}

function rangeHandler() {
    video[this.name] = this.value;
}

function progressHandler() {
    const percent = (video.currentTime/video.duration)*100;
    progressBar.style.flexBasis = `${percent}%`;
}

function clickBar(e) {
    const position = (e.offsetX/progress.offsetWidth)*video.duration;
    video.currentTime = position
}



video.addEventListener("click",togglePlay)
video.addEventListener("play",buttonUpdate)
video.addEventListener("pause",buttonUpdate)
video.addEventListener("timeupdate",progressHandler)

toggle.addEventListener("click",togglePlay)
skipBtn.forEach(b => b.addEventListener("click",skip))
range.forEach(r => r.addEventListener("change",rangeHandler))
range.forEach(r => r.addEventListener("mousemove",rangeHandler))


// progress.addEventListener("click",clickBar)
// progress.addEventListener("mousemove",mousedown && clickBar)

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);











