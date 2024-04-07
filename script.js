const easterButton = document.getElementById('easterButton');

function createConfetti() {
  const colors = ['#ffcbdb', '#a7e8fc', '#ffc300', '#ff5733', '#c70039'];
  const confettiCount = 50;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = '0';
    confetti.style.animationDelay = Math.random() * 2 + 's';

    document.body.appendChild(confetti);

    confetti.addEventListener('animationend', function() {
      confetti.remove();
      easterButton.classList.remove('easterEgg');
      easterButton.querySelector('.label').textContent = 'Easter Egg';
    });
  }
}

easterButton.addEventListener('click', function() {
  easterButton.classList.toggle('easterEgg');

  const label = easterButton.querySelector('.label');
  if (easterButton.classList.contains('easterEgg')) {
    label.textContent = 'Happy Easter';
    createConfetti();
  } else {
    label.textContent = 'Easter Egg';
  }
});
