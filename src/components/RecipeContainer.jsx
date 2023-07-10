// Title for recipe still needs to be added

import React, { useState, useEffect } from 'react';

const RecipeContainer = () => {
    const [recipe, setRecipe] = useState(null);
    const [instructions, setInstructions] = useState('');

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((response) => response.json())
        .then((data) => {
            setRecipe(data.meals[0]);
            setInstructions(data.meals[0].strInstructions);
        })
        .catch((error) => console.error('Error:', error));
    }, []);

    return (
        <div>
        <div className="flex">
            {recipe && (
            <img
                src={recipe.strMealThumb}
                className="max-w-full h-auto"
                style={{ width: '250px', height: '250px' }}
                alt={recipe.strMeal}
            />
            )}
            <div className="ml-4">
            {instructions && (
                <>
                <h2 className="text-xl font-bold">Cooking Instructions:</h2>
                <p className="line-clamp-6">{instructions}</p>
                {recipe.strSource && (
                    <a href={recipe.strSource} target='_blank' rel='noopener noreferrerer' className='mt-2'>
                        <h3 className="mt-2">Click here for full instructions...</h3>
                    </a>
                )}
                </>
            )}
            </div>
        </div>
        </div>
    );
};

export default RecipeContainer;
