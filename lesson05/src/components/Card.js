import React from 'react';
import '../css/App.css';
import {Alert, Button, Card, Col, Container, Row, Spinner, Text} from 'react-bootstrap';

class Card2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            card_title: 'Put title here',
            card_description: 'Put description here',
            button_color: 'primary',
            input_val:'default value',
            input_val2:'default value2'
        }
    }

    change_card_desc() {
        if(this.state.button_color=='primary'){
            this.setState({card_description: this.state.input_val, button_color: 'secondary'})
        }else{
            this.setState({card_description: this.state.input_val2, button_color: 'primary'})
            // this.setState(prevState => (
            //     {card_description: prevState.card_description, button_color:prevState.button_color}
            // ));
        }

    }

    change_input_value (event) {
        console.log(event)
        this.setState({ [event.target.id]: event.target.value });
        // alternatively using template strings for strings
        // this.setState({ [`key${event.target.id}`]: event.target.value });
    }
    render() {

        return (
            <Card style={{width: '18rem'}}>
                <Card.Body>
                    <Card.Title>{this.state.card_title}</Card.Title>
                    <Card.Text>
                        {this.state.card_description}
                    </Card.Text>
                    <Button variant={this.state.button_color} onClick={() => this.change_card_desc()}>Click
                        Alert</Button>
                    <input id='input_val' value={this.state.input_val} onChange={(e)=>this.change_input_value(e)}/>
                    <input id='input_val2' value={this.state.input_val2} onChange={(e)=>this.change_input_value(e)}/>

                </Card.Body>
                {this.state.input_val}
            </Card>
        );
    }
}

export default Card2;
