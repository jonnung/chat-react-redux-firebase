import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'devices.css';
import './styles/main.css';

import React from 'react';
import ReactDom from 'react-dom';
import App from './container/App';


const rootElement = document.getElementById('chat-screen');

ReactDom.render(
    <App />,
    rootElement
);
