import Movie from '../components/movie';
import CardDeck from 'react-bootstrap/CardDeck'

function Movies({ movies }) {

  return (
    <CardDeck>
      {movies.map(movie => (
        <Movie key={movie.imdbID} movie={movie}/>
      ))}
    </CardDeck>
  );

}
  
  export default Movies;