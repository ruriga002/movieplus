import { useState } from "react"; //useState is a hook that allows us to add state to our functional components. It returns an array with two elements: the current state value and a function to update that value. In this case, we are using useState to manage the search query and the selected genre in our Home component.
import SearchBar from "./SearchBar"; // this component renders the search input field and handles the search query state
import Filterbar from "./Filterbar"; // this component renders the genre filter buttons and handles the genre selection logic.
import Movielist from "./Movielist"; // this component renders the list of movies based on the search query and selected genre.

function Home() { // use function component to define the home component, which willl manage the state for the search query and selected genre, and render the SearchBar, Filterbar and movie list components
    const [query, setQuery] = useState(""); //const [query, setQuery] = useState("") initializes the query state variable to an empty string and provides a function setQuery to update it. This state will be used to store the user's search input from the SearchBar component.
    const [genre, setGenre] = useState(""); //initialize it two times to an empty string, which means that by default, no genre filter is applied. The setGenre function will be used to update the genre state when a user selects a genre from the Filterbar component.

    return ( // return a div with a class name of home that contains the SearchBar, Filterbar and Movielist components. We pass the query and setQuery as props to the SearchBar component, and the genre and setGenre as props to the Filterbar component. The Movielist component receives both the query and genre as props to filter the movie list accordingly.
        <div className="home">
            <SearchBar query={query} setQuery={setQuery} />
            <Filterbar genre={genre} setGenre={setGenre} />
            <Movielist query={query} genre={genre} />
        </div>  

    )
}


export default Home;