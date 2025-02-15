// // Mobile menu functionality
// const mobileMenuButton = document.getElementById('mobile-menu-button');
// const closeMenuButton = document.getElementById('close-menu');
// const mobileMenu = document.getElementById('mobile-menu');

// function toggleMenu() {
//     mobileMenu.classList.toggle('active');
// }

// mobileMenuButton.addEventListener('click', toggleMenu);
// closeMenuButton.addEventListener('click', toggleMenu);

// // Close menu when clicking outside
// document.addEventListener('click', (e) => {
//     if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
//         mobileMenu.classList.remove('active');
//     }
// });

// // Update copyright year
// document.getElementById('current-year').textContent = new Date().getFullYear();

// // Contact form handling
// document.addEventListener('DOMContentLoaded', () => {
//     const contactForm = document.getElementById('contact-form');
//     if (contactForm) {
//         contactForm.addEventListener('submit', function(e) {
//             e.preventDefault();

//             // Get form data
//             const name = document.getElementById('name').value.trim();
//             const email = document.getElementById('email').value.trim();
//             const subject = document.getElementById('subject').value.trim();
//             const message = document.getElementById('message').value.trim();

//             // Basic validation
//             if (!name || !email || !subject || !message) {
//                 alert('Please fill in all fields');
//                 return;
//             }

//             // Email validation
//             const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//             if (!emailRegex.test(email)) {
//                 alert('Please enter a valid email address');
//                 return;
//             }

//             // Format message for WhatsApp
//             const whatsappMessage = encodeURIComponent(
//                 `*New Inquiry from Website*\n\n` +
//                 `*Name:* ${name}\n` +
//                 `*Email:* ${email}\n` +
//                 `*Subject:* ${subject}\n\n` +
//                 `*Message:*\n${message}`
//             );

//             // Create WhatsApp link
//             const whatsappLink = `https://wa.me/9779825340719?text=${whatsappMessage}`;

//             // Open WhatsApp in new tab
//             window.open(whatsappLink, '_blank');

//             // Reset form
//             this.reset();
//             alert('Thank you for your message! You will be redirected to WhatsApp to send your inquiry.');
//         });
//     }
// });

// Mobile menu functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const closeMenuButton = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');

function toggleMenu() {
    mobileMenu.classList.toggle('active');
}

mobileMenuButton.addEventListener('click', toggleMenu);
closeMenuButton.addEventListener('click', toggleMenu);

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
        mobileMenu.classList.remove('active');
    }
});

// Update copyright year dynamically
document.getElementById('current-year').textContent = new Date().getFullYear();

// Contact form and WhatsApp button handling
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const whatsappButton = document.getElementById('whatsapp-send-button');

    function sendWhatsAppMessage() {
        // Get form data
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Basic validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields before sending a message.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Format WhatsApp message
        const whatsappMessage = encodeURIComponent(
            `*New Inquiry from Website*\n\n` +
            `*Name:* ${name}\n` +
            `*Email:* ${email}\n` +
            `*Subject:* ${subject}\n\n` +
            `*Message:*\n${message}`
        );

        // Create WhatsApp link
        const whatsappLink = `https://wa.me/9779825340719?text=${whatsappMessage}`;

        // Open WhatsApp in a new tab
        window.open(whatsappLink, '_blank');

        // Optional: Alert the user
        alert('You will be redirected to WhatsApp to send your message.');
    }

    // Event listener for the form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            sendWhatsAppMessage();
            this.reset(); // Reset form after submission
        });
    }

    // Event listener for WhatsApp button click
    if (whatsappButton) {
        whatsappButton.addEventListener('click', sendWhatsAppMessage);
    }
});
