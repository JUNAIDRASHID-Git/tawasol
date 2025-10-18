 // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
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

            // Simulate form submission
            alertBox.textContent = '✓ Thank you for reaching out! We will contact you within 24 hours.';
            alertBox.classList.remove('alert-error');
            alertBox.classList.add('alert-success');
            alertBox.style.display = 'block';

            this.reset();

            setTimeout(() => {
                alertBox.style.display = 'none';
            }, 5000);
        });

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