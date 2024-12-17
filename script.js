const buttons = document.querySelectorAll(".category-buttons button");
const categories = document.querySelectorAll(".category");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // Remove active class from all buttons
        buttons.forEach((btn) => btn.classList.remove("active"));
        // Add active class to the clicked button
        button.classList.add("active");

        // Get the selected category
        const selectedCategory = button.getAttribute("data-category");

        // Update the position of the categories
        categories.forEach((category) => {
            if (category.id === selectedCategory) {
                category.style.left = "0";
            } else if (category.id === "men" && selectedCategory === "women") {
                category.style.left = "-100%";
            } else {
                category.style.left = "100%";
            }
        });
    });
});


// -------------search -------------- 
// Function to toggle the visibility of the search menu
function toggleSearchMenu() {
    const searchMenu = document.getElementById('search-menu');
    // searchMenu.style.display = searchMenu.style.display === 'block' ? 'none' : 'block';
    if (searchMenu.classList.contains('active')) {
        searchMenu.classList.remove('active');
        setTimeout(() => searchMenu.style.display = 'none', 300);
    }
    else {
        searchMenu.style.display = 'block';
        setTimeout(() => searchMenu.classList.add('active'), 10);
    }
  }
  
  // Function to filter suggestions based on input
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
  
  const menuToggle = document.getElementById('mobile-menu');
  const navList = document.getElementById('nav-list');
  
  // Toggle the menu on click
  menuToggle.addEventListener('click', () => {
      navList.classList.toggle('active');
  });