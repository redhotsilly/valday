document.addEventListener("DOMContentLoaded", () => {
    const message = document.getElementById("message");
    const playButton = document.getElementById("playButton");
    const resetButton = document.getElementById("resetButton");

    let animationInterval;

    const startAnimation = () => {
        let position = 0;
        const speed = 5;
        const direction = 1;

        animationInterval = setInterval(() => {
            position += speed * direction;
            message.style.transform = `translateX(${position}px)`;

            if (position > 200 || position < -200) {
                position = -position;
            }
        }, 50);
    };

    const stopAnimation = () => {
        clearInterval(animationInterval);
        message.style.transform = "translateX(0)";
    };

    playButton.addEventListener("click", startAnimation);
    resetButton.addEventListener("click", stopAnimation);
});
