import React from "react";
import TopMenuBar from "../components/Menu"
import {Alert, Button, Card, Col, Container, Row, Spinner} from 'react-bootstrap';

function HomePage() {

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
                    <Col xs={5}><Card style={{width: '18rem'}}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card></Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>

        </div>
    );

}

export default HomePage;