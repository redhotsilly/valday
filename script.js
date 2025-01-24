let scoreText = document.getElementById("scoreText");

function startGame() {
    scoreText.textContent = "Game Started...Will you be my Valentine, Babu?";
    document.getElementById("playButton").disabled = true;
    document.getElementById("resetButton").disabled = false;
}

function resetGame() {
    scoreText.textContent = "Will you be my Valentine, Babu?";
    document.getElementById("playButton").disabled = false;
    document.getElementById("resetButton").disabled = true;
}
