import React, {Component} from 'react';
import ChatList from './ChatList';
import MessageForm from './MessageForm';


export default class Chat extends Component {
    render() {
        let iphone_style = {width: '327px', height: '467px'};
        return (
            <div>
                <div className="app-container">
                    <div className="marvel-device iphone6 gold" style={ iphone_style }>
                        <div className="top-bar"></div>
                        <div className="sleep"></div>
                        <div className="volume"></div>
                        <div className="camera"></div>
                        <div className="sensor"></div>
                        <div className="speaker"></div>
                        <div className="screen">
                            <div className="chat-app">
                                <ChatList />
                                <MessageForm />
                            </div>
                        </div>
                        <div className="home"></div>
                        <div className="bottom-bar"></div>
                    </div>
                </div>
            </div>
        );
    }
}