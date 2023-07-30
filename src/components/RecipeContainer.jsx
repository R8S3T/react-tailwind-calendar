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
        <div className="h-full md:max-h-[500px] overflow-auto bg-my-grey-2 flex flex-col md:flex-row p-4">
            {recipe && (
                <img
                    src={recipe.strMealThumb}
                    className="w-full md:w-1/2 object-cover h-full md:h-auto"
                    alt={recipe.strMeal}
                />
            )}
            <div className="ml-4 mt-4 md:mt-0 md:ml-4 w-full md:w-1/2">
                {instructions && (
                    <>
                        <h2 className="md:text-lg font-bold">{recipe.strMeal}</h2>
                        <p className="md:text-sm line-clamp-2">{instructions}</p>
                        {recipe.strSource && (
                            <a href={recipe.strSource} target='_blank' rel='noopener noreferrerer' className='mt-2'>
                                <h3 className="mt-2">Full instructions...</h3>
                            </a>
                        )}
                    </>
                )}
            </div>
        </div>
    );
    
};

export default RecipeContainer;
