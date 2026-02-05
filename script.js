document.addEventListener('DOMContentLoaded', () => {
    // We could handle the click here, but using direct href="prank.html" is simpler.
    // Keeping this for potential future enhancements (e.g. analytics or delay).
    console.log("McDonald's Careers Mirror Loaded");
    
    // Optional: Make the search button do a fake search alert
    const searchBtn = document.querySelector('.search-btn');
    if(searchBtn) {
        searchBtn.addEventListener('click', () => {
            alert('Searching... just kidding, pick a job below!');
        });
    }
});
