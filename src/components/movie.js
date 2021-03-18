import Card from 'react-bootstrap/Card';

function Movie({movie}) {

    return (
      <Card>
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