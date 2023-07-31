import React, { useState, useEffect } from 'react';

const RecipeContainer = () => {
    const [recipe, setRecipe] = useState(null);
    const [instructions, setInstructions] = useState('');

    useEffect(() => {
        const preference = JSON.parse(localStorage.getItem('preference') || '{}');
        let url = 'https://www.themealdb.com/api/json/v1/1/random.php';

        if (preference.category) {
            url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${preference.category}`;
        } else if (preference.area) {
            url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${preference.area}`;
        } else if (preference.ingredient) {
            url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${preference.ingredient}`;
        }

        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if (data && data.meals && data.meals.length > 0) {
                // Select a random meal from the returned list
                const randomMealIndex = Math.floor(Math.random() * data.meals.length);
                const mealId = data.meals[randomMealIndex].idMeal;
                fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
                .then((response) => response.json())
                .then((data) => {
                    if (data && data.meals && data.meals.length > 0) {
                        setRecipe(data.meals[0]);
                        setInstructions(data.meals[0].strInstructions);
                    }
                });
            }
        })
        .catch((error) => console.error('Error:', error));
    }, []);

    if (!recipe) {
        return <div>Loading...</div>
    }
    return (
        <div className="h-full md:max-h-[500px] overflow-auto bg-my-grey-2 flex flex-row sm:flex-col md:flex-row p-4">
            <img
                src={recipe.strMealThumb}
                className="w-1/3 sm:w-full md:w-1/2 object-cover"
                alt={recipe.strMeal}
            />
            <div className="ml-4 mt-4 sm:mt-0 sm:ml-0 sm:w-full w-2/3 md:w-1/2 md:ml-4">
                <h2 className="text-sm sm:text-md md:text-xl font-bold">{recipe.strMeal}</h2>
                <p className="text-sm sm:text-lg md:text-lg line-clamp-2">{instructions}</p>
                {recipe.strSource && (
                    <a href={recipe.strSource} target='_blank' rel='noopener noreferrerer' className='mt-2'>
                        <h3 className="text-xs sm:text-sm md:text-lg mt-2">Full instructions...</h3>
                    </a>
                )}
            </div>
        </div>
    );
};

export default RecipeContainer;



