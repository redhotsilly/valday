function handleResponse(isYes) {
    
    // Clear previous emojis
    emojiOverlay.innerHTML = '';
    
    if (isYes) {
        celebration.innerHTML = "🏈 GAME-WINNING LOVE TOUCHDOWN! 🏆";
        
        // Add football and heart emojis
        const footballEmojis = ['🏈', '❤️', '🏆', '💘'];
        createFloatingEmojis(footballEmojis);
    } else {
        celebration.innerHTML = "Timeout of the Heart 💔";
        
        // Add sad emojis
        const sadEmojis = ['😢', '😭', '🥺', '👎'];
        createFloatingEmojis(sadEmojis);
    }
    
    playCheer();
}

function createFloatingEmojis(emojis) {
    const emojiOverlay = document.querySelector('.emoji-overlay');
    
    emojis.forEach(() => {
        const emoji = document.createElement('div');
        emoji.classList.add('floating-emoji');
        
        // Randomize position and emoji
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = `${Math.random() * 100}%`;
        emoji.style.top = `${Math.random() * 100}%`;
        
        emojiOverlay.appendChild(emoji);
    });
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
