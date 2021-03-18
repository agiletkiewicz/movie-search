import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function Confirm({ show, modalDisplay, selection, addToCart }) {
  
    return (
        <Modal show={show} onHide={modalDisplay}>
            <Modal.Header closeButton>
            <Modal.Title>Confirm your selection:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {selection.map(movie => (
                    <p>{movie.Title} - {movie.Year}</p>
                ))}
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={modalDisplay}>
                Go Back
            </Button>
            <Button variant="primary" onClick={addToCart}>
                Add To Cart
            </Button>
            </Modal.Footer>
        </Modal>
    );

}
  
  export default Confirm;