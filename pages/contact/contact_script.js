// WhatsApp Configuration
const WHATSAPP_NUMBER = '919037581163'; // Your Indian WhatsApp number

// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();

    const alertBox = document.getElementById('alertMessage');

    if (!name || !email || !service || !message) {
        alertBox.textContent = '⚠ Please fill in all required fields.';
        alertBox.classList.remove('alert-success');
        alertBox.classList.add('alert-error');
        alertBox.style.display = 'block';
        return;
    }

    // Format message for WhatsApp
    const whatsappMessage = `*New Contact Form Submission - TAWASOL Website*

*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}
*Service Interested:* ${service}
*Message:* ${message}`;

    // Create WhatsApp URL and open it
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');

    // Show success message
    alertBox.textContent = '✓ Opening WhatsApp to send your message...';
    alertBox.classList.remove('alert-error');
    alertBox.classList.add('alert-success');
    alertBox.style.display = 'block';

    this.reset();

    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 5000);
});

function sendEmailMessage() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();

    const alertBox = document.getElementById('alertMessage');

    if (!name || !email || !service || !message) {
        alertBox.textContent = '⚠ Please fill in all required fields.';
        alertBox.classList.remove('alert-success');
        alertBox.classList.add('alert-error');
        alertBox.style.display = 'block';
        return;
    }

    const subject = encodeURIComponent(`New Inquiry from ${name} - ${service}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}`);

    const mailtoLink = `mailto:fathimaansal81@gmail.com?subject=${subject}&body=${body}`;

    // Use a temporary link to open mail client (often more reliable)
    const link = document.createElement('a');
    link.href = mailtoLink;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show success feedback
    alertBox.textContent = '✓ Opening your email client...';
    alertBox.classList.remove('alert-error');
    alertBox.classList.add('alert-success');
    alertBox.style.display = 'block';

    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 5000);
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