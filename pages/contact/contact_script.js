// Google Apps Script URL
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyRRpd6sC2TqdKHeYIoKtiwFvBj_0HDXf6xVWShCLJJwmKCY39yoJCFYJp1pM1LTUAn/exec';
const WHATSAPP_NUMBER = '9037581163'; // User updated number

console.log('Contact script loaded successfully');

// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Form submission handler (Fetch API for "Silent" Submit & Clear)
// Form submission handler (UI & Validation Only - Submit handled by HTML/Iframe)
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            const submitBtn = document.getElementById('submitBtn');
            const originalBtnText = submitBtn.innerHTML;

            // Validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !service || !message) {
                e.preventDefault(); // Stop if invalid
                showAlert('⚠ Please fill in all required fields.', 'error');
                return;
            }

            // Show loading
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
            showAlert('⏳ Sending your message...', 'info');

            // Allow the form to submit naturally to the iframe
            // The iframe's onload event in HTML will trigger the reload.
        });
    }
});



// Helper: Show Alert
function showAlert(msg, type) {
    const alertBox = document.getElementById('alertMessage');
    alertBox.textContent = msg;

    // Reset classes
    alertBox.classList.remove('alert-success', 'alert-error');

    if (type === 'success') {
        alertBox.classList.add('alert-success');
        alertBox.style.color = 'green';
    } else if (type === 'error') {
        alertBox.classList.add('alert-error');
        alertBox.style.color = 'red';
    } else {
        alertBox.style.color = '#333';
    }

    alertBox.style.display = 'block';

    if (type !== 'info') {
        setTimeout(() => {
            alertBox.style.display = 'none';
        }, 5000);
    }
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});