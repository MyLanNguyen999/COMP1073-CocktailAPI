// * source: https://www.thecocktaildb.com/api.php
// * Base URL for Track Search API
const baseURL = 'https://www.thecocktaildb.com/api/json/v1';
// * API Key
const token = '1';
let url;
// * grab the form values
const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const section = document.querySelector('section');

// * add event listener for the button
searchForm.addEventListener("submit", fetchResults);


// * create function fetchResults
function fetchResults(event) {
    console.log("form submitted");
    event.preventDefault();
    // * example of url for API call https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
    url = `${baseURL}/${token}/search.php?s=${searchTerm.value}`;
    console.log(url);

    // * display the result
    fetch(url).then(result => {
        return result.json();
    }). then(json => {
        displayResults(json);
    })
}

// * create function displayResults
function displayResults(json) {
    console.log(json);

    // * clear out the old results…
    while (section.firstChild) {
            section.removeChild(section.firstChild);
    };

    let drinkRecipe = json.drinks;
    
    if (drinkRecipe.length === 0) {
        const para = document.createElement('p');
        para.textContent = 'No results returned.'
        section.appendChild(para);
    } else {
        for(let i = 0; i < drinkRecipe.length; i++) {
            const article = document.createElement('article');
            const heading = document.createElement('h2');
            const img = document.createElement('img');
            const ingredient = document. createElement('h4');
            const instruction = document.createElement('p');
            
            const ingredient1 = document.createElement('li');
            const ingredient2 = document.createElement('li');
            const ingredient3 = document.createElement('li');
            const ingredient4 = document.createElement('li');
            const current = drinkRecipe[i];
            console.log(current);

            // * look at the output of API
            heading.textContent = drinkRecipe[i].strDrink;
            ingredient.textContent = "Ingredient";
            instruction.textContent = drinkRecipe[i].strInstructions;
            ingredient1.textContent = drinkRecipe[i].strIngredient1;
            ingredient2.textContent = drinkRecipe[i].strIngredient2;
            ingredient3.textContent = drinkRecipe[i].strIngredient3;
            ingredient4.textContent = drinkRecipe[i].strIngredient4;
            img.src = drinkRecipe[i].strDrinkThumb;

            // * attach the content from API to the artice and section in html
            article.appendChild(heading);
            
            article.appendChild(instruction);
            article.appendChild(ingredient);
            article.appendChild(ingredient1);
            article.appendChild(ingredient2);
            article.appendChild(ingredient3);
            article.appendChild(ingredient4);
            article.appendChild(img);
            console.log(article);

            // * inject content to section element
            section.appendChild(article);
        };
    };
        
};