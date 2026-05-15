import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Review from "./Review";
import StarRating from "./StarRating";

function Moviedetails({ currentUser }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(0);
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    fetch(`https://movieplus-31vd.onrender.com/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));

    fetch(`https://movieplus-31vd.onrender.com/reviews?movieId=${id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));

    if (currentUser) {
      fetch(`https://movieplus-31vd.onrender.com/favourites?userId=${currentUser.id}&movieId=${id}`)
        .then((res) => res.json())
        .then((data) => setIsFavourite(data.length > 0));
    }
  }, [id, currentUser]);

  const handleAddReview = () => {
    if (!currentUser) return alert("Please log in to leave a review.");
    if (!newComment || newRating === 0) return alert("Add a comment and rating.");

    const review = {
      movieId: parseInt(id),
      userId: currentUser.id,
      username: currentUser.username,
      rating: newRating,
      comment: newComment,
      date: new Date().toISOString().split("T")[0],
    };

    fetch("https://movieplus-31vd.onrender.com/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((saved) => {
        setReviews([...reviews, saved]);
        setNewComment("");
        setNewRating(0);
      });
  };

  const handleToggleFavourite = () => {
    if (!currentUser) return alert("Please log in to add favourites.");

    if (isFavourite) {
      fetch(`https://movieplus-31vd.onrender.com/favourites?userId=${currentUser.id}&movieId=${id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            fetch(`https://movieplus-31vd.onrender.com/favourites/${data[0].id}`, {
              method: "DELETE",
            }).then(() => setIsFavourite(false));
          }
        });
    } else {
      fetch("https://movieplus-31vd.onrender.com/favourites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: currentUser.id, movieId: parseInt(id) }),
      }).then(() => setIsFavourite(true));
    }
  };

  if (!movie) return <p className="message">Loading...</p>;

  return (
    <div className="movie-details">
      <button onClick={() => navigate(-1)}>← Back</button>

      <div className="details-card">
        <img src={movie.poster} alt={movie.title} />
        <div className="details-info">
          <h1>{movie.title}</h1>
          <p><strong>Year:</strong> {movie.year}</p>
          <p><strong>Genre:</strong> {movie.genre}</p>
          <p><strong>Director:</strong> {movie.director}</p>
          <p><strong>Actors:</strong> {movie.actors}</p>
          <p><strong>Runtime:</strong> {movie.runtime}</p>
          <p><strong>Rating:</strong>  {movie.rating} / 10</p>
          <p>{movie.plot}</p>
          <button className={`fav-btn ${isFavourite ? "fav-active" : ""}`} onClick={handleToggleFavourite}>
            {isFavourite ? " Remove from Favourites" : "Add to Favourites"}
          </button>
        </div>
      </div>

      <div className="reviews-section">
        <h2>Reviews ({reviews.length})</h2>
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}

        {currentUser && (
          <div className="add-review">
            <h3>Leave a Review</h3>
            <StarRating rating={newRating} setRating={setNewRating} />
            <textarea
              placeholder="Write your review..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button onClick={handleAddReview}>Submit Review</button>
          </div>
        )}

        {!currentUser && <p className="message">Log in to leave a review.</p>}
      </div>
    </div>
  );
}

export default Moviedetails;