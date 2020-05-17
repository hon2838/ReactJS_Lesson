import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, FormControl, Nav, Navbar} from 'react-bootstrap';

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Lesson 04</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/AboutPage">About</Nav.Link>
                        <Nav.Link href="/Topics">Topics</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Menu;
