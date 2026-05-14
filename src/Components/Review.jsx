const stars = "⭐".repeat(review.rating);
// "⭐".repeat(n) repeats the star emoji n times
// so if review.rating is 4, stars becomes "⭐⭐⭐⭐"
// this gives us a visual star representation of the rating number

return (
    <div className="review-card">
    // wrapper div for the entire review card, styled in App.css

        <div className="review-header">
        // div that holds the avatar, username and date in a row

            <span className="review-avatar">{review.username[0].toUpperCase()}</span>
            // review.username[0] gets the first character of the username
            // .toUpperCase() converts it to uppercase
            // so if username is "john" the avatar shows "J"
            // this acts as a simple profile picture placeholder

            <span className="review-username">{review.username}</span>
            // displays the full username of the reviewer

            <span className="review-date">{review.date}</span>
            // displays the date the review was submitted

        </div>

        <p className="review-stars">{stars}</p>
        // renders the repeated star emojis we created above
        // e.g "⭐⭐⭐⭐" for a rating of 4

        <p className="review-comment">{review.comment}</p>
        // displays the written review text from the reviewer

    </div>
);

export default Review;
// exports the Review component so it can be imported in MovieDetails or wherever reviews are displayed