function StarRating({ rating, setRating }) {
    // function to handle when a star is clicked
    return (
        <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className={star <= rating ? "star filled" : "star"}
                    onClick={() => setRating(star)}>★</span>
            ))}
        </div>
    );
}

export default StarRating;