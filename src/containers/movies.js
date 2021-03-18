import Movie from '../components/movie';
import CardColumns from 'react-bootstrap/CardColumns';

function Movies({ movies, addSelection, deleteSelection }) {

  return (

    <CardColumns>
      {movies.map(movie => (
        <Movie key={movie.imdbID} movie={movie} addSelection={addSelection} deleteSelection={deleteSelection}/>
      ))}
    </CardColumns>

  );

}
  
  export default Movies;