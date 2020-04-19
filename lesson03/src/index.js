import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Menubar from './components/Menu';
import ButtonSet from './components/ButtonSet';
import TableData from './components/TableInfo';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <React.StrictMode>
        <Menubar/>
        <ButtonSet isAppearSaveButton={true} isAppearResetButton={true} saveButtonText={'save to database'}
                   saveButtonColor={'danger'}/>
        <TableData/>
        <ButtonSet isAppearSaveButton={true} isAppearResetButton={false} saveButtonText={'save to profile'}
                   saveButtonColor={'info'}/>

    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
