let football = document.getElementById("football");
let message = document.getElementById("message");
let playButton = document.getElementById("playButton");
let resetButton = document.getElementById("resetButton");

function startAnimation() {
    // Start or continue the animation
    football.style.animation = "moveFootball 5s linear infinite";
    playButton.disabled = true; // Disable play button once animation starts
    resetButton.disabled = false; // Enable reset button
}

function resetAnimation() {
    // Reset the football position
    football.style.animation = "none"; // Reset the animation
    setTimeout(() => {
        football.style.left = "0"; // Reset football to starting position
    }, 10); // Delay for resetting properly
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
