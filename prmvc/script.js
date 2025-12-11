// JavaScript for Parallax Effect
document.addEventListener('DOMContentLoaded', function() {
    const parallaxBg = document.getElementById('parallax-bg');
    
    // Check if the element exists
    if (!parallaxBg) return;

    // Define the scrolling speed factor (0.1 means the background moves at 10% of the normal speed)
    const parallaxFactor = 0.4; 

    // Function to calculate and apply the transform
    function scrollEffect() {
        // window.pageYOffset is the current vertical scroll position
        const scrolled = window.pageYOffset; 
        
        // Calculate the translation distance
        // The minus sign makes the background scroll up slower than the foreground
        const yPos = scrolled * parallaxFactor; 
        
        // Apply the transformation for the parallax effect
        // Using translate3d is often better for performance as it leverages GPU acceleration
        parallaxBg.style.transform = `translate3d(0, ${yPos}px, 0)`;
    }

    // Add the scroll event listener
    window.addEventListener('scroll', scrollEffect);

    // Initial call to set the position correctly on load
    scrollEffect();
});

// Note: A simple toggle for the mobile menu (menu-toggle) is omitted for brevity but 
// would be necessary for a fully functional responsive navigation on mobile.