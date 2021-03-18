import Button from 'react-bootstrap/Button';

function CartButton({ modalDisplay }) {
    return (
        <Button variant="success" onClick={modalDisplay}>Add to Cart</Button>
    );
  }
  
  export default CartButton;