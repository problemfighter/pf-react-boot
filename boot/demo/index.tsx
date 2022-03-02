import React from 'react';
import ReactDOM from 'react-dom';
import BootstrapComponent from "./bootstrap/bootstrap-component";
import Bootstrap from "../react/Bootstrap";


ReactDOM.render(
    <React.Fragment>
        <Bootstrap>
            <BootstrapComponent/>
        </Bootstrap>
    </React.Fragment>
    ,
    document.getElementById('root')
);