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

function showCustomAlert(message, imagePath) {
    const alertBox = document.createElement('div');
    alertBox.classList.add('custom-alert');
    alertBox.innerHTML = `
        <div class="alert-content">
            <img src="${imagePath}" alt="${message}">
            <p>${message}</p>
            <button onclick="closeCustomAlert()">OK</button>
        </div>
    `;
    document.body.appendChild(alertBox);
}

function closeCustomAlert() {
    const alertBox = document.querySelector('.custom-alert');
    if (alertBox) {
        alertBox.remove();
    }
    window.location.href = '../index.html'; // Redirigir a otra página
}

function checkPattern() {
    for (let i = 0; i < userPattern.length; i++) {
        if (userPattern[i] !== pattern[i]) {
            showCustomAlert('¡Fallaste!', "../img/PANTALLA PERDISTE.jpg");
            errors = 0;
            userPattern = [];
            level = 0;
            pattern = [];
            generatePattern();
            setTimeout(playPattern, 1000);
            return;
        }
    }

    if (userPattern.length === pattern.length) {
        level++;
        errors = 0; // Reset errors on correct pattern
        if (level === 8) {
            showCustomAlert('¡Ganaste!', "../img/PANTALLA GANASTE.jpg");
            level = 0;
            pattern = [];
        } else {
            userPattern = [];
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