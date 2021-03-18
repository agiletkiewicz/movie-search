import Navbar from 'react-bootstrap/Navbar';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

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

    return (
      <Navbar bg="light" expand="lg" sticky="top">
      <DropdownButton id="dropdown-item-button" title="Your Cart">
            {showCart()}
        </DropdownButton>
      </Navbar>
    );

}

export default NavBar;