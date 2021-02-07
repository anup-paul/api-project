const inputCategories = document.getElementById('input-categories');

//connect api with input value
const foodCategories = () =>
{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputCategories.value}`)
    .then(response => response.json())
    .then(data => displayCategories(data.meals))
}


//this function display food categories
const displayCategories = categories =>
{
    console.log(categories);
    if(inputCategories.value != categories[0].strCategory)
    {
        alert("Enter valid food name and food category name should be start with capital latter");
    }
   else
   {
        const allFoodItem = document.getElementById('food-item-list');
        console.log(categories);
        categories.forEach(foodList => 
            {
                const foodItem = document.createElement('div');
                foodItem.className = "design-foodItem";
                foodItem.innerHTML = `
                <img class = "image-size" src = ${foodList.strMealThumb}>
                <h4>${foodList. strMeal}</h4>
                `
                allFoodItem.appendChild(foodItem);
                foodItem.addEventListener('click',function()
                {
                    foodDetails(foodList.strMeal);
                })
            });
   }
        
}


//this api call single food name
const foodDetails = (foodName) =>
{
   fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
   .then(response => response.json())
   .then(data => displayFoodDetails(data.meals));
}


//this function about food ingredient
const displayFoodDetails = food =>
{
    console.log(food);
   
    food.forEach(foodIngredient => {
        console.log(foodIngredient);
        const foodIngredientId = document.getElementById('food-ingredient');
        foodIngredientId.innerHTML = `
        <img class = "ingredient-image-size" src = ${foodIngredient.strMealThumb}>
        <h2>${foodIngredient.strMeal}</h2>
        <h3>Food Ingredient : </h3>
        <h5>${foodIngredient.strIngredient1}</h5>
        <h5>${foodIngredient.strIngredient2}</h5>
        <h5>${foodIngredient.strIngredient3}</h5>
        <h5>${foodIngredient.strIngredient4}</h5>
        <h5>${foodIngredient.strIngredient5}</h5>
        <h5>${foodIngredient.strIngredient6}</h5>
        `

        const foodContainer = document.getElementById('food-container');
        foodContainer.style.display = 'none';
    });
}



