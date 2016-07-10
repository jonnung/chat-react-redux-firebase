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
import reducer from './reducers';
import App from './container/App';


const rootElement = document.getElementById('chat-main');

let store = createStore(reducer);


ReactDom.render(
    // Provider 로 감싸줌으로써 App 컴포넌트는 store 인스턴스에 접근할 수 있음
    <Provider store={ store }>
        /* React 0.13 이슈를 회피하기 위해 함수로 감싸줘야한다고 하는데 정확하게 왜 그런지 모름 */
        /* { () => <App /> } */
        <App />
    </Provider>,
    rootElement
);
