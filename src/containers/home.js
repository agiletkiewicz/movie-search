import Search from '../components/search';
import { useState } from 'react';
import axios from 'axios';

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
    <>
      <Search searchInput={searchInput} />
      {console.log(movies)}
    </>
  );    
}

export default Home;
