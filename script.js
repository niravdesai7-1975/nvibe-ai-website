// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Form submission handling for Netlify Forms
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        // Let Netlify handle the form submission
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Reset button after a delay (Netlify will handle the actual submission)
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 3000);
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.solution-card, .about-content, .contact-content');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add loading animation for the neural network
document.addEventListener('DOMContentLoaded', () => {
    const nodes = document.querySelectorAll('.node');
    const connections = document.querySelectorAll('.connection');
    
    // Stagger the node animations
    nodes.forEach((node, index) => {
        node.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Stagger the connection animations
    connections.forEach((connection, index) => {
        connection.style.animationDelay = `${index * 0.3}s`;
    });
});

// Interactive Solutions Carousel
document.addEventListener('DOMContentLoaded', () => {
    const navTabs = document.querySelectorAll('.nav-tab');
    const tabContents = document.querySelectorAll('.tab-content');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentTabIndex = 0;
    const totalTabs = navTabs.length;
    
    // Tab switching function
    function switchTab(index) {
        // Remove active class from all tabs and contents
        navTabs.forEach(tab => tab.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to current tab and content
        navTabs[index].classList.add('active');
        tabContents[index].classList.add('active');
        
        currentTabIndex = index;
        
        // Update navigation buttons
        updateNavigationButtons();
    }
    
    // Update navigation button states
    function updateNavigationButtons() {
        if (prevBtn && nextBtn) {
            prevBtn.disabled = currentTabIndex === 0;
            nextBtn.disabled = currentTabIndex === totalTabs - 1;
        }
    }
    
    // Tab click handlers
    navTabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            switchTab(index);
        });
    });
    
    // Previous button handler
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentTabIndex > 0) {
                switchTab(currentTabIndex - 1);
            }
        });
    }
    
    // Next button handler
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentTabIndex < totalTabs - 1) {
                switchTab(currentTabIndex + 1);
            }
        });
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && currentTabIndex > 0) {
            switchTab(currentTabIndex - 1);
        } else if (e.key === 'ArrowRight' && currentTabIndex < totalTabs - 1) {
            switchTab(currentTabIndex + 1);
        }
    });
    
    // Auto-rotate carousel (optional)
    let autoRotateInterval;
    
    function startAutoRotate() {
        autoRotateInterval = setInterval(() => {
            const nextIndex = (currentTabIndex + 1) % totalTabs;
            switchTab(nextIndex);
        }, 8000); // Change tab every 8 seconds
    }
    
    function stopAutoRotate() {
        if (autoRotateInterval) {
            clearInterval(autoRotateInterval);
        }
    }
    
    // Start auto-rotate on page load
    startAutoRotate();
    
    // Stop auto-rotate when user interacts
    const carouselSection = document.querySelector('.solutions-carousel-section');
    if (carouselSection) {
        carouselSection.addEventListener('mouseenter', stopAutoRotate);
        carouselSection.addEventListener('mouseleave', startAutoRotate);
    }
    
    // Initialize
    updateNavigationButtons();
});
