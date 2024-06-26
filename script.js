document.addEventListener('DOMContentLoaded', function() {
    const parchment = document.querySelector('.parchment');
    const content = document.querySelector('.content');
    
    // Trigger the slide down and fade in animations
    parchment.style.animation = 'slideDown 1s forwards';
    content.style.animation = 'fadeIn 1.1s forwards 1.1s';
});