// Л14: простое меню, которое открывается добавлением класса.
function openMenu() {
  var menu = document.getElementById('main-menu');
  var button = document.getElementById('menu-button');

  menu.classList.toggle('open');
  if (menu.classList.contains('open')) {
    button.innerHTML = 'Закрыть';
  } else {
    button.innerHTML = 'Меню';
  }
}

function closeMenu() {
  document.getElementById('main-menu').classList.remove('open');
  document.getElementById('menu-button').innerHTML = 'Меню';
}

// Л13: параметры функции, условие и цикл for.
// Л14: querySelectorAll, classList и изменение style.display.
function filterPosts(topic, buttonNumber) {
  var cards = document.querySelectorAll('.post-card');
  var buttons = document.querySelectorAll('.filter');
  var count = 0;

  for (var i = 0; i < cards.length; i++) {
    if (topic == 'all' || cards[i].classList.contains(topic)) {
      cards[i].style.display = 'block';
      count++;
    } else {
      cards[i].style.display = 'none';
    }
  }

  for (var j = 0; j < buttons.length; j++) {
    buttons[j].classList.remove('active');
  }
  buttons[buttonNumber].classList.add('active');
  document.getElementById('filter-status').innerHTML = 'Показано записей: ' + count;
}
