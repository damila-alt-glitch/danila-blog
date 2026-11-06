'use strict';
(() => {
  const board = document.querySelector('#game-board');
  if (!board) return;
  const startButton = document.querySelector('#game-start');
  const status = document.querySelector('#game-status');
  const pairs = ['CPU', 'GPU', 'RAM', 'SSD', 'USB', 'PC'];
  let deck = [], openCards = [], found = 0, moves = 0, busy = false;
  let startedAt = 0, timer = null, pending = null;
  const pad = value => String(value).padStart(2, '0');
  function updateTime() {
    const seconds = Math.floor((Date.now() - startedAt) / 1000);
    document.querySelector('#game-time').textContent = `${pad(Math.floor(seconds / 60))}:${pad(seconds % 60)}`;
  }
  function render(started) {
    board.replaceChildren();
    for (let i = 0; i < 12; i++) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'memory-card';
      button.textContent = '✳';
      button.setAttribute('aria-label', `Закрытая карточка ${i + 1}`);
      button.disabled = !started;
      button.addEventListener('click', () => flip(button, i));
      board.appendChild(button);
    }
  }
  function flip(button, index) {
    if (busy || button.disabled || openCards.some(card => card.index === index)) return;
    button.textContent = deck[index];
    button.classList.add('flipped');
    button.setAttribute('aria-label', `Карточка ${index + 1}: ${deck[index]}`);
    button.disabled = true;
    openCards.push({ button, index });
    if (openCards.length !== 2) return;
    moves++;
    document.querySelector('#game-moves').textContent = moves;
    const [first, second] = openCards;
    if (deck[first.index] === deck[second.index]) {
      found++;
      [first, second].forEach(card => { card.button.classList.add('matched'); card.button.setAttribute('aria-label', `Найдена пара: ${deck[card.index]}`); });
      openCards = [];
      document.querySelector('#game-pairs').textContent = `${found} / 6`;
      if (found === 6) {
        clearInterval(timer);
        updateTime();
        status.textContent = `Все шесть пар найдены. Ходов: ${moves}. Время: ${document.querySelector('#game-time').textContent}. Можно сыграть ещё раз.`;
        startButton.textContent = 'Сыграть ещё раз ↗';
        board.classList.add('won');
      } else status.textContent = `Пара ${deck[index]} найдена. Осталось пар: ${6 - found}.`;
    } else {
      busy = true;
      status.textContent = 'Не совпали. Запомни карточки и попробуй другую пару.';
      pending = setTimeout(() => {
        [first, second].forEach(card => {
          card.button.classList.remove('flipped');
          card.button.textContent = '✳';
          card.button.disabled = false;
          card.button.setAttribute('aria-label', `Закрытая карточка ${card.index + 1}`);
        });
        openCards = []; busy = false; pending = null;
      }, 1000);
    }
  }
  startButton.addEventListener('click', () => {
    clearInterval(timer); clearTimeout(pending);
    deck = [...pairs, ...pairs];
    for (let i = deck.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [deck[i], deck[j]] = [deck[j], deck[i]]; }
    openCards = []; found = 0; moves = 0; busy = false; pending = null;
    document.querySelector('#game-moves').textContent = '0';
    document.querySelector('#game-pairs').textContent = '0 / 6';
    document.querySelector('#game-time').textContent = '00:00';
    board.classList.remove('won');
    startedAt = Date.now(); timer = setInterval(updateTime, 1000);
    status.textContent = 'Игра началась. Открой любые две карточки.';
    startButton.textContent = 'Начать заново ↗';
    render(true);
  });
  render(false);
})();
