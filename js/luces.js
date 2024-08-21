const images = document.querySelectorAll('.image-container img');
let pattern = [];
let userPattern = [];
let level = 0;
let errors = 0;

function highlightImage(img) {
    img.classList.add('highlight');
    setTimeout(() => {
        img.classList.remove('highlight');
    }, 500);
}

function generatePattern() {
    const randomIndex = Math.floor(Math.random() * images.length);
    pattern.push(images[randomIndex]);
}

function playPattern() {
    let i = 0;
    document.querySelector('.image-container').classList.add('disabled');
    const interval = setInterval(() => {
        highlightImage(pattern[i]);
        i++;
        if (i >= pattern.length) {
            clearInterval(interval);
            document.querySelector('.image-container').classList.remove('disabled');
        }
    }, 1000);
}

function checkPattern() {
    if (userPattern.length === pattern.length) {
        if (userPattern.every((img, index) => img === pattern[index])) {
            level++;
            errors = 0; // Reset errors on correct pattern
            if (level === 8) {
                alert('¡Ganaste!');
                level = 0;
                pattern = [];
            }
            userPattern = [];
            generatePattern();
            setTimeout(playPattern, 1000);
        } else {
            errors++;
            if (errors === 1) {
                alert('Perdiste. Inténtalo de nuevo.');
                window.location.href = '../index.html'; // Redirigir a otra página
                errors = 0;
            }
            userPattern = [];
            level = 0;
            pattern = [];
            generatePattern();
            setTimeout(playPattern, 1000);
        }
    }
}

images.forEach(img => {
    img.addEventListener('click', () => {
        highlightImage(img);
        userPattern.push(img);
        checkPattern();
    });
});

generatePattern();
setTimeout(playPattern, 1000);