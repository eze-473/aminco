const images = [
    '../img/PANTALLA MEMORIA AMINCO/IMAGENES PARA EL JUEGO/CAMIONETA AMINCO.jpg', '../img/PANTALLA MEMORIA AMINCO/IMAGENES PARA EL JUEGO/GENTE.jpg', '../img/PANTALLA MEMORIA AMINCO/IMAGENES PARA EL JUEGO/LOGO 1.png', 
    '../img/PANTALLA MEMORIA AMINCO/IMAGENES PARA EL JUEGO/CAMIONETA AMINCO.jpg', '../img/PANTALLA MEMORIA AMINCO/IMAGENES PARA EL JUEGO/GENTE.jpg', '../img/PANTALLA MEMORIA AMINCO/IMAGENES PARA EL JUEGO/LOGO 1.png', 
    '../img/PANTALLA MEMORIA AMINCO/IMAGENES PARA EL JUEGO/CAMIONETA.jpg', '../img/PANTALLA MEMORIA AMINCO/IMAGENES PARA EL JUEGO/LOGO.jpg', '../img/PANTALLA MEMORIA AMINCO/IMAGENES PARA EL JUEGO/LOGO 2.png', 
    '../img/PANTALLA MEMORIA AMINCO/IMAGENES PARA EL JUEGO/CAMIONETA.jpg', '../img/PANTALLA MEMORIA AMINCO/IMAGENES PARA EL JUEGO/LOGO.jpg', '../img/PANTALLA MEMORIA AMINCO/IMAGENES PARA EL JUEGO/LOGO 2.png',
    '../img/PANTALLA MEMORIA AMINCO/IMAGENES PARA EL JUEGO/LOGO 4.png','../img/PANTALLA MEMORIA AMINCO/IMAGENES PARA EL JUEGO/LOGO 3.png', '../img/PANTALLA MEMORIA AMINCO/IMAGENES PARA EL JUEGO/LOGO 3.png','../img/PANTALLA MEMORIA AMINCO/IMAGENES PARA EL JUEGO/LOGO 4.png'
];

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let errorCount = 0;
const maxErrors = 3;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createBoard() {
    const grid = document.getElementById('grid');
    shuffle(images);
    images.forEach(image => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front"></div>
                <div class="card-back">
                    <img src="${image}" alt="${image}">
                </div>
            </div>
        `;
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    });
    showAllCards();
}

function showAllCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.add('flipped'));
    setTimeout(() => {
        cards.forEach(card => card.classList.remove('flipped'));
    }, 8000);
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flipped');

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    const isMatch = firstCard.innerHTML === secondCard.innerHTML;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
    checkWin();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetBoard();
        errorCount++;
        if (errorCount >= maxErrors) {
            showAlertWithImage('¡Perdiste!', "../img/PANTALLA PERDISTE.jpg");
            setTimeout(() => {
                window.location.href = '../index.html'; // Redirect to another page
            }, 3000); // Wait for 3 seconds before redirecting
        }
    }, 1500);
}

function showAlertWithImage(message, imageUrl) {
    const alertDiv = document.createElement('div');
    alertDiv.classList.add('custom-alert');
    alertDiv.innerHTML = `
        <div class="alert-content">
            <img src="${imageUrl}" alt="Game Over">
            <p>${message}</p>
        </div>
    `;
    document.body.appendChild(alertDiv);
    setTimeout(() => {
        alertDiv.remove();
    }, 3000); // Remove the alert after 3 seconds
}
function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

function checkWin() {
    const allCards = document.querySelectorAll('.card');
    const flippedCards = document.querySelectorAll('.card.flipped');
    if (allCards.length === flippedCards.length) {
        setTimeout(() => {
            showWinAlert('¡Ganaste!', "../img/PANTALLA GANASTE.jpg" );
        }, 500);
    }
}

function showWinAlert(message, imageUrl) {
    const alertDiv = document.createElement('div');
    alertDiv.classList.add('custom-alert');
    alertDiv.innerHTML = `
        <div class="alert-content">
            <img src="${imageUrl}" alt="You Win">
            <p>${message}</p>
        </div>
    `;
    document.body.appendChild(alertDiv);
    setTimeout(() => {
        alertDiv.remove();
        window.location.href = '../index.html'; // Redirigir a otra página
    }, 3000); // Esperar 3 segundos antes de redirigir
}

function resetGame() {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    errorCount = 0;
    createBoard();
}

createBoard();