import React from "react";

export default function RandomRecipe(props) {
  const ingredients = [
    `chicken`,
    `meat`,
    `fish`,
    `pasta`,
    `rice`,
    `cheese`,
    `cream`,
    `tomato`,
    `pepper`,
    `garlic`,
    `potato`,
    `chocolate`,
    `flour`,
  ];
  // const [selectedRecipe, setSelectedRecipe] = React.useState(null);
  const [recipeData, setRecipeData] = React.useState(null);

  const [loading, setLoading] = React.useState(false);

  // const query = selectedRecipe;

  React.useEffect(
    function () {
      const random =
        ingredients[Math.floor(Math.random() * ingredients.length)];
      // setSelectedRecipe(random);

      setLoading(true);

      fetch(`https://api.api-ninjas.com/v2/recipe?title=${random}`, {
        method: "GET",
        headers: {
          "X-Api-Key": "HDzWhEyW5wvshMFMeDvt4w==1Zc0ApcLRxjYmLMx",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) throw new Error("Network response was not ok");
          return response.json();
        })
        .then((data) => {
          // console.log(data);
          setRecipeData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    [props.recipe]
  );

  // console.log(Math.floor(Math.random() * ingredients.length));

  function handleFavorites() {
    if (props.onFavorite && recipeData && recipeData[0]) {
      props.onFavorite(recipeData[0]);
    }
  }

  return (
    <>
      {/* {selectedRecipe} */}
      <section className="container">
        {loading ? (
          <div className="flex flex-col items-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-primary border-solid"></div>
            <p className="mt-4 text-primary font-semibold">Loading recipe...</p>
          </div>
        ) : recipeData ? (
          <div className="flex flex-col px-4 md:px-30">
            <button
              className="rounded-lg cursor-pointer self-end px-4 py-2 bg-primary text-secondary hover:bg-green-600 active:bg-green-800"
              onClick={handleFavorites}
            >
              Add to Favorites
            </button>
            <div>
              <div className="py-2">
                <h2 className="font-bold text-2xl py-6">Suggested Recipe:</h2>
                <p>
                  Based on your available ingredients I would recommend making
                  {` `}
                  <span className="font-semibold text-primary">
                    {recipeData[0].title}
                  </span>
                  . Here's the recipe:
                </p>
              </div>
              <div className="py-2">
                <h2 className="font-semibold py-2">Ingredients:</h2>
                <p>{recipeData[0].ingredients}</p>
              </div>
              <div className="py-2">
                <h2 className="font-semibold py-2">Servings:</h2>
                <p>{recipeData[0].servings}</p>
              </div>
              <div className="py-2">
                <h2 className="font-semibold py-2">Instructions:</h2>
                <p>{recipeData[0].instructions}</p>
              </div>
            </div>
          </div>
        ) : null}
      </section>
    </>
  );
}
