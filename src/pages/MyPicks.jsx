import React from "react";
import Card from "../components/Card";
import { useFavorites } from "../hooks/useFavorites";
import { MdOutlineClose } from "react-icons/md";

export default function MyPicks() {
  const { favorites } = useFavorites();
  const { removeFavorite } = useFavorites();

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
      <section className="py-4 text-center">
        {favoriteElements.length > 0 ? (
          <div className="grid grid-cols-4 gap-4 px-4 md:px-30">
            {favoriteElements}
          </div>
        ) : (
          <p className="text-2xl font-semibold">
            You have no favorited recipes
          </p>
        )}
        {selectedRecipe && (
          <>
            <div
              className="fixed inset-0 flex bg-black items-center justify-center z-10"
              style={{ opacity: 0.5 }}
            ></div>
            <div className="fixed inset-0 flex items-center justify-center z-20">
              <div className="flex flex-col bg-white rounded-xl p-6 m-4 max-w-lg w-full overflow-y-auto max-h-full">
                <button
                  className="text-xl self-end"
                  onClick={() => setSelectedRecipe(null)}
                >
                  <MdOutlineClose className="text-primary text-2xl cursor-pointer hover:text-green-600 active:text-green-800" />
                </button>
                <div>
                  <h2 className="text-2xl font-bold my-6">
                    {selectedRecipe.title}
                  </h2>
                  <div className="mb-3">
                    <h2 className="text-lg font-semibold">Ingredients:</h2>
                    <p>{selectedRecipe.ingredients}</p>
                  </div>
                  <div className="mb-2">
                    <h2 className="text-lg font-semibold">Servings:</h2>
                    <p>{selectedRecipe.servings}</p>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">Instructions:</h2>
                    <p>{selectedRecipe.instructions}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
}
