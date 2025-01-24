function handleResponse(isYes) {
    const celebration = document.getElementById('celebration');
    const container = document.querySelector('.container');
    
    if (isYes) {
        celebration.innerHTML = "🏈 GAME-WINNING LOVE TOUCHDOWN! 🏆";
        celebration.style.display = 'block';
        playCheer();

        // Add football and heart emojis
        const footballEmojis = ['🏈', '❤️', '🏆', '💘'];
        footballEmojis.forEach((emoji) => {
            createFloatingEmoji(emoji, container);
        });
    } else {
        celebration.innerHTML = "Timeout of the Heart 💔";
        celebration.style.display = 'block';

        // Add sad emojis
        const sadEmojis = ['😢', '😭', '🥺', '👎'];
        sadEmojis.forEach((emoji) => {
            createFloatingEmoji(emoji, container);
        });
    }
}

function createFloatingEmoji(emoji, container) {
    const emojiElement = document.createElement('div');
    emojiElement.textContent = emoji;
    emojiElement.classList.add('floating-emoji');
    
    // Random positioning across the entire container
    emojiElement.style.left = `${Math.random() * 100}%`;
    emojiElement.style.top = `${Math.random() * 100}%`;
    
    // Add slight random rotation and delay
    emojiElement.style.animationDelay = `-${Math.random() * 3}s`;
    emojiElement.style.transform = `rotate(${Math.random() * 360}deg)`;
    
    container.appendChild(emojiElement);

    // Remove emoji after animation
    setTimeout(() => {
        container.removeChild(emojiElement);
    }, 6000);
}

function playCheer() {
    const audioContexts = [
        new Audio('data:audio/wav;base64,UklGRtQDAABXQVZFZm14IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhsAMAAP/+/wAA//8AAP7+/QAK'),
        new Audio('data:audio/wav;base64,UklGRtQDAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhsAMAAP/+/wAA//8AAP7+/QAK')
    ];
    
    audioContexts.forEach(audio => {
        audio.play().catch(error => console.log('Audio play failed:', error));
    });
}
