function Searchbar({ query, setQuery}) {
    return (
        <div className="searchbar">
            <input 
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
         />
        </div>
    );
}

export default Searchbar;