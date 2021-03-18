
import { useState } from 'react';
import axios from 'axios';
import Search from '../components/search';
import Confirm from '../components/confirm';
import Movies from './movies';
import Footer from './footer'
import NavBar from '../components/navbar';
import Welcome from '../components/welcome';


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

  const showConfirmation = () => {
      setConfirm(prevState => !prevState);
  }

  const addToCart = () => {
      setCart(prevState => (
          [...prevState].concat([...selection])
      ));
      setSelection([]);
      setMovies([]);
      showConfirmation();
  }

  return (
    <>
        <NavBar cart={cart} />  
        <div className="container">
            <Welcome />
            <Search getMovies={getMovies} />
            <Movies movies={movies} addSelection={addSelection} deleteSelection={deleteSelection} />
            {console.log("selection: " + selection)}
            {console.log("cart: " + cart)}
            <Footer show={selection.length > 0} showConfirmation={showConfirmation}/>
            <Confirm show={confirm} selection={selection} showConfirmation={showConfirmation} addToCart={addToCart} />
        </div>
    </>
  );    
}

export default Home;
