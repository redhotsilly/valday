let football = document.getElementById("football");
let message = document.getElementById("message");
let playButton = document.getElementById("playButton");
let resetButton = document.getElementById("resetButton");

let animationInterval;
let footballPosition = 0;

function startAnimation() {
    // Start or continue the animation
    football.style.animation = "moveFootball 5s linear infinite";
    playButton.disabled = true; // Disable play button once animation starts
    resetButton.disabled = false; // Enable reset button
}

function resetAnimation() {
    // Reset the football position
    clearInterval(animationInterval);
    football.style.animation = "none"; // Reset the animation
    footballPosition = 0;
    football.style.left = footballPosition + "px"; // Reset football to starting position
    playButton.disabled = false; // Enable play button
    resetButton.disabled = true; // Disable reset button
}

@keyframes moveFootball {
    0% {
        left: 0%;
    }
    50% {
        left: 90%;
    }
    100% {
        left: 0%;
    }
}

