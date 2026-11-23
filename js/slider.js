const gamePictures = ["img/game-2784470.jpg", "img/game-1799840.jpg", "img/game-201270.jpg", "img/game-1669000.jpg", "img/game-3253530.jpg", "img/game-1142710.jpg", "img/game-2807960.jpg", "img/game-1284210.jpg", "img/game-2280060.jpg", "img/game-1144200.jpg", "img/game-1368140.jpg", "img/game-326360.jpg", "img/game-2432860.jpg", "img/game-2186680.jpg", "img/game-3783770.jpg", "img/game-2464530.jpg", "img/game-553540.jpg", "img/game-916440.jpg", "img/game-243970.jpg", "img/game-63910.jpg", "img/game-3170.jpg", "img/game-3902430.jpg", "img/game-673880.jpg", "img/game-489630.jpg", "img/game-1461910.jpg", "img/game-4570.jpg", "img/game-2694490.jpg", "img/game-2842040.jpg", "img/game-440900.jpg", "img/game-306130.jpg", "img/game-640820.jpg", "img/game-588650.jpg", "img/game-55150.jpg", "img/game-2444750.jpg", "img/game-20900.jpg", "img/game-719040.jpg", "img/game-1934680.jpg", "img/game-2607060.jpg", "img/game-1363080.jpg", "img/game-1361210.jpg", "img/game-1222690.jpg", "img/game-921800.jpg"];
const gameCaptions = ["9 Kings", "Queen’s Domain", "Total War: SHOGUN 2", "Age of Wonders 4", "Pit of Goblin", "Total War: WARHAMMER III", "Battlefield 6", "Guild Wars 2", "Tenebris: Terra Incognita", "Ready or Not", "Corsair Cove", "Warspear Online", "MENACE", "Warhammer 40,000: Rogue Trader", "Shadow of the Road Demo", "VOIN", "Phantom Brigade", "Anno 1800", "Invisible, Inc", "King’s Bounty: Перекрёстки миров", "King’s Bounty: Принцесса в доспехах", "War of Dots", "Warhammer 40,000: Mechanicus", "Warhammer 40,000: Gladius", "Rogue Command", "Warhammer 40,000: Dawn of War", "Path of Exile 2", "Star Wars Outlaws", "Conan Exiles Enhanced", "The Elder Scrolls Online", "Pathfinder: Kingmaker", "Dead Cells", "Warhammer 40,000: Space Marine", "Shape of Dreams", "The Witcher: Enhanced Edition", "Wasteland 3", "Age of Mythology: Retold", "From Glory To Goo", "Manor Lords", "Warhammer 40,000: Darktide", "Dragon Age: Инквизиция", "Encased"];
const bookPictures = ["img/book-blackcompany.jpg", "img/book-metro.jpg", "img/book-muos.jpg", "img/book-selfishgene.jpg", "img/book-amber.webp", "img/book-lordlight.jpg", "img/book-oldmanswar.webp", "img/book-hyperion.jpg", "img/book-polari.webp", "img/book-godlike.jpg", "img/book-poselok.jpg", "img/book-expanse.webp"];
const bookCaptions = ["Цикл «Чёрный отряд» — Глен Кук", "Цикл «Метро» — Дмитрий Глуховский", "Цикл «МУОС» — Захар Петров", "Эгоистичный ген — Ричард Докинз", "Цикл «Хроники Амбера» — Роджер Желязны", "Князь Света — Роджер Желязны", "Цикл «Война старика» — Джон Скальци", "Цикл «Песни Гипериона» — Дэн Симмонс", "Цикл «Полари» — Роман Суржиков", "Цикл «Люди как боги» — Сергей Снегов", "Посёлок — роман из цикла «Доктор Павлыш» — Кир Булычёв", "Цикл «Пространство» — Джеймс Кори"];
let gameNumber = 0;
let bookNumber = 0;

function showGame() {
  if (gameNumber >= gamePictures.length) {
    gameNumber = 0;
  }
  if (gameNumber < 0) {
    gameNumber = gamePictures.length - 1;
  }
  document.getElementById("game-slide").src = gamePictures[gameNumber];
  document.getElementById("game-slide").alt = gameCaptions[gameNumber];
  document.getElementById("game-caption").textContent = gameCaptions[gameNumber];
  document.getElementById("game-counter").textContent = (gameNumber + 1) + " / " + gamePictures.length;
}

document.getElementById("game-next").addEventListener("click", function () {
  gameNumber++;
  showGame();
});

document.getElementById("game-prev").addEventListener("click", function () {
  gameNumber--;
  showGame();
});

function showBook() {
  if (bookNumber >= bookPictures.length) {
    bookNumber = 0;
  }
  if (bookNumber < 0) {
    bookNumber = bookPictures.length - 1;
  }
  document.getElementById("book-slide").src = bookPictures[bookNumber];
  document.getElementById("book-slide").alt = bookCaptions[bookNumber];
  document.getElementById("book-caption").textContent = bookCaptions[bookNumber];
  document.getElementById("book-counter").textContent = (bookNumber + 1) + " / " + bookPictures.length;
}

document.getElementById("book-next").addEventListener("click", function () {
  bookNumber++;
  showBook();
});

document.getElementById("book-prev").addEventListener("click", function () {
  bookNumber--;
  showBook();
});
