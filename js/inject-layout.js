async function loadLayout() {
    try {
        const headerResponse = await fetch('components/main-nav.html');
        if (headerResponse.ok) {
            const headerHtml = await headerResponse.text();
            document.getElementById('navbar-placeholder').innerHTML = headerHtml;
        }

        const footerResponse = await fetch('components/site-footer.html');
        if (footerResponse.ok) {
            const footerHtml = await footerResponse.text();
            document.getElementById('footer-placeholder').innerHTML = footerHtml;
        }
        initThemeToggle();
        initScrollToTop();
        initScrollAnimations();
        initMobileNav();
        initDropdowns();   
    } catch (error) {
        console.error("Failed to load layout:", error);
    }
}

function initializeMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
    }
}

function initializeThemeToggle() {
    const themeBtn = document.getElementById('theme-toggle');
    
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            // Grabs the <html> element to swap the data-theme attribute
            const htmlElement = document.documentElement;
            const currentTheme = htmlElement.getAttribute('data-theme');
            
            if (currentTheme === 'light') {
                htmlElement.setAttribute('data-theme', 'dark');
                themeBtn.textContent = '☀️ Light Mode';
            } else {
                htmlElement.setAttribute('data-theme', 'light');
                themeBtn.textContent = '🌙 Dark Mode';
            }
        });
    }
}

loadLayout();