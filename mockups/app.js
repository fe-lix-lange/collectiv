const questions = [
  "What does a slow life feel like to you?",
  "When did you last feel truly heard?",
  "Which sunset still lives in your memory?"
];
const questionEl = document.getElementById('hard-question');
questionEl.textContent = questions[Math.floor(Math.random() * questions.length)];

const panels = document.querySelector('.panels');
const sections = document.querySelectorAll('.panel');
let current = 0;

function goTo(index) {
  current = Math.max(0, Math.min(index, sections.length - 1));
  panels.style.transform = `translateX(-${current * 100}vw)`;
}

document.getElementById('see-events').addEventListener('click', () => {
  goTo(1);
});

document.querySelectorAll('.nav-link').forEach(btn => {
  btn.addEventListener('click', () => {
    goTo(parseInt(btn.dataset.index, 10));
  });
});

let startX = 0;
panels.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

panels.addEventListener('touchend', (e) => {
  const diff = e.changedTouches[0].clientX - startX;
  if (Math.abs(diff) > 50) {
    if (diff < 0 && current < sections.length - 1) {
      goTo(current + 1);
    } else if (diff > 0 && current > 0) {
      goTo(current - 1);
    }
  }
});

document.querySelectorAll('.event-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});
