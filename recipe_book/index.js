const API_KEY = "af45e9c3d5bb4629a2797430e2c84cce";
const recipeListEl = document.getElementById("recipe-list");

function displayRecipes(recipes) {
    recipeListEl.innerHTML = "";
    recipes.forEach(element => {
        const recipeItemEl = document.createElement("li");
        recipeItemEl.classList.add("recipe-item")

        const recipeImageEl = document.createElement("img");
        recipeImageEl.src = element.image;
        recipeImageEl.alt = "element image";

        const recipeTitleEl = document.createElement("h2");
        recipeTitleEl.innerText = element.title;

        const recipeIngredientsEl = document.createElement("p")
        recipeIngredientsEl.innerHTML = `
        <strong>Ingredients: </strong> ${element.extendedIngredients
            .map((ingredient) => ingredient.original)
            .join(", ")}
        `;

        const recipeLinkEl = document.createElement("a");
        recipeLinkEl.href = element.sourceUrl;
        recipeLinkEl.innerText = "View Recipe";
       
    
        recipeItemEl.appendChild(recipeImageEl);
        recipeItemEl.appendChild(recipeTitleEl);
        recipeItemEl.appendChild(recipeIngredientsEl);
        recipeItemEl.appendChild(recipeLinkEl);
        recipeListEl.appendChild(recipeItemEl);
    });
}

async function getRecipes() {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)
    const data = await response.json()
    return data.recipes
}

async function init() {
    const recipes = await getRecipes()
    console.log(recipes);
    displayRecipes(recipes);
}

init();