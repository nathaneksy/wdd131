const recipes = [
    {
      name: "Apple Crisp",
      description:
        "This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream.",
      tags: ["dessert", "fall", "apple"],
      ingredients: ["apples", "sugar", "butter", "oats"],
      rating: 4,
      image: "images/apple-crisp.jpg",
    },
    {
      name: "Chicken Soup",
      description:
        "A comforting soup filled with tender chicken and fresh vegetables, perfect for cold weather.",
      tags: ["soup", "comfort food", "chicken"],
      ingredients: ["chicken", "carrots", "onions", "celery"],
      rating: 5,
      image: "images/chicken-curry.webp",
    },

  ];
  
 
  function random(max) {
    return Math.floor(Math.random() * max);
  }

  function getRandomRecipe() {
    return recipes[random(recipes.length)];
  }
  
  function createRecipeCard(recipe) {
    return `
      <section class="recipe-card">
        <img class="recipe-image" src="${recipe.image}" alt="${recipe.name}">
        <div class="recipe-info">
          <span class="recipe-category">${recipe.tags[0]}</span>
          <h2 class="recipe-title">${recipe.name}</h2>
          <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
            ${Array.from({ length: 5 }, (_, i) =>
              i < recipe.rating
                ? '<span aria-hidden="true" class="icon-star">⭐</span>'
                : '<span aria-hidden="true" class="icon-star-empty">☆</span>'
            ).join("")}
          </span>
          <p class="recipe-description">${recipe.description}</p>
        </div>
      </section>`;
  }
  
  function renderRecipes(recipeList) {
    const mainContent = document.querySelector("main");
    mainContent.innerHTML = recipeList.map(createRecipeCard).join("");
  }
  
  function filterRecipes(query) {
    const lowerQuery = query.toLowerCase();
    return recipes.filter(
      (recipe) =>
        recipe.name.toLowerCase().includes(lowerQuery) ||
        recipe.description.toLowerCase().includes(lowerQuery) ||
        recipe.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(lowerQuery)
        )
    );
  }
  

  function handleSearch() {
    const searchInput = document.querySelector(".search-bar input").value;
    const filteredRecipes = filterRecipes(searchInput);
    renderRecipes(filteredRecipes);
  }
  

  function init() {
    const randomRecipe = getRandomRecipe();
    renderRecipes([randomRecipe]);
  
    const searchButton = document.querySelector(".search-bar button");
    searchButton.addEventListener("click", handleSearch);
  }

  init();
  