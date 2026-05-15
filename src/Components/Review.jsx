function Review({ review }) {
  const stars = "⭐".repeat(review.rating);

  return (
    <div className="review-card">
      <div className="review-header">
        <span className="review-avatar">{review.username[0].toUpperCase()}</span>
        <span className="review-username">{review.username}</span>
        <span className="review-date">{review.date}</span>
      </div>
      <p className="review-stars">{stars}</p>
      <p className="review-comment">{review.comment}</p>
    </div>
  );
}

export default Review;