const menuToggle = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

function filterSuggestions() {
    const query = document.getElementById('search-box').value.toLowerCase();
    const suggestions = document.querySelectorAll('#suggestions li');
  
    suggestions.forEach(suggestion => {
      if (suggestion.textContent.toLowerCase().includes(query)) {
        suggestion.style.display = 'block';
      } else {
        suggestion.style.display = 'none';
      }
    });
}