function showMessageAndConfetti() {
    const message = document.getElementById('birthdayMessage');
    const img = document.querySelector('img');

    message.classList.add('visible');
    img.classList.add('fly');

    confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 }
    });

    setTimeout(function() {
        confetti.reset();
    }, 5000);
}




// Add event listener to the button
document.querySelector('button').addEventListener('click', showMessageAndConfetti);

