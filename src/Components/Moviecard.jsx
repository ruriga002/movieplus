import {link} from 'react-router-dom' // import the Link component from react-router-dom to enable navigation to the movie details page when a user clicks on a movie card. The Link component allows us to create links that navigate to different routes in our application without causing a full page reload, providing a smoother user experience. In this case, we will use the Link component to wrap the movie card and navigate to a route that includes the movie's ID when clicked.

function MovieCard({movie}) { // use a function component to define the MovieCard component, which will receive a movie object as a prop and render the movie's poster, title, year, genre and rating. The movie object is expected to have properties such as id, poster, title, year, genre and rating.
    return (
        <Link to={`/movie/${movie.id}`}> // wrap the movie card in a Link component that navigates to a route with the movie's ID when clicked. This allows users to click on a movie card and be taken to a detailed view of that movie.
            <div className="movie-card"> // return a div with a class name of movie-card that contains the movie's poster, title, year, genre and rating. The poster is displayed using an img tag with the src attribute set to the movie's poster URL and the alt attribute set to the movie's title. The title is displayed in an h3 tag, while the year and genre are displayed in a p tag. The rating is also displayed in a separate p tag.
                <img src={movie.poster} alt={movie.title} /> // display the movie's poster using an img tag. The src attribute is set to the movie's poster URL, and the alt attribute is set to the movie's title for accessibility purposes.
                <h3>{movie.title}</h3>
                <p>{movie.year}. {movie.genre}</p>

                <p>{movie.rating}</p>
            </div>
        </Link>
    );
}
export default MovieCard;