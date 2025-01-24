const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
const jumbotron = document.querySelector('.jumbotron');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('moving-hearts');
  heart.innerHTML = '❤️';
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.animationDuration = `${3 + Math.random() * 2}s`; // Random speed
  heart.style.fontSize = `${15 + Math.random() * 30}px`; // Random size
  jumbotron.appendChild(heart);

  // Remove heart after animation ends
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

function startAnimation() {
  playButton.disabled = true;
  const heartInterval = setInterval(createHeart, 300);

  // Stop creating hearts after 10 seconds
  setTimeout(() => {
    clearInterval(heartInterval);
    playButton.disabled = false;
  }, 10000);
}

function resetAnimation() {
  jumbotron.querySelectorAll('.moving-hearts').forEach((heart) => heart.remove());
}

playButton.addEventListener('click', startAnimation);
resetButton.addEventListener('click', resetAnimation);
