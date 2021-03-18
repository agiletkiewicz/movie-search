import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

function Search({ getMovies }) {

    const [input, setInput] = useState("")

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        getMovies(input);
        setInput("");
    };

    return (
        <Container>
            <Form inline onSubmit={handleSubmit} className="justify-content-md-center">
                <Form.Row inline className="align-items-center">
                    <Col xs="auto">
                        <Form.Control type="text" onChange={handleChange} value={input} className="mr-sm-2"/>
                    </Col>
                    <Col xs="auto">
                        <Button type="submit" variant="primary" >Search</Button>
                    </Col>
                </Form.Row>
            </Form>
            <br/>
        </Container>
    );
  }
  
  export default Search;