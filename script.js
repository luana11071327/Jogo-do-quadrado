let score = 0;
const square = document.getElementById('square');
const scoreDisplay = document.getElementById('score');

// Função para mover o quadrado para uma posição aleatória
function moveSquare() {
const containerSize = 300;
const squareSize = 50;
const maxPosition = containerSize - squareSize;

const randomX = Math.floor(Math.random() * maxPosition);
const randomY = Math.floor(Math.random() * maxPosition);

square.style.top = `${randomY}px`;
square.style.left = `${randomX}px`;
}

// Função para aumentar a pontuação
square.addEventListener('click', () => {
score++;
scoreDisplay.textContent = score;
moveSquare();
});

// Move o quadrado a cada 1000 milissegundos (1 segundo)
setInterval(moveSquare, 1000);