import { initToolbar } from '@stagewise/toolbar';

// Initialize Stagewise Toolbar in development mode only
if (import.meta.env.DEV) {
  const stagewiseConfig = {
    plugins: []
  };
  initToolbar(stagewiseConfig);
}

// Main JavaScript file for Poly Energy website

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuButton && navLinks) {
        mobileMenuButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Smooth scroll for anchor links (if any)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize Plyr player
    if (document.getElementById('player')) {
        const player = new Plyr('#player');
    }

    // Scroll to Top Button Functionality
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    if (scrollToTopBtn) {
        // Show or hide the button based on scroll position
        window.onscroll = function() {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        };

        // Scroll to the top when the button is clicked
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({top: 0, behavior: 'smooth'});
        });
    }

    // Partnership Slider Functionality
    const scrollContainer = document.querySelector('.partnership-scroll-container');
    const scrollLeftBtn = document.getElementById('scroll-left-btn');
    const scrollRightBtn = document.getElementById('scroll-right-btn');

    if (scrollContainer && scrollLeftBtn && scrollRightBtn) {
        const scrollAmount = 300; // The amount to scroll on each click

        scrollLeftBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        scrollRightBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }

    // Future: Add code for a carousel/slider for the main content sections
    // e.g., using a library like Swiper.js or a custom implementation.
    console.log('Poly Energy website script loaded.');

    // Header hide on scroll, show on mouse top
    let lastScrollY = window.scrollY;
    let ticking = false;
    const header = document.querySelector('header');
    let isHeaderHidden = false;

    function onScroll() {
        if (window.scrollY > 100 && window.scrollY > lastScrollY) {
            // 向下滚动且不是顶部，隐藏header
            if (header && !isHeaderHidden) {
                header.classList.add('header-hidden');
                isHeaderHidden = true;
            }
        } else {
            // 向上滚动或回到顶部，显示header
            if (header && isHeaderHidden) {
                header.classList.remove('header-hidden');
                isHeaderHidden = false;
            }
        }
        lastScrollY = window.scrollY;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(onScroll);
            ticking = true;
        }
    });

    // 鼠标移到页面最上方时显示header
    document.addEventListener('mousemove', (e) => {
        if (e.clientY < 60 && header && isHeaderHidden) {
            header.classList.remove('header-hidden');
            isHeaderHidden = false;
        }
    });
}); 