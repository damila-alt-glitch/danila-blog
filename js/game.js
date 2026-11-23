const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const scoreText = document.getElementById("score");
const message = document.getElementById("message");
const startButton = document.getElementById("start");
const restartButton = document.getElementById("restart");
const jumpButton = document.getElementById("jump-button");

let playing = false;
let score = 0;
let passed = false;
let jumpTimer;

function startGame() {
  playing = false;
  clearTimeout(jumpTimer);
  dino.classList.remove("jump");
  cactus.classList.remove("moving");
  dino.style.top = "";
  cactus.style.left = "";
  score = 0;
  passed = false;
  scoreText.textContent = score;
  message.textContent = "Прыгай через кактус";
  void cactus.offsetWidth;
  cactus.classList.add("moving");
  playing = true;
  startButton.disabled = true;
  restartButton.disabled = false;
  jumpButton.disabled = false;
}
function jump() {
  if (!playing || dino.classList.contains("jump")) {
    return;
  }
  dino.classList.add("jump");
  jumpTimer = setTimeout(function () {
    dino.classList.remove("jump");
  }, 1200);
}

startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", startGame);
jumpButton.addEventListener("click", jump);

document.addEventListener("keydown", function (event) {
  if (playing && (event.code === "Space" || event.code === "ArrowUp")) {
    event.preventDefault();
    if (!event.repeat) {
      jump();
    }
  }
});
setInterval(function () {
  if (!playing) {
    return;
  }

  let dinoTop = parseFloat(window.getComputedStyle(dino).top);
  let cactusLeft = parseFloat(window.getComputedStyle(cactus).left);

  if (cactusLeft < 80 && cactusLeft + 40 > 30 && dinoTop + 50 > 160) {
    playing = false;
    clearTimeout(jumpTimer);
    cactus.classList.remove("moving");
    cactus.style.left = cactusLeft + "px";
    dino.classList.remove("jump");
    dino.style.top = dinoTop + "px";
    message.textContent = "GAME OVER!";
    jumpButton.disabled = true;
    return;
  }


  if (cactusLeft + 40 < 30 && !passed) {
    score++;
    scoreText.textContent = score;
    passed = true;
  }
  if (cactusLeft > 80) {
    passed = false;
  }
}, 10);
