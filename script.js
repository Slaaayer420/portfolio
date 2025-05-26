// script.js
// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Animation pour les cartes
const approachCards = document.querySelectorAll('.approach-card');
approachCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});
// Animation au scroll pour la section hero
window.addEventListener('scroll', function() {
    const heroContent = document.querySelector('.hero-content');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition < 200) {
        heroContent.style.transform = `translateY(${scrollPosition / 3}px)`;
    }
});

// Animation des éléments au chargement
document.addEventListener('DOMContentLoaded', function() {
    // Animation des bulles
    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach(bubble => {
        bubble.style.animationDuration = `${Math.random() * 10 + 5}s`;
        bubble.style.animationDelay = `${Math.random() * 3}s`;
    });
    
    // Effet de vague dynamique
    const wave = document.createElement('div');
    wave.className = 'dynamic-wave';
    document.querySelector('.hero-section').appendChild(wave);
});