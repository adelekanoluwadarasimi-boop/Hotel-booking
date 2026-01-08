document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50
    });

    // Tab Switching Logic
    const tabs = document.querySelectorAll('.search-tabs .tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    // Simple Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.9)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.05)';
            navbar.style.position = 'fixed';
            navbar.style.padding = '16px 0';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.backdropFilter = 'none';
            navbar.style.boxShadow = 'none';
            navbar.style.position = 'absolute';
            navbar.style.padding = '24px 0';
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navActions = document.querySelector('.nav-actions');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Log for confirmation
    console.log('Horizon Estate Loaded Successfully');
});
