import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

function Search({ searchInput }) {

    const [input, setInput] = useState("")

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        searchInput(input);
        setInput("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={input}/>
            <input type="submit" value="search"/>
        </form>
    );
  }
  
  export default Search;