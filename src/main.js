import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'devices.css';
import './styles/cover.css';
import './styles/main.css';

import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import chattingAppReducer from './reducer/chattingApp';
import App from './container/App';


const rootElement = document.getElementById('chat-main');

let store = createStore(chattingAppReducer, {user: {email: '', name: ''}, messages: {}});


ReactDom.render(
    // Provider 로 감싸줌으로써 App 컴포넌트는 store 인스턴스에 접근할 수 있음
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
