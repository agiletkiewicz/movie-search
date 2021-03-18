import Card from 'react-bootstrap/Card';
import { useState } from 'react';

function Movie({ movie, addSelection, deleteSelection }) {

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (clicked) {
      setClicked(false);
      deleteSelection(movie.imdbID);
    } else {
      setClicked(true);
      addSelection(movie);
    }

  }

  return (
    <Card onClick={handleClick} className={clicked ? "border-success" : null}>
      {movie.Poster === "N/A" ? null : <Card.Img src={movie.Poster} />}
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>
          {movie.Year}
        </Card.Text>
      </Card.Body>
    </Card>
  );
  
}
  
  export default Movie;