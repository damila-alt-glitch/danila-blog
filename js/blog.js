'use strict';

// Edit titles and article text here. Content is deliberately limited to the
// interests and biographical facts supplied by the blog owner.
const posts = {
  hello: { category: 'Личное / знакомство', title: 'Давай знакомиться. Я Данила', html: '<p>Привет! Меня зовут Данила, мне 24 года. Я люблю скалодром, игры на ПК, пайку и компьютеры. Решил собрать эти увлечения в одном месте — в своём личном блоге.</p><h3>Четыре темы, один блог</h3><p>На первый взгляд скалодром и пайка совсем не похожи. Но здесь найдётся место и движению, и компьютерам, и занятиям, в которых нужно что-то делать своими руками.</p><ul><li>Скалодром — моя активная сторона.</li><li>Игры на ПК — ещё одно любимое занятие.</li><li>Пайка — увлечение мелкими деталями и электроникой.</li><li>Компьютеры — техника, с которой мне интересно заниматься.</li></ul><h3>И немного фиолетового</h3><p>Мой любимый цвет — фиолетовый. Поэтому блог получился именно таким. Здесь всё про меня и мои хобби. Добро пожаловать!</p>' },
  climbing: { category: 'Увлечения / скалодром', title: 'Задача, которую решаешь всем телом', html: '<p>Одно из моих увлечений — занятия на скалодроме. Этой стороне моей жизни тоже есть место в блоге, хотя она проходит далеко от клавиатуры.</p><h3>Маршрут как задача</h3><p>На скалодроме мало просто видеть следующую зацепку. Нужно понять, как до неё добраться: куда поставить ногу, как перенести вес и какое движение выбрать. Один и тот же участок можно попробовать пройти разными способами.</p><h3>Не только экран</h3><p>Компьютеры и игры — часть моих интересов. Скалодром добавляет к ним движение и совсем другой вид задач. Здесь вместо мышки — зацепки, а вместо персонажа двигаешься ты сам.</p><p>Это короткое знакомство с одним из моих хобби. Остальные увлечения — в соседних записях.</p>' },
  gaming: { category: 'Увлечения / игры на ПК', title: 'Другой способ переключиться', html: '<p>Я люблю играть на ПК. Поэтому игры — одна из четырёх тем, которым посвящён этот блог.</p><h3>Пространство для разных впечатлений</h3><p>В играх можно исследовать мир, решать задачи, разбираться с механиками или просто пробовать что-то новое. У каждой игры свой ритм и свой способ вовлечь в происходящее.</p><h3>Игры и сам компьютер</h3><p>Мне интересны не только игры, но и компьютеры. В этом блоге обе темы соседствуют: одна про происходящее на экране, другая — про технику, благодаря которой всё работает.</p><p>Пока это знакомство с моим увлечением, без рейтингов и списков любимых игр. Конкретные истории заслуживают отдельных записей.</p>' },
  workshop: { category: 'Увлечения / мастерская', title: 'Интересно, что внутри', html: '<p>Я люблю паять и заниматься компьютерами. Это ещё две стороны моих увлечений — про технику, детали и работу руками.</p><h3>Пайка</h3><p>В электронике даже маленькое соединение — часть большой схемы. Пайка помогает увидеть технику с другой стороны: за привычным устройством оказываются плата, компоненты и соединения между ними.</p><h3>Компьютеры</h3><p>Компьютер — не только экран с игрой. Внутри целая система, где разные компоненты работают вместе. Мне интересно заниматься этой техникой, поэтому для неё здесь есть отдельная тема.</p><h3>Моя мастерская в блоге</h3><p>Этот раздел объединяет пайку и компьютеры. Здесь знакомство с моими техническими увлечениями, а дальше можно будет собирать отдельные заметки о конкретных занятиях.</p>' }
};
const legal = {
  privacy: { category: 'О сайте', title: 'Конфиденциальность', html: '<p>Это личный статический блог Данилы. На сайте нет регистрации, форм отправки данных, комментариев и рекламных счётчиков. Код блога не устанавливает cookies и не сохраняет сведения о посетителях в браузере.</p><p>Сайт размещён на GitHub Pages. Хостинг может обрабатывать технические сведения о запросах по своим правилам. Шрифт Manrope загружается через Google Fonts: при загрузке шрифта браузер обращается к серверам Google.</p><p>Ссылки на GitHub ведут на внешний сайт, у которого собственные правила конфиденциальности.</p>' },
  terms: { category: 'О сайте', title: 'О материалах блога', html: '<p>Это личный блог о хобби и интересах Данилы. Материалы отражают личные увлечения автора и носят ознакомительный характер.</p><p>Тексты о компьютерах и пайке не являются инструкциями по ремонту или работе с электричеством. Внешние ссылки открываются на сторонних сайтах.</p><p>© 2026 Данила. Если хотите использовать материалы блога, укажите автора и ссылку на источник.</p>' }
};

const dialog = document.querySelector('#reader');
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');
let returnFocus = null;
let activePost = null;

function closeMenu() {
  mobileMenu.hidden = true;
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Открыть меню');
  document.body.classList.remove('locked');
}
menuToggle.addEventListener('click', () => {
  const opening = mobileMenu.hidden;
  mobileMenu.hidden = !opening;
  menuToggle.setAttribute('aria-expanded', String(opening));
  menuToggle.setAttribute('aria-label', opening ? 'Закрыть меню' : 'Открыть меню');
  document.body.classList.toggle('locked', opening);
});
mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !mobileMenu.hidden) { closeMenu(); menuToggle.focus(); } });
window.matchMedia('(min-width: 1051px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

const filters = document.querySelectorAll('[data-filter]');
filters.forEach(button => button.addEventListener('click', () => {
  const topic = button.dataset.filter;
  filters.forEach(filter => {
    const selected = filter === button;
    filter.classList.toggle('active', selected);
    filter.setAttribute('aria-pressed', String(selected));
  });
  let count = 0;
  document.querySelectorAll('.post-card').forEach(card => {
    card.hidden = topic !== 'all' && card.dataset.topic !== topic;
    if (!card.hidden) count++;
  });
  document.querySelector('#filter-status').textContent = `Показано записей: ${count}. Тема: ${button.textContent.trim()}`;
}));

function openReader(record, id) {
  if (!record) return;
  if (!dialog.open) returnFocus = document.activeElement;
  activePost = id || null;
  document.querySelector('#reader-title').textContent = record.title;
  document.querySelector('#reader-category').textContent = record.category;
  document.querySelector('#reader-meta').textContent = id ? 'Данила · 6 ноября 2026 · 1 мин чтения' : 'Данила / личный блог';
  // Only trusted, local article markup from the objects above is inserted.
  document.querySelector('#reader-content').innerHTML = record.html;
  document.title = `${record.title} — блог Данилы`;
  closeMenu();
  document.body.classList.add('locked');
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
}
document.querySelectorAll('[data-post]').forEach(link => link.addEventListener('click', event => {
  event.preventDefault();
  const id = link.dataset.post;
  if (window.location.hash === `#post-${id}`) openReader(posts[id], id);
  else { window.location.hash = `post-${id}`; }
}));
document.querySelectorAll('[data-legal]').forEach(button => button.addEventListener('click', () => openReader(legal[button.dataset.legal])));
function closeReader() {
  if (dialog.open) dialog.close();
}
document.querySelectorAll('.close-reader').forEach(button => button.addEventListener('click', closeReader));
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeReader();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('locked');
  document.title = 'Данила — личный блог об увлечениях';
  if (activePost && window.location.hash.startsWith('#post-')) history.replaceState(null, '', `${location.pathname}${location.search}#journal`);
  activePost = null;
  if (returnFocus instanceof HTMLElement) returnFocus.focus({ preventScroll: true });
});
function readHash() {
  const id = window.location.hash.replace(/^#post-/, '');
  if (posts[id] && window.location.hash.startsWith('#post-')) openReader(posts[id], id);
  else if (dialog.open && activePost) closeReader();
}
window.addEventListener('hashchange', readHash);
readHash();

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.section-heading, .post-card, .about-copy, .interest-list, .closing').forEach(section => { section.classList.add('reveal'); revealObserver.observe(section); });
  const tagline = document.querySelector('.tagline');
  if (tagline) {
  const lines = tagline.innerHTML.split(/<br\s*\/?\s*>/i);
  tagline.innerHTML = lines.map(line => line.trim().split(/\s+/).map(word => `<span class="word">${word}</span>`).join(' ')).join('<br>');
  const words = [...tagline.querySelectorAll('.word')];
  const wordObserver = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) updateWords();
  }, { rootMargin: '0px 0px -10% 0px' });
  let scheduled = false;
  function updateWords() {
    const rect = tagline.getBoundingClientRect();
    const progress = Math.min(1, Math.max(0, (innerHeight * .9 - rect.top) / (innerHeight * .45)));
    words.forEach((word, index) => word.classList.toggle('shown', progress > index / words.length));
  }
  wordObserver.observe(tagline);
  window.addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(() => { updateWords(); scheduled = false; }); }
  }, { passive: true });
  window.addEventListener('resize', updateWords);
  updateWords();
  }
}
