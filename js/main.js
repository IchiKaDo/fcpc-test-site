
function initThemeToggle() {
    const toggle = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;
    if (!toggle || !htmlEl) return;

    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    htmlEl.setAttribute('data-theme', savedTheme);
    toggle.textContent = savedTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';

    toggle.addEventListener('click', () => {
        const newTheme = htmlEl.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        htmlEl.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        toggle.textContent = newTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
    });
}

function initScrollToTop() {
    const btn = document.getElementById('scroll-top');
    if (!btn) return;

    let isScrolling = false;

    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                btn.classList.toggle('show', window.scrollY > 300);
                isScrolling = false;
            });
            isScrolling = true;
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observerInstance.unobserve(entry.target); 
            }
        });
    }, { rootMargin: '0px', threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
}

function initMobileNav() {
    const toggle = document.querySelector('.mobile-toggle');
    const navGrid = document.querySelector('.nav-flex');
    if (!toggle || !navGrid) return;

    toggle.addEventListener('click', (e) => {
        e.stopPropagation(); 
        const isOpen = navGrid.classList.toggle('show-menu');
        toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navGrid.classList.contains('show-menu') && 
            !navGrid.contains(e.target) && 
            !toggle.contains(e.target)) {
            
            navGrid.classList.remove('show-menu');
            toggle.setAttribute('aria-expanded', 'false');
        }
    });
}

function initDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    if (!dropdowns.length) return;

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            const trigger = e.target.closest('.dropdown-label');
            if (!trigger) return;

            e.preventDefault();
            
            // Auto-close other open dropdowns
            dropdowns.forEach(other => {
                if (other !== dropdown && other.classList.contains('active')) {
                    other.classList.remove('active');
                }
            });

            dropdown.classList.toggle('active');
        });
    });
}