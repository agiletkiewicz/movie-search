import Movie from '../components/movie';
import CardDeck from 'react-bootstrap/CardDeck'

function Movies({ movies, addSelection, deleteSelection }) {

  return (
    <CardDeck>
      {movies.map(movie => (
        <Movie key={movie.imdbID} movie={movie} addSelection={addSelection} deleteSelection={deleteSelection}/>
      ))}
    </CardDeck>
  );

}
  
  export default Movies;