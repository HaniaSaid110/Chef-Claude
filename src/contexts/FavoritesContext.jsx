import React from "react";
//we'll use 2 things: createContext, useContext

//createContext allows info to be accessible for "everyone" (the children)
const FavoritesContext = React.createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = React.useState([]);

  //a function that adds recipes to favorites array
  function addFavorite(recipe) {
    setFavorites((prevFavorites) => {
      // make sure it's not already there inside favourites array, then add it
      if (
        prevFavorites.find(function (item) {
          return item.title === recipe.title;
        })
      ) {
        return prevFavorites;
      }
      const newFavorites = [...prevFavorites, recipe];
      // console.log("Favorites after adding:", newFavorites);
      return newFavorites;
    });
    // console.log(favorites);
  }

  function removeFavorite(titleToRemove) {
    setFavorites((prevFavorites) =>
      prevFavorites.filter(function (item) {
        return item.title !== titleToRemove;
      })
    );
  }

  React.useEffect(() => {
    console.log("Favorites after change:", favorites);
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export { FavoritesContext };
