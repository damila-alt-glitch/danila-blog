// Л15: «Динозаврик и кактус».
// Движение задаётся CSS-анимацией. JavaScript запускает прыжок,
// проверяет столкновение и показывает результат.
var dino = document.getElementById('dino');
var cactus = document.getElementById('cactus');
var scoreText = document.getElementById('game-score');
var statusText = document.getElementById('game-status');
var startButton = document.getElementById('game-start');
var gameRunning = false;
var gameTimer;
var jumpTimer;
var startTimer;
var score = 0;

function startGame() {
  // Л14–Л15: отмена старых таймеров нужна для корректного перезапуска.
  clearInterval(gameTimer);
  clearTimeout(jumpTimer);
  clearTimeout(startTimer);
  gameRunning = false;
  cactus.classList.remove('running');
  dino.classList.remove('jump');
  cactus.style.left = '100%';
  score = 0;
  scoreText.innerHTML = score;
  statusText.innerHTML = 'Перепрыгивай кактус. Удачной игры.';
  startButton.innerHTML = 'Начать заново ↗';

  startTimer = setTimeout(function () {
    cactus.classList.add('running');
    gameRunning = true;
    gameTimer = setInterval(checkGame, 20);
  }, 20);
}

function jump() {
  if (gameRunning && !dino.classList.contains('jump')) {
    dino.classList.add('jump');
    jumpTimer = setTimeout(function () {
      dino.classList.remove('jump');
    }, 900);
  }
}

// Л15: обработчик нажатия клавиши и вызов jump().
document.addEventListener('keydown', function () {
  jump();
});

function checkGame() {
  // Л15: координаты элементов через getComputedStyle и parseInt.
  var dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
  var cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

  // Динозаврик: left = 40, ширина = 40, высота = 40.
  // Кактус: ширина = 28, верхняя граница = 175.
  if (cactusLeft < 80 && cactusLeft + 28 > 40 && dinoTop + 40 > 175) {
    gameRunning = false;
    clearInterval(gameTimer);
    clearTimeout(jumpTimer);
    cactus.style.left = cactusLeft + 'px';
    cactus.classList.remove('running');
    dino.classList.remove('jump');
    statusText.innerHTML = 'Игра окончена. Твой счёт: ' + score + '. Попробуй ещё раз.';
    startButton.innerHTML = 'Сыграть ещё раз ↗';
  } else {
    score++;
    scoreText.innerHTML = score;
  }
}
