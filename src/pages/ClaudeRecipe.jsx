import React from "react";
import RandomRecipe from "../components/RandomRecipe";
import { useFavorites } from "../hooks/useFavorites";
import { FiPlus } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import { GiCookingPot } from "react-icons/gi";

export default function ClaudeRecipe() {
  const [ingredients, setIngredients] = React.useState([]);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient").trim();
    if (newIngredient) {
      setIngredients((prev) => [...prev, newIngredient]);
    }
  }

  function handleRemoveIngredient(ingredientToRemove) {
    setIngredients((prev) =>
      prev.filter((item) => item !== ingredientToRemove),
    );
  }

  const ingredientsElements = ingredients.map(function (ingredient, index) {
    return (
      <div
        key={index}
        className="flex items-center justify-between py-2.5 px-4 bg-white border border-border rounded-xl w-[min(28rem,90vw)] shadow-[0_1px_4px_oklch(0_0_0/0.05)]"
      >
        <li className="font-medium text-sm list-none">{ingredient}</li>
        <button
          className="text-xs font-semibold text-red-400 hover:text-red-600 active:text-red-800 transition-colors cursor-pointer flex items-center gap-1"
          onClick={() => handleRemoveIngredient(ingredient)}
        >
          <MdOutlineClose className="text-base" /> Remove
        </button>
      </div>
    );
  });

  const [getRecipe, setGetRecipe] = React.useState(0);

  function handleGetRecipe() {
    setGetRecipe((prev) => prev + 1);
  }

  const { addFavorite } = useFavorites();
  const ready = ingredientsElements.length >= 3;

  return (
    <section className="flex flex-col items-center pb-12">
      {/* ── Page header ── */}
      <div className="w-full bg-white border-b border-gray-100 py-10 px-4 flex flex-col items-center gap-2 mb-6">
        <GiCookingPot className="text-5xl text-primary mb-1" />
        <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight">
          Claude Recipe
        </h1>
        <p className="text-sm text-gray-400 font-medium">
          Add your ingredients below and let Claude do the magic.
        </p>
      </div>

      {/* ── Steps ── */}
      <ol className="list-none flex flex-col md:flex-row gap-3 md:gap-6 text-sm text-gray-500 mb-8 px-4">
        {[
          `List your available ingredients`,
          `Add at least 3`,
          `Hit "Get a Recipe" and enjoy!`,
        ].map((step, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
              {i + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>

      {/* ── Input form ── */}
      <form action={addIngredient} className="flex flex-row gap-3 px-4 mb-6">
        <input
          type="text"
          name="ingredient"
          placeholder="e.g. chicken, garlic…"
          className="px-4 py-2.5 rounded-xl border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm w-56 md:w-72 transition"
        />
        <button className="inline-flex items-center gap-1.5 font-semibold text-[0.9rem] px-[1.4rem] py-[0.6rem] rounded-xl cursor-pointer transition-all duration-[180ms] bg-primary text-white hover:bg-primary-dark hover:-translate-y-px active:bg-[oklch(0.45_0.14_150)]">
          <FiPlus className="text-base" /> Add
        </button>
      </form>

      {/* ── Ingredient list ── */}
      {ingredients.length > 0 && (
        <ul className="flex flex-col items-center gap-2 w-full px-4 mb-6">
          {ingredientsElements}
        </ul>
      )}

      {/* ── CTA ── */}
      {ready && (
        <div className="w-full flex flex-col items-center gap-4 px-4">
          <div className="text-center">
            <h2 className="text-lg font-bold">Ready for a recipe?</h2>
            <p className="text-sm text-gray-400">
              Claude will pick something delicious from your list.
            </p>
          </div>
          <button
            onClick={handleGetRecipe}
            className="inline-flex items-center gap-2 font-semibold text-base px-8 py-3 rounded-xl cursor-pointer transition-all duration-[180ms] bg-primary text-white hover:bg-primary-dark hover:-translate-y-px active:bg-[oklch(0.45_0.14_150)]"
          >
            <GiCookingPot className="text-lg" /> Get a Recipe
          </button>

          {getRecipe >= 1 && (
            <div className="w-full max-w-3xl px-2">
              <RandomRecipe recipe={getRecipe} onFavorite={addFavorite} />
            </div>
          )}
        </div>
      )}
    </section>
  );
}
