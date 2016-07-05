/**
 * Chat messages list
 */

import React, {Component, PropTypes} from 'react';
import MessageBox from './MessageBox';


export default class ChatList extends Component {
    render() {
        return (
            <div className="chat-list">
                <MessageBox />
            </div>
        );
    };
}

ChatList.PropTypes = {};
