// 1. Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlEl.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    htmlEl.setAttribute('data-theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// 2. Scroll To Top Button Logic
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 3. Scroll Animations (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el);
});


// New lines here

// CHANGED: 4. Mobile Navigation Menu Toggle Logic
const mobileToggle = document.querySelector('.mobile-toggle');
const navGrid = document.querySelector('.nav-grid');

mobileToggle.addEventListener('click', () => {
    // Toggles the visibility of the nav menu
    navGrid.classList.toggle('show-menu');
});

// CHANGED: 5. Mobile Dropdown Interaction Logic
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
        // Prevent the click from immediately closing if clicking inside the link
        if(e.target.tagName !== 'A') {
            e.preventDefault(); 
            // Toggle the 'active' class to rotate caret and expand content
            dropdown.classList.toggle('active');
        }
    });
});