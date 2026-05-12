import React from "react";
import { MdOutlineFavorite } from "react-icons/md";
import { GiMeal, GiForkKnifeSpoon } from "react-icons/gi";
import { FaListUl } from "react-icons/fa";

const API_KEY = import.meta.env.VITE_API_NINJA_KEY;

export default function RandomRecipe(props) {
  const ingredients = [
    "chicken", "meat", "fish", "pasta", "rice",
    "cheese", "cream", "tomato", "pepper", "garlic",
    "potato", "chocolate", "flour",
  ];

  const [recipeData, setRecipeData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [added, setAdded] = React.useState(false);

  React.useEffect(function () {
    const random = ingredients[Math.floor(Math.random() * ingredients.length)];
    setLoading(true);
    setAdded(false);

    fetch(`https://api.api-ninjas.com/v2/recipe?title=${random}`, {
      method: "GET",
      headers: {
        "X-Api-Key": API_KEY,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        setRecipeData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, [props.recipe]);

  function handleFavorites() {
    if (props.onFavorite && recipeData && recipeData[0]) {
      props.onFavorite(recipeData[0]);
      setAdded(true);
    }
  }

  return (
    <section className="w-full">
      {loading ? (
        <div className="flex flex-col items-center gap-4 py-16">
          <div className="animate-spin rounded-full h-14 w-14 border-4 border-primary border-t-transparent" />
          <p className="text-primary font-semibold text-lg tracking-wide">Cooking up a recipe…</p>
        </div>
      ) : recipeData && recipeData[0] ? (
        <div className="bg-white rounded-card shadow-card p-8 my-6 mx-auto max-w-4xl border border-border">
          {/* Header */}
          <div className="flex items-start justify-between flex-wrap gap-4 mb-5">
            <div className="flex items-center gap-3">
              <GiMeal className="text-primary text-3xl flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-widest mb-1">Suggested Recipe</p>
                <h2 className="text-[clamp(1.2rem,2.5vw,1.7rem)] font-extrabold tracking-tight">
                  {recipeData[0].title}
                </h2>
              </div>
            </div>
            <button
              id="add-to-favorites-btn"
              onClick={handleFavorites}
              disabled={added}
              className={`inline-flex items-center gap-2 px-[1.1rem] py-[0.55rem] rounded-xl font-semibold text-sm transition-all duration-[180ms] whitespace-nowrap ${
                added
                  ? "bg-[oklch(0.91_0.04_150)] text-primary-dark cursor-default"
                  : "bg-primary text-white cursor-pointer hover:bg-primary-dark hover:-translate-y-px hover:shadow-card"
              }`}
            >
              <MdOutlineFavorite className="text-lg" />
              {added ? "Saved!" : "Save to Favorites"}
            </button>
          </div>

          <p className="text-base text-muted leading-[1.7] mb-4">
            Based on your available ingredients, I recommend making{" "}
            <span className="text-primary font-semibold">{recipeData[0].title}</span>. Here's everything you need:
          </p>

          {/* Servings badge */}
          <div className="inline-flex items-center gap-2 bg-[oklch(0.95_0.03_150)] text-primary-dark font-semibold text-sm px-[0.9rem] py-[0.4rem] rounded-full mb-6">
            <GiForkKnifeSpoon className="text-primary" />
            <span><strong>Servings:</strong> {recipeData[0].servings}</span>
          </div>

          <div className="h-px bg-border my-6" />

          {/* Ingredients */}
          <div className="mb-2">
            <div className="flex items-center gap-2 text-[1.05rem] font-bold mb-3">
              <FaListUl className="text-primary" />
              <h3>Ingredients</h3>
            </div>
            <p className="text-[0.97rem] text-muted leading-7 bg-surface rounded-xl p-4 border border-border">
              {recipeData[0].ingredients}
            </p>
          </div>

          <div className="h-px bg-border my-6" />

          {/* Instructions */}
          <div className="mb-2">
            <div className="flex items-center gap-2 text-[1.05rem] font-bold mb-3">
              <GiMeal className="text-primary" />
              <h3>Instructions</h3>
            </div>
            <p className="text-[0.97rem] text-muted leading-7 bg-surface rounded-xl p-4 border border-border whitespace-pre-line">
              {recipeData[0].instructions}
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
