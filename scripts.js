const player = document.querySelector(".player");

const viewer = player.querySelector(".viewer");
const toggle = player.querySelector(".toggle");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector("progress__filled");
const range = player.querySelectorAll(".player__slider");
const skipBtn = player.querySelectorAll(".player__button");



function toggle() {
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

















