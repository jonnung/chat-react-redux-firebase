/**
 * Smart Component Container
 *
 * 앱의 최상위 컴포넌트(라우트 핸들러같은)
 * 이 컴포넌트만이 Redux와 연관되는 것이 좋음
 * 데이터를 읽기 위해 Redux를 상태를 구독하고, 데이터를 바꾸기 위해 Redux로 액션을 보냄
 *
 * @link http://dobbit.github.io/redux/docs_kr/basics/UsageWithReact.html
 */

import React, {Component} from 'react';
import ChatList from '../components/ChatList';
import MessageForm from '../components/MessageForm';


export default class App extends Component {
    render() {
        return (
            <div className="chat-app">
                <ChatList />
                <MessageForm />
            </div>
        )
    };
};
