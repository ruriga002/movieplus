import { useEffect, useState } from "react";
import Moviecard from "./Moviecard";

function Favourites({ currentUser }) {
  const [favouriteMovies, setFavouriteMovies] = useState([]);

  useEffect(() => {
    if (!currentUser) return;

    fetch(`http://localhost:3001/favourites?userId=${currentUser.id}`)
      .then((res) => res.json())
      .then((favs) => {
        const movieFetches = favs.map((fav) =>
          fetch(`http://localhost:3001/movies/${fav.movieId}`).then((res) => res.json())
        );
        Promise.all(movieFetches).then((movies) => setFavouriteMovies(movies));
      });
  }, [currentUser]);

  if (!currentUser) return <p className="message">Please log in to see your favourites.</p>;
  if (favouriteMovies.length === 0) return <p className="message">No favourites yet. Start adding some!</p>;

  return (
    <div className="home">
      <h2 style={{ marginBottom: "1rem" }}>Your Favourites</h2>
      <div className="movie-list">
        {favouriteMovies.map((movie) => (
          <Moviecard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Favourites;