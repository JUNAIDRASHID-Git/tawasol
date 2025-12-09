// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});



// Auto-rotate clients carousel
const carousel = new bootstrap.Carousel(document.getElementById('clientsCarousel'), {
    interval: 3000,
    wrap: true,
    ride: 'carousel'
});

// WhatsApp Configuration
const WHATSAPP_NUMBER = '919037581163'; // Indian WhatsApp number

// WhatsApp Popup Functions
function openWhatsAppPopup() {
    const popup = document.getElementById('whatsappPopup');
    popup.classList.add('active');
}

function closeWhatsAppPopup() {
    const popup = document.getElementById('whatsappPopup');
    popup.classList.remove('active');
}

function sendWhatsAppMessage(event) {
    event.preventDefault();

    const name = document.getElementById('waName').value;
    const email = document.getElementById('waEmail').value;
    const phone = document.getElementById('waPhone').value;
    const service = document.getElementById('waService').value;
    const message = document.getElementById('waMessage').value;

    // Format the message with proper line breaks
    const whatsappMessage = `*New Inquiry from TAWASOL Website*

*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}
*Service:* ${service}
*Message:* ${message}`;

    // Create WhatsApp link with your business number
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');

    // Reset form and close popup
    document.getElementById('whatsappForm').reset();
    closeWhatsAppPopup();
}

// Close popup when clicking outside
document.addEventListener('click', function (event) {
    const popup = document.getElementById('whatsappPopup');
    const floatingBtn = document.querySelector('.whatsapp-floating-btn');

    if (!popup.contains(event.target) && !floatingBtn.contains(event.target) && popup.classList.contains('active')) {
        closeWhatsAppPopup();
    }
});

// Close any open Bootstrap dropdowns when clicking outside (extra safety)
document.addEventListener('click', function (event) {
    // if the click happened inside any dropdown, do nothing
    if (event.target.closest('.dropdown')) return;

    // otherwise hide any open dropdowns
    document.querySelectorAll('.dropdown.show').forEach(function (drop) {
        const toggle = drop.querySelector('[data-bs-toggle="dropdown"]');
        if (toggle) {
            const inst = bootstrap.Dropdown.getOrCreateInstance(toggle);
            inst.hide();
        } else {
            drop.classList.remove('show');
            const menu = drop.querySelector('.dropdown-menu');
            if (menu) menu.classList.remove('show');
        }
    });
});