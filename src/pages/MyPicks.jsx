import React from "react";
import Card from "../components/Card";
import { useFavorites } from "../hooks/useFavorites";
import { MdOutlineClose, MdOutlineFavorite } from "react-icons/md";
import { GiMeal, GiForkKnifeSpoon } from "react-icons/gi";
import { FaListUl } from "react-icons/fa";

export default function MyPicks() {
  const { favorites, removeFavorite } = useFavorites();
  const [selectedRecipe, setSelectedRecipe] = React.useState(null);

  const favoriteElements = favorites.map(function (item, index) {
    return (
      <Card
        key={index}
        recipeTitle={item.title}
        unfavorite={() => removeFavorite(item.title)}
        onShow={() => setSelectedRecipe(item)}
      />
    );
  });

  return (
    <>
      {/* ── Page header ── */}
      <div className="w-full bg-white border-b border-gray-100 py-10 px-4 flex flex-col items-center gap-2 mb-6">
        <MdOutlineFavorite className="text-5xl text-primary mb-1" />
        <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight">
          My Picks
        </h1>
        <p className="text-sm text-gray-400 font-medium">
          Your saved recipes, all in one place.
        </p>
      </div>

      <section className="w-full px-4 md:px-8 pb-12">
        {favoriteElements.length > 0 ? (
          <div className="container mx-auto grid grid-cols-4 gap-4">
            {favoriteElements}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 py-20 text-gray-300">
            <p className="text-xl font-semibold text-gray-400">
              No saved recipes yet
            </p>
            <p className="text-sm text-gray-300">
              Go to Claude Recipe and save something delicious!
            </p>
          </div>
        )}
      </section>

      {/* ── Recipe modal ── */}
      {selectedRecipe && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setSelectedRecipe(null)}
          />
          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-card shadow-card w-full max-w-lg max-h-[85vh] overflow-y-auto relative border border-border p-8">
              <button
                className="absolute top-4 right-4 text-gray-300 hover:text-gray-600 transition-colors cursor-pointer"
                onClick={() => setSelectedRecipe(null)}
              >
                <MdOutlineClose className="text-2xl" />
              </button>

              {/* Header */}
              <div className="flex items-start gap-3 pr-8 mb-4">
                <GiMeal className="text-primary text-3xl flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-1">
                    Saved Recipe
                  </p>
                  <h2 className="text-[clamp(1.2rem,2.5vw,1.7rem)] font-extrabold tracking-tight">
                    {selectedRecipe.title}
                  </h2>
                </div>
              </div>

              {/* Servings badge */}
              <div className="inline-flex items-center gap-2 bg-[oklch(0.95_0.03_150)] text-primary-dark font-semibold text-sm px-[0.9rem] py-[0.4rem] rounded-full mb-4">
                <GiForkKnifeSpoon className="text-primary" />
                <span>
                  <strong>Servings:</strong> {selectedRecipe.servings}
                </span>
              </div>

              <div className="h-px bg-border my-6" />

              {/* Ingredients */}
              <div className="mb-2">
                <div className="flex items-center gap-2 text-[1.05rem] font-bold mb-3">
                  <FaListUl className="text-primary" />
                  <h3>Ingredients</h3>
                </div>
                <p className="text-[0.97rem] text-muted leading-7 bg-surface rounded-xl p-4 border border-border">
                  {selectedRecipe.ingredients}
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
                  {selectedRecipe.instructions}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
