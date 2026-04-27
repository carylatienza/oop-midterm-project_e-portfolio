const cursorGlow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
    if (cursorGlow) {
        if (cursorGlow.style.opacity === '0' || cursorGlow.style.opacity === '') {
            cursorGlow.style.opacity = '1';
        }
        window.requestAnimationFrame(() => {
            cursorGlow.style.left = `${e.clientX}px`;
            cursorGlow.style.top = `${e.clientY}px`;
        });
    }
});

// Scale effect for links and buttons
document.addEventListener('mouseover', (e) => {
    if (e.target.closest('a, button, .project-card, .photo-wrapper')) {
        cursorGlow.style.transform = 'translate(-50%, -50%) scale(1.8)';
        cursorGlow.style.background = 'transparent';
        cursorGlow.style.border = '1px solid var(--accent)';
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.closest('a, button, .project-card, .photo-wrapper')) {
        cursorGlow.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorGlow.style.background = 'var(--accent)';
        cursorGlow.style.border = 'none';
    }
});