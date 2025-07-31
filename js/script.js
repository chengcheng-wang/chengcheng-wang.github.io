// Academic Website JavaScript
// Enhanced functionality for Chengcheng Wang's personal website

document.addEventListener('DOMContentLoaded', function() {
    // Set the last updated date
    setLastUpdatedDate();
    
    // Add smooth scrolling for internal links
    addSmoothScrolling();
    
    // Add interactive elements
    addInteractiveFeatures();
    
    // Add keyboard navigation
    addKeyboardNavigation();
    
    // Add loading animation
    addLoadingAnimation();
    
    // Initialize theme toggler (optional)
    initializeThemeToggler();
});

// Set the last updated date in the footer
function setLastUpdatedDate() {
    const lastUpdatedElement = document.getElementById('last-updated');
    if (lastUpdatedElement) {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        lastUpdatedElement.textContent = formattedDate;
    }
}

// Add smooth scrolling for internal links
function addSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add interactive features
function addInteractiveFeatures() {
    // Add hover effects to publication items
    const publicationItems = document.querySelectorAll('.publication-item');
    publicationItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    // Add click-to-copy email functionality
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Extract email from href
            const email = this.href.replace('mailto:', '');
            
            // Copy to clipboard if supported
            if (navigator.clipboard) {
                navigator.clipboard.writeText(email).then(() => {
                    showNotification('Email copied to clipboard!');
                });
            }
        });
    });
    
    // Add expand/collapse functionality for long content
    // addExpandCollapse(); // Disabled - show full content without Read more
}

// Add expand/collapse functionality
function addExpandCollapse() {
    const longSections = document.querySelectorAll('.publication-item, .experience-item');
    
    longSections.forEach(section => {
        const content = section.querySelector('p');
        if (content && content.textContent.length > 200) {
            const fullText = content.textContent;
            const shortText = fullText.substring(0, 200) + '...';
            
            content.textContent = shortText;
            
            const toggleButton = document.createElement('button');
            toggleButton.textContent = 'Read more';
            toggleButton.className = 'toggle-button';
            toggleButton.style.cssText = `
                background: none;
                border: none;
                color: #3498db;
                cursor: pointer;
                font-weight: 500;
                margin-left: 5px;
                text-decoration: underline;
            `;
            
            let isExpanded = false;
            
            toggleButton.addEventListener('click', function() {
                if (isExpanded) {
                    content.textContent = shortText;
                    this.textContent = 'Read more';
                    isExpanded = false;
                } else {
                    content.textContent = fullText;
                    this.textContent = 'Read less';
                    isExpanded = true;
                }
            });
            
            content.appendChild(toggleButton);
        }
    });
}

// Add keyboard navigation
function addKeyboardNavigation() {
    const focusableElements = document.querySelectorAll(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    
    document.addEventListener('keydown', function(e) {
        // Add keyboard shortcuts
        if (e.altKey) {
            switch(e.key) {
                case 'h':
                    e.preventDefault();
                    document.querySelector('.header').scrollIntoView({ behavior: 'smooth' });
                    break;
                case 'r':
                    e.preventDefault();
                    document.querySelector('.research-section')?.scrollIntoView({ behavior: 'smooth' });
                    break;
                case 'p':
                    e.preventDefault();
                    document.querySelector('.publications-section')?.scrollIntoView({ behavior: 'smooth' });
                    break;
                case 'c':
                    e.preventDefault();
                    document.querySelector('.cv-section')?.scrollIntoView({ behavior: 'smooth' });
                    break;
            }
        }
    });
}

// Add loading animation
function addLoadingAnimation() {
    // Add fade-in animation to sections
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Initialize theme toggler (optional feature)
function initializeThemeToggler() {
    // Create theme toggle button
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.className = 'theme-toggle';
    themeToggle.setAttribute('aria-label', 'Toggle dark mode');
    themeToggle.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #3498db;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(themeToggle);
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        enableDarkMode();
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    themeToggle.addEventListener('click', function() {
        if (document.body.classList.contains('dark-theme')) {
            disableDarkMode();
            this.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            enableDarkMode();
            this.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });
}

// Dark mode functions
function enableDarkMode() {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
    
    // Add dark mode styles
    const darkModeStyles = `
        .dark-theme {
            background-color: #1a1a1a !important;
            color: #e0e0e0 !important;
        }
        .dark-theme .header {
            border-bottom-color: #64b5f6 !important;
        }
        .dark-theme .footer {
            border-top-color: #64b5f6 !important;
        }
        .dark-theme section h2 {
            color: #64b5f6 !important;
            border-bottom-color: #64b5f6 !important;
        }
        .dark-theme .contact-link {
            color: #64b5f6 !important;
        }
        .dark-theme .contact-link:hover {
            background-color: #64b5f6 !important;
        }
        .dark-theme .education-item,
        .dark-theme .experience-item,
        .dark-theme .publication-item,
        .dark-theme .cv-section,
        .dark-theme .footer {
            background-color: #2d2d2d !important;
        }
        .dark-theme .education-item {
            border-left-color: #64b5f6 !important;
        }
        .dark-theme .education-item h3 {
            color: #64b5f6 !important;
        }
        .dark-theme .experience-item {
            border-left-color: #64b5f6 !important;
        }
        .dark-theme .experience-item h3 {
            color: #64b5f6 !important;
        }
        .dark-theme .publication-item {
            border-left-color: #64b5f6 !important;
        }
        .dark-theme .interests-list li {
            background-color: #2d2d2d !important;
            border-left-color: #64b5f6 !important;
        }
        .dark-theme .awards-list li {
            background-color: #2d2d2d !important;
            border-left-color: #64b5f6 !important;
        }
        .dark-theme .awards-list li::before {
            background-color: #64b5f6 !important;
        }
        .dark-theme .cv-section {
            border-color: #64b5f6 !important;
        }
        .dark-theme .cv-link {
            color: #64b5f6 !important;
            border-color: #64b5f6 !important;
        }
        .dark-theme .cv-link:hover {
            background-color: #64b5f6 !important;
        }
        .dark-theme p,
        .dark-theme .experience-org,
        .dark-theme .experience-date {
            color: #c0c0c0 !important;
        }
    `;
    
    let styleSheet = document.getElementById('dark-mode-styles');
    if (!styleSheet) {
        styleSheet = document.createElement('style');
        styleSheet.id = 'dark-mode-styles';
        document.head.appendChild(styleSheet);
    }
    styleSheet.textContent = darkModeStyles;
}

function disableDarkMode() {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
    
    const styleSheet = document.getElementById('dark-mode-styles');
    if (styleSheet) {
        styleSheet.remove();
    }
}

// Show notification function
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #27ae60;
        color: white;
        padding: 12px 24px;
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideDown 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// Add CSS animations
const animationStyles = `
    @keyframes slideDown {
        from { transform: translateX(-50%) translateY(-100%); }
        to { transform: translateX(-50%) translateY(0); }
    }
    
    @keyframes slideUp {
        from { transform: translateX(-50%) translateY(0); }
        to { transform: translateX(-50%) translateY(-100%); }
    }
    
    .toggle-button:hover {
        background-color: #f0f0f0;
        padding: 2px 6px;
        border-radius: 3px;
    }
    
    .theme-toggle:hover {
        transform: scale(1.1);
        box-shadow: 0 4px 16px rgba(0,0,0,0.3);
    }
`;

const styleElement = document.createElement('style');
styleElement.textContent = animationStyles;
document.head.appendChild(styleElement);

// Add scroll-to-top functionality
window.addEventListener('scroll', function() {
    const scrollTop = document.documentElement.scrollTop;
    
    // Show/hide scroll-to-top button
    let scrollButton = document.getElementById('scroll-to-top');
    if (!scrollButton) {
        scrollButton = document.createElement('button');
        scrollButton.id = 'scroll-to-top';
        scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollButton.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #3498db;
            color: white;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            cursor: pointer;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
        `;
        
        scrollButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        document.body.appendChild(scrollButton);
    }
    
    if (scrollTop > 300) {
        scrollButton.style.opacity = '1';
        scrollButton.style.visibility = 'visible';
    } else {
        scrollButton.style.opacity = '0';
        scrollButton.style.visibility = 'hidden';
    }
});

// Console message for developers
console.log(`
🎓 Chengcheng Wang's Academic Website
✨ Features: Responsive design, dark mode, smooth scrolling, keyboard navigation
🛠️ Built with: HTML5, CSS3, JavaScript
📧 For questions or collaborations, please use the contact links on the site.
`);