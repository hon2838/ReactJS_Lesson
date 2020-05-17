import React, { useState }  from "react";
import TopMenuBar from "../components/Menu"
import {Alert, Button, Card, Col, Container, Row, Spinner} from 'react-bootstrap';
import CardComponent from '../components/Card';
function HomePage() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <TopMenuBar/>
            <Container>
                <Row>
                    <Alert variant="success">
                        <Alert.Heading>Hey, nice to see you</Alert.Heading>
                        <p>
                            Aww yeah, you successfully read this important alert message. This example
                            text is going to run a bit longer so that you can see how spacing within an
                            alert works with this kind of content.
                        </p>
                        <hr/>
                        <p className="mb-0">
                            Whenever you need to, be sure to use margin utilities to keep things nice
                            and tidy.
                        </p>
                    </Alert>
                </Row>
                <Row>
                    <Col><Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner></Col>
                    <Col xs={5}>
                        <CardComponent/>
                    </Col>
                    <Col>3 of 3</Col>
                </Row>
                <Row>
                    <div>
                        <p>You clicked {count} times</p>
                        <button onClick={() => setCount(count + 1)}>
                            Click me
                        </button>
                    </div>
                </Row>
            </Container>

        </div>
    );

}

export default HomePage;