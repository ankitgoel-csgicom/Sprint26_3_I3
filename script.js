function showSlide(slideNumber) {
    // Hide all slides
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Show selected slide
    document.getElementById('slide' + slideNumber).classList.add('active');
    
    // Add active class to clicked button
    buttons[slideNumber - 1].classList.add('active');
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Animate progress bar on page load
window.addEventListener('load', () => {
    const progressBar = document.getElementById('deliveryProgress');
    if (progressBar) {
        setTimeout(() => {
            progressBar.style.width = '96.77%';
        }, 500);
    }
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    const currentSlide = document.querySelector('.slide.active');
    const currentSlideNumber = parseInt(currentSlide.id.replace('slide', ''));
    
    if (e.key === 'ArrowRight' && currentSlideNumber < 7) {
        showSlide(currentSlideNumber + 1);
    } else if (e.key === 'ArrowLeft' && currentSlideNumber > 1) {
        showSlide(currentSlideNumber - 1);
    }
});

// Add celebration effect for Wall of Fame
document.addEventListener('DOMContentLoaded', () => {
    const fameCards = document.querySelectorAll('.fame-card');
    fameCards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.05) rotate(' + (Math.random() * 6 - 3) + 'deg)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1) rotate(0deg)';
        });
    });
});
