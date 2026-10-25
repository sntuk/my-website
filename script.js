// Interactive behavior for the website
document.addEventListener('DOMContentLoaded', function() {
    // Form submission handler
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = 'Sending...';
            btn.disabled = true;

            // Simulate form submission
            setTimeout(function() {
                btn.textContent = '✓ Sent!';
                btn.style.background = '#4CAF50';
                setTimeout(function() {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    btn.disabled = false;
                    form.reset();
                }, 2000);
            }, 800);
        });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileToggle = document.querySelector('.mobile-toggle');

    // Only if mobile menu exists (not on desktop)
    if (mobileMenu) {
        // Check if page is mobile (max-width: 900px)
        if (window.innerWidth <= 900) {
            // Add mobile toggle button
            const navTop = document.querySelector('.nav-top');
            if (navTop) {
                const toggle = document.createElement('button');
                toggle.className = 'mobile-toggle';
                toggle.textContent = '☰';
                navTop.appendChild(toggle);
            }

            // Toggle mobile menu
            document.querySelector('.mobile-toggle').addEventListener('click', function() {
                mobileMenu.classList.toggle('active');
            });

            // Close mobile menu when clicking a link
            document.querySelectorAll('.mobile-links a').forEach(link => {
                link.addEventListener('click', function() {
                    mobileMenu.classList.remove('active');
                });
            });
        }
    }
});
