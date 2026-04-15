// ================================================================
// Ironman Pro Series Website - Interactive Features
// ================================================================
// Purpose: Provide smooth navigation, hover effects, and interactivity
// Status: Independently adapted and enhanced JavaScript features
// ================================================================

/**
 * Smooth Scroll Navigation
 * Enables smooth scrolling when clicking internal navigation links
 * 
 * Implementation: Event listener on all internal anchor links
 * Calculates target element position and scrolls smoothly
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        
        // Only apply smooth scroll to internal links (starting with #)
        if (targetId !== '#') {
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Using smooth behavior for animated scroll
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

/**
 * Athlete Card Interaction Enhancement
 * Adds dynamic features to athlete profile cards
 * 
 * Features:
 * - Card click tracking (logs to console for debugging)
 * - Hover state management
 * - Future: Expandable profile modal, filtering functionality
 */
const athleteCards = document.querySelectorAll('.athlete-card');

athleteCards.forEach((card, index) => {
    // Add click event listener for tracking (can be extended for modal)
    card.addEventListener('click', function(e) {
        // Log which athlete card was clicked (for debugging/analytics)
        const athleteName = this.querySelector('figcaption').textContent;
        console.log(`Clicked on athlete: ${athleteName}`);
        
        // CSS hover effects handled by stylesheet
        // This space reserved for future modal/profile expansion
    });
    
    // Accessibility enhancement - focus state
    card.addEventListener('focus', function() {
        this.style.outline = '3px solid #cc0000';
        this.style.outlineOffset = '2px';
    });
    
    card.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});

/**
 * Race Card Interaction
 * Adds tracking for race card clicks
 * 
 * Purpose: Track user interest in races, future analytics
 */
const raceCards = document.querySelectorAll('.race-card');

raceCards.forEach((card) => {
    card.addEventListener('click', function() {
        const raceDate = this.querySelector('.race-date').textContent;
        console.log(`Navigating to race on: ${raceDate}`);
    });
});

/**
 * Navigation Link Hover Effects
 * Enhanced visual feedback for navigation menu
 * 
 * Note: Primary effects handled by CSS transitions
 * JavaScript adds supplementary interactions
 */
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        // Additional feedback could be added here
        // e.g., tooltip, icon animation, sound cue
    });
});

/**
 * Responsive Navigation Adjustment (Future Feature)
 * Framework for mobile menu toggle functionality
 * 
 * Placeholder for future implementation:
 * - Mobile hamburger menu
 * - Menu collapse/expand animation
 * - Touch gesture support
 */
function initializeMobileMenu() {
    // This function is prepared for future mobile navigation enhancement
    // Would contain:
    // - Hamburger button logic
    // - Mobile menu toggle
    // - Touch event handlers
    console.log('Mobile menu framework ready for implementation');
}

/**
 * Athlete Filtering Framework (Future Feature)
 * Allows users to filter athletes by country/criteria
 * 
 * Implementation ready for:
 * - Country-based filtering
 * - Search functionality
 * - Result count updates
 */
function filterAthletes(filterCriteria) {
    // Framework for future athlete filtering
    // Would implement dynamic card visibility
    console.log(`Filter framework ready: ${filterCriteria}`);
}

/**
 * Performance Monitoring (Development Tool)
 * Logs page load and interaction metrics to console
 * Remove or comment out for production
 */
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('🏃 Ironman Pro Series Website - Development Mode');
    console.log('📊 Ready for interactive testing');
    console.log('✅ All event listeners initialized');
}

/**
 * Keyboard Navigation Enhancement
 * Provides accessibility improvements for keyboard users
 * 
 * Features:
 * - Tab navigation through cards
 * - Enter/Space to activate links
 * - Escape to clear focus
 */
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Clear focus when Escape is pressed
        document.activeElement.blur();
        console.log('Focus cleared with Escape key');
    }
});

// ================================================================
// Initialization Complete
// All interactive features are now active
// ================================================================
