import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
    const [searchquery, setSearchQuery] = useState("");
    
    const movies = [
        
        { id : 2, title: "The Dark Knight" , release_date: "2008-07-18" },
        { id : 4, title: "The Matrix" , release_date: "1999-03-31" },
        { id : 5, title: "Pulp Fiction" , release_date: "1994-10-14" },
        { id : 7, title: "Forrest Gump" , release_date: "1994-07-06" },
         ];

         const handleSearch = () => {
            alert(SearchQuery)
         };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                type="text" 
                placeholder="Search for a movie..."
                 className="search-input"
                 value={searchquery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id}/>
                    ))}
            </div>
            </div>
    
    );
}
 export default Home;