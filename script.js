// Corações flutuantes (código anterior mantido)
const heartsContainer = document.querySelector('.hearts');

for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.top = Math.random() * 100 + '%';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = Math.random() * 5 + 5 + 's';
    heartsContainer.appendChild(heart);
}

// Interatividade: clique no coração faz ele "bater"
document.querySelector('.heart-animation').addEventListener('click', () => {
    const heart = document.querySelector('.heart-animation');
    heart.style.animation = 'none';
    void heart.offsetWidth; // Reinicia a animação
    heart.style.animation = 'pulse 2s infinite';
});
