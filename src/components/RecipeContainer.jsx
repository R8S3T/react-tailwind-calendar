import React, { useState, useEffect } from 'react';

const RecipeContainer = () => {
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((response) => response.json())
        .then((data) => {
            setRecipe(data.meals[0]);
        })
        .catch((error) => console.error("Error:", error));
    }, []);

    return (
        <div className="bg-gray-200 p-4 mt-4 flex-grow">
        Recipe Container
        {recipe && <img src={recipe.strMealThumb} className="max-w-full h-auto" />}
        </div>
    );
};

export default RecipeContainer;