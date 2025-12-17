// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    mobileMenuBtn.innerHTML = mainNav.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Form submission to WhatsApp
const bookingForm = document.getElementById('bookingForm');

bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const cakeType = document.getElementById('cakeType').value;
    const size = document.getElementById('size').value;
    const date = document.getElementById('date').value;
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Format date for display
    const formattedDate = new Date(date).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    
    // Create WhatsApp message
    const whatsappMessage = `Hello! I'd like to place a cake order:%0A%0A` +
        `*Name:* ${name}%0A` +
        `*Phone:* ${phone}%0A` +
        (email ? `*Email:* ${email}%0A` : '') +
        `*Cake Type:* ${cakeType}%0A` +
        `*Size:* ${size}%0A` +
        `*Preferred Date:* ${formattedDate}%0A` +
        (message ? `*Special Instructions:* ${message}%0A` : '') +
        `%0AI look forward to your confirmation!`;
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/254718868293?text=${whatsappMessage}`, '_blank');
    
    // Reset form
    bookingForm.reset();
    
    // Show confirmation
    alert('Thank you! Your booking details have been prepared. You will now be redirected to WhatsApp to send your order.');
});

// Set minimum date to today for the date picker
const dateInput = document.getElementById('date');
const today = new Date().toISOString().split('T')[0];
dateInput.min = today;

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add some interactive effects to gallery items
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add loading animation for images
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    // Set initial opacity to 0 for fade-in effect
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.5s ease';
});

// Form validation enhancement
function validatePhoneNumber(phone) {
    const phoneRegex = /^[0-9]{10,15}$/;
    return phoneRegex.test(phone.replace(/\D/g, ''));
}

const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('blur', function() {
    if (this.value && !validatePhoneNumber(this.value)) {
        this.style.borderColor = 'red';
        // Optional: Show error message
    } else {
        this.style.borderColor = '#e0e0e0';
    }
});

// Add current year to footer copyright
const copyrightElement = document.querySelector('.copyright');
if (copyrightElement) {
    const currentYear = new Date().getFullYear();
    copyrightElement.innerHTML = copyrightElement.innerHTML.replace('2023', currentYear);
}