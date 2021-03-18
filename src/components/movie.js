import Card from 'react-bootstrap/Card';
import { useState } from 'react';

function Movie({movie}) {

  const [clicked, setClicked] = useState(false);

  return (
    <Card onClick={() => setClicked(!clicked)} className={clicked ? "border-success" : null}>
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