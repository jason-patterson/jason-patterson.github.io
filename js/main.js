// ========================================
// Scroll Animation Observer
// ========================================

const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ========================================
// Smooth Scroll for Navigation Links
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// Mobile Menu Toggle (for future implementation)
// ========================================

// You can add mobile menu functionality here
// Example:
// const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
// const navLinks = document.querySelector('.nav-links');
// 
// if (mobileMenuBtn) {
//     mobileMenuBtn.addEventListener('click', () => {
//         navLinks.classList.toggle('active');
//     });
// }

// ========================================
// Form Handling (for future contact form)
// ========================================

// Example contact form handler
// const contactForm = document.querySelector('#contact-form');
// 
// if (contactForm) {
//     contactForm.addEventListener('submit', async (e) => {
//         e.preventDefault();
//         // Add your form submission logic here
//     });
// }
