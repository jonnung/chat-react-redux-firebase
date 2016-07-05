/**
 * Chat Action component
 */

import React, {Component, PropTypes} from 'react';


export default class MessageForm extends Component {
    render() {
        return (
            <div className="message-form">
                <textarea className="col-xs-11 input-message" placeholder="메세지를 입력하세요."></textarea>
                <div className="col-xs-1 green-background send-message">
                    <span className="fa fa-paper-plane"></span>
                </div>
            </div>
        );
    };
}

MessageForm.PropTypes = {};
