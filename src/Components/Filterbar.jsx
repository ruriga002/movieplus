const genres = ["All", "Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Animation", "Thriller"];

function Filterbar({ genre, setGenre }) {
  return (
    <div className="filterbar">
      {genres.map((g) => (
        <button
          key={g}
          className={genre === (g === "All" ? "" : g) ? "active" : ""}
          onClick={() => setGenre(g === "All" ? "" : g)}
        >
          {g}
        </button>
      ))}
    </div>
  );
}

export default Filterbar;