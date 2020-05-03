import React from 'react';
import '../css/App.css';
import {Button} from 'react-bootstrap';

class ButtonSet extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {

        return (
            <div>
                {this.props.isAppearSaveButton ?
                    <Button variant={this.props.saveButtonColor}>{this.props.saveButtonText}</Button> : null}
                {this.props.isAppearResetButton ? <Button>Reset</Button> : null}
            </div>
        );
    }
}

export default ButtonSet;
