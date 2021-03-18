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
    <Card onClick={handleClick} className={clicked ? "border-success" : null} style={{ width: '18rem' }}>
      <Card.Body>
        <input type="checkbox" checked={clicked ? "checked" : ""} />
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>
          {movie.Year}
        </Card.Text>
        {movie.Poster === "N/A" ? null : <Card.Img src={movie.Poster} />}
      </Card.Body>
    </Card>
  );
  
}
  
  export default Movie;