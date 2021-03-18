import Navbar from 'react-bootstrap/Navbar';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';


function NavBar({ cart }) {

    const showCart = () => {
        if (cart.length < 1) {
            return <Dropdown.ItemText>Your cart is empty</Dropdown.ItemText>;
        } else {
            return (
                cart.map(movie => (
                    <Dropdown.ItemText>{movie.Title} - {movie.Year}</Dropdown.ItemText>
                ))
            )
        }
    }

    const showBadge = () => {
        if (cart.length < 1) {
            return null;
        } else {
            return (
                <Button variant="light">
                    <Badge variant="success">{cart.length}</Badge>
                </Button>
            )
        }
    }

    return (
      <Navbar bg="light" sticky="top">
        <DropdownButton id="dropdown-item-button" title="Your Cart">
            {showCart()}
        </DropdownButton>
        {showBadge()}
      </Navbar>
    );

}

export default NavBar;