import { useEffect, useState } from "react";
import Moviecard from "./Moviecard";

function Movielist({ query, genre }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://movieplus-31vd.onrender.com/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      });
  }, []);

  const filtered = movies.filter((movie) => {
    const matchQuery = movie.title.toLowerCase().includes(query.toLowerCase());
    const matchGenre = genre === "" || movie.genre === genre;
    return matchQuery && matchGenre;
  });

  if (loading) return <p className="message">Loading movies...</p>;
  if (filtered.length === 0) return <p className="message">No movies found.</p>;

  return (
    <div className="movie-list">
      {filtered.map((movie) => (
        <Moviecard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Movielist;