import Button from 'react-bootstrap/Button';

function CartButton({ showConfirmation }) {
    return (
        <Button variant="success" onClick={showConfirmation}>Add to Cart</Button>
    );
  }
  
  export default CartButton;