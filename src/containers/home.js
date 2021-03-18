
import { useState } from 'react';
import axios from 'axios';
import Search from '../components/search';
import Movies from './movies';

function Home() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  
  const API = "https://www.omdbapi.com/"

  const getMovies = (search) => {
    axios.get(API, {
        params: {
            apikey: 'db86859b', 
            s: search.split(" ").join("+")
        }
    })
    // .then(resp => resp.json())
    .then(resp => setMovies(resp.data.Search))
  }

  const searchInput = (search) => {
    getMovies(search);
}

  return (
    <div className="container">
      <Search searchInput={searchInput} />
      <Movies movies={movies} />
    </div>
  );    
}

export default Home;
