const questions = [
  "What does a slow life feel like to you?",
  "When did you last feel truly heard?",
  "Which sunset still lives in your memory?"
];
const questionEl = document.getElementById('hard-question');
questionEl.textContent = questions[Math.floor(Math.random() * questions.length)];

document.getElementById('see-events').addEventListener('click', () => {
  document.getElementById('events').scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
  });
});

document.querySelectorAll('.event-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});
