// Interactive behavior for the website
document.addEventListener('DOMContentLoaded', function() {
    // Multi-step form functionality
    const formSteps = document.querySelectorAll('.form-step');
    const form = document.getElementById('mainForm');
    
    let currentStep = 1;
    const totalSteps = 3;

    // Next button handlers
    document.querySelectorAll('.btn-next').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const step = parseInt(this.closest('.form-step').dataset.step);
            const nextStep = step + 1;
            
            if (nextStep <= totalSteps) {
                // Hide current step, show next step
                document.querySelector(`.form-step[data-step="${step}"]`).classList.remove('active');
                document.querySelector(`.form-step[data-step="${nextStep}"]`).classList.add('active');
                
                // Update button text
                const btns = document.querySelectorAll('.btn-next');
                if (btns[nextStep - 1]) {
                    btns[nextStep - 1].textContent = `Next: ${['Review', 'Submit'][nextStep - 1]} →`;
                }
            }
        });
    });

    // Previous button handlers
    document.querySelectorAll('.btn-previous').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const step = parseInt(this.closest('.form-step').dataset.step);
            const prevStep = step - 1;
            
            if (prevStep >= 1) {
                // Hide current step, show previous step
                document.querySelector(`.form-step[data-step="${step}"]`).classList.remove('active');
                document.querySelector(`.form-step[data-step="${prevStep}"]`).classList.add('active');
                
                // Update button text
                const btns = document.querySelectorAll('.btn-next');
                if (btns[prevStep - 1]) {
                    btns[prevStep - 1].textContent = `Next: ${['Upload Documents', 'Review'][prevStep - 1]} →`;
                }
            }
        });
    });

    // Form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span class="btn-spinner"><span class="spinner"></span> Filing...</span>';
        btn.disabled = true;

        // Simulate form submission to demo
        setTimeout(function() {
            btn.innerHTML = '<span class="btn-icon">✅</span> Submitted!';
            btn.style.background = '#4CAF50';
            setTimeout(function() {
                btn.innerHTML = originalText;
                btn.style.background = '';
                btn.disabled = false;
                // Reset form to first step
                document.querySelector('.form-step[data-step="1"]').classList.add('active');
                document.querySelector('.form-step[data-step="2"]').classList.remove('active');
                document.querySelector('.form-step[data-step="3"]').classList.remove('active');
                currentStep = 1;
            }, 2000);
        }, 1000);
    });

    // FAQ accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const parent = this.closest('.faq-item');
            const answer = parent.querySelector('.faq-answer');
            
            // Close all other answers
            document.querySelectorAll('.faq-item.active').forEach(item => {
                if (item !== parent) {
                    item.classList.remove('active');
                }
            });
            
            // Toggle current answer
            parent.classList.toggle('active');
        });
    });

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
    if (mobileMenu && mobileToggle) {
        // Check if page is mobile (max-width: 900px)
        if (window.innerWidth <= 900) {
            // Toggle mobile menu
            mobileToggle.addEventListener('click', function() {
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
