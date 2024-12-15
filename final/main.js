document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search');
  const filterButtons = document.querySelectorAll('#filter-buttons button');
  const projectCards = document.querySelectorAll('.project-card');

  searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.toLowerCase();
    let noResultsFound = true;
    projectCards.forEach(card => {
      const title = card.querySelector('h2').textContent.toLowerCase();
      const description = card.querySelector('p').textContent.toLowerCase();
      if (title.includes(searchValue) || description.includes(searchValue)) {
        card.style.display = 'block';
        noResultsFound = false;
      } else {
        card.style.display = 'none';
      }
    });

    const noResultsMessage = document.getElementById('no-results-message');
    if (noResultsFound) {
      noResultsMessage.style.display = 'block';
    } else {
      noResultsMessage.style.display = 'none';
    }
  });

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
