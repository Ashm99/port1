document.addEventListener("DOMContentLoaded", () => {
    // Theme toggle functionality
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
    
    // Function to show portfolio and hide landing
    function showPortfolio() {
      document.getElementById("landing").classList.add("hidden");
      document.getElementById("portfolio").classList.remove("hidden");
    }
    
    // Click event for scroll indicator
    const scrollIndicator = document.getElementById("scroll-indicator");
    scrollIndicator.addEventListener("click", showPortfolio);
    
    // Touch events for swipe up on scroll indicator
    let startY = 0;
    scrollIndicator.addEventListener("touchstart", (e) => {
      startY = e.touches[0].clientY;
    });
    scrollIndicator.addEventListener("touchend", (e) => {
      let endY = e.changedTouches[0].clientY;
      if (startY - endY > 50) { // if swiped up more than 50px
        showPortfolio();
      }
    });
  });
  