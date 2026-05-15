import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <div className="card-info">
        <h3>{movie.title}</h3>
        <p>{movie.year} • {movie.genre}</p>
        <p> {movie.rating}</p>
      </div>
    </Link>
  );
}

export default MovieCard;