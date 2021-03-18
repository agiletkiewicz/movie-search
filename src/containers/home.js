
import { useState } from 'react';
import axios from 'axios';
import Search from '../components/search';
import Movies from './movies';

function Home() {

  const [movies, setMovies] = useState([]);
  const [cart, setCart] = useState([]);
  const [selection, setSelection] = useState([])
  
  const API = "https://www.omdbapi.com/"

  const getMovies = (search) => {
    axios.get(API, {
        params: {
            apikey: 'db86859b', 
            s: search.split(" ").join("+")
        }
    })
    .then(resp => setMovies(resp.data.Search))
  }

  const addSelection = (movie) => {
    setSelection(prevState => (
        [...prevState, movie]
    ));
  }

  const deleteSelection = (movieId) => {
      setSelection(prevState => (
          [...prevState].filter(movie => (
              movie.imdbID !== movieId
          ))
      ))
  }

  return (
    <div className="container">
      <Search getMovies={getMovies} />
      <Movies movies={movies} addSelection={addSelection} deleteSelection={deleteSelection} />
      {console.log(selection)}
    </div>
  );    
}

export default Home;
