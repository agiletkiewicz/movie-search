import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

function Search({ setSearch }) {

    function handleClick() {
        setSearch("test")
    };

    return (
        <Button variant="primary" onClick={handleClick} >Search</Button>
    );
  }
  
  export default Search;