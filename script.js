const toggleButton = document.getElementById('theme-toggle');

// 1. Checking for saved user preference when the dark page loads
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    toggleButton.textContent = 'Toggle Light Mode';
}

// 2. Listen for clicks
toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    //3. Update text and save preferences based on current state
    if (document.body.classList.contains('dark-mode')){
        toggleButton.textContent = 'Toggle Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        toggleButton.textContent = 'Toggle Dark Mode';
        localStorage.setItem('theme', 'light');
    }
});
