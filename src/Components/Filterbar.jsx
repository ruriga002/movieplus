import React from "react";                            
 const genres = ["All", "Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Animation", "Thriller"];
// genres is an array of strings that holds all the available genre options
// "All" is included to allow users to reset the filter and see all movies

function Filterbar({ genre, setGenre }) {
// Filterbar is a function component that receives two props
// genre - the currently selected genre from the Home component state
// setGenre - a function to update the selected genre in the Home component

  return (
    <div className="filterbar">
         // render a div with a class of filterbar which will be used to style the container in App.css
      {genres.map((g) => (
        // loop through the genres array and render a button for each genre
        // g represents each individual genre string on each iteration

        <button
          key={g}  // key is required by React when rendering lists to uniquely identify each button
          className={genre === (g === "All" ? "" : g) ? "active" : ""}
           // if g is "All" we compare genre to "" (empty string) since "All" means no filter
           // if g is any other genre we compare genre to that genre string
          // if they match we add the "active" class to highlight the selected button

          onClick={() => setGenre(g === "All" ? "" : g)}
          // when a button is clicked we call setGenre to update the genre state in Home
          // if "All" is clicked we set genre to "" to remove the filter
         // otherwise we set genre to the clicked genre string
         >
        
          {g}  // display the genre name as the button text
        </button>
      ))}
    </div>
  );
}

export default Filterbar;