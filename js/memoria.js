const images = [
    '../img/57.jpg', '../img/2.jpeg', '../img/57.jpg', 
    '../img/57.jpg', '../img/57.jpg', '../img/57.jpg', 
    '../img/57.jpg', '../img/2.jpeg', '../img/57.jpg', 
    '../img/57.jpg', '../img/57.jpg', '../img/57.jpg',
];

let firstCard = null;
let secondCard = null;
let lockBoard = false;

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
    }, 3000);
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
    }, 1500);
}

function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

function checkWin() {
    const allCards = document.querySelectorAll('.card');
    const flippedCards = document.querySelectorAll('.card.flipped');
    if (allCards.length === flippedCards.length) {
        setTimeout(() => {
            alert('¡Ganaste!');
        }, 500);
    }
}

createBoard();