function handleResponse(isYes) {
    const celebration = document.getElementById('celebration');
    const leftBanner = document.querySelector('.banner.left');
    const rightBanner = document.querySelector('.banner.right');
    const leftEmojis = document.querySelector('.left-emojis');
    const rightEmojis = document.querySelector('.right-emojis');
    
    // Reset banners and emojis
    leftBanner.textContent = isYes ? 'YAY!' : 'BOOO!';
    rightBanner.textContent = isYes ? 'WE WON!' : 'NO WAY!';
    leftEmojis.innerHTML = '';
    rightEmojis.innerHTML = '';
    
    if (isYes) {
        celebration.innerHTML = "🏈 GAME-WINNING LOVE TOUCHDOWN! 🏆";
        celebration.style.display = 'block';
        playCheer();

        // Animate banners
        setTimeout(() => {
            leftBanner.style.opacity = '1';
        }, 1000);
        setTimeout(() => {
            rightBanner.style.opacity = '1';
        }, 1500);

        // Add football and heart emojis
        const footballEmojis = ['🏈', '❤️', '🏆', '💘'];
        footballEmojis.forEach((emoji, index) => {
            setTimeout(() => {
                const emojiLeft = document.createElement('div');
                const emojiRight = document.createElement('div');
                emojiLeft.textContent = emoji;
                emojiRight.textContent = emoji;
                emojiLeft.style.left = `${Math.random() * 50}%`;
                emojiRight.style.right = `${Math.random() * 50}%`;
                leftEmojis.appendChild(emojiLeft);
                rightEmojis.appendChild(emojiRight);
                
                setTimeout(() => {
                    leftEmojis.style.opacity = '1';
                    rightEmojis.style.opacity = '1';
                }, 100);
            }, index * 500);
        });
    } else {
        celebration.innerHTML = "Timeout of the Heart 💔";
        celebration.style.display = 'block';

        // Add boo and crying emojis
        const sadEmojis = ['😢', '😭', '🥺', '👎'];
        sadEmojis.forEach((emoji, index) => {
            setTimeout(() => {
                const emojiLeft = document.createElement('div');
                const emojiRight = document.createElement('div');
                emojiLeft.textContent = emoji;
                emojiRight.textContent = emoji;
                emojiLeft.style.left = `${Math.random() * 50}%`;
                emojiRight.style.right = `${Math.random() * 50}%`;
                leftEmojis.appendChild(emojiLeft);
                rightEmojis.appendChild(emojiRight);
                
                setTimeout(() => {
                    leftEmojis.style.opacity = '1';
                    rightEmojis.style.opacity = '1';
                }, 100);
            }, index * 500);
        });
    }
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
