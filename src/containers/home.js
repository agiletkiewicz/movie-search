import { useState } from 'react';
import axios from 'axios';
import Search from '../components/search';
import Confirm from '../components/confirm';
import NavBar from '../components/navbar';
import Welcome from '../components/welcome';
import Movies from './movies';
import Footer from './footer'


function Home() {

  const [movies, setMovies] = useState([]);
  const [selection, setSelection] = useState([])
  const [cart, setCart] = useState([]);
  const [confirm, setConfirm] = useState(false);

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

  const modalDisplay = () => {
      setConfirm(prevState => !prevState);
  }

  const addToCart = () => {
      setCart(prevState => (
          [...prevState].concat([...selection])
      ));
      setSelection([]);
      setMovies([]);
      modalDisplay();
  }

  return (
    <>
        <NavBar cart={cart} />  
        <div className="container">
            <Welcome />
            <Search getMovies={getMovies} />
            <Movies movies={movies} addSelection={addSelection} deleteSelection={deleteSelection} />
            <Footer show={selection.length > 0} modalDisplay={modalDisplay}/>
            <Confirm show={confirm} selection={selection} modalDisplay={modalDisplay} addToCart={addToCart} />
        </div>
    </>
  );    
}

export default Home;
