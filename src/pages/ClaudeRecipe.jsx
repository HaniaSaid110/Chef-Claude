import React from "react";
import RandomRecipe from "../components/RandomRecipe";
import { useFavorites } from "../hooks/useFavorites";

export default function ClaudeRecipe() {
  const [ingredients, setIngredients] = React.useState([]);

  function addIngredient(formData) {
    const newIngredient = formData.get(`ingredient`);
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    // console.log(ingredients);
  }

  function handleRemoveIngredient(ingredienttoRemove) {
    setIngredients((prevIngredients) =>
      prevIngredients.filter(function (item) {
        return item !== ingredienttoRemove;
      })
    );
  }
  const ingredientsElements = ingredients.map(function (ingredient, index) {
    return (
      <>
        <div
          className="flex flex-row justify-between w-sm md:w-md p-2 border-b border-b-primary"
          key={index}
        >
          <li>{ingredient}</li>
          <button
            className="bg-red-400 hover:bg-red-600 active:bg-red-800 rounded-md cursor-pointer px-2 py-1 text-secondary"
            onClick={() => handleRemoveIngredient(ingredient)}
          >
            Remove
          </button>
        </div>
      </>
    );
  });

  const [getRecipe, setGetRecipe] = React.useState(0);

  function handleGetRecipe() {
    setGetRecipe((prevGetRecipe) => prevGetRecipe + 1);
  }

  const { addFavorite } = useFavorites();

  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h2 className="text-lg md:text-3xl font-semibold p-8">How it works:</h2>
        <ul className="list-decimal list-inside text-lg text-center">
          <li>Write down your available ingredients</li>
          <li>You must list more than 3 ingredients</li>
          <li>
            Click Get a Recipe to get a recipe of Chef Claude's recommendations
          </li>
        </ul>
      </div>
      <form action={addIngredient} className="flex flex-row gap-4 p-6">
        <input
          type="text"
          name="ingredient"
          placeholder="e.g. chicken"
          className="px-5 py-2 rounded-lg border border-primary focus:outline-none"
        />
        <button className="cursor-pointer rounded-lg px-4 py-2 bg-primary text-secondary hover:bg-green-600 active:bg-green-800">
          + Add Ingredient
        </button>
      </form>
      <ul className="w-full flex flex-col items-center">
        {ingredientsElements}
      </ul>
      {ingredientsElements.length >= 3 && (
        <div>
          <div className="flex flex-col p-8 gap-6">
            <div className="flex flex-col items-center">
              <h2>Ready for a Recipe?</h2>
              <p>Generate a Recipe from your list of ingredients.</p>
            </div>
            <button
              onClick={handleGetRecipe}
              className="cursor-pointer rounded-lg self-center px-4 py-2 bg-primary text-secondary hover:bg-green-600 active:bg-green-800"
            >
              Get a Recipe
            </button>
          </div>
          <div>
            {getRecipe >= 1 ? (
              <div className="p-3">
                <RandomRecipe recipe={getRecipe} onFavorite={addFavorite} />
              </div>
            ) : null}
          </div>
        </div>
      )}
    </section>
  );
}

// <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
//   <h1 className="text-4xl font-bold mb-6">Claude Recipe Page</h1>
//   <p className="text-lg text-gray-700">
//     This is where the Claude recipe content will go.
//   </p>
// </div>
