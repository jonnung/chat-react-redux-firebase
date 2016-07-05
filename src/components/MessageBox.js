/**
 * Message contents box
 */

import React, {Component, PropTypes} from 'react';


export default class MessageBox extends Component {
    render() {
        return (
            <div className="message-box">
                <div className="message-avatar">
                    <img src="http://www.gravatar.com/avatar/f126f14fe4fbf67baa247f8943304911?d=retro" />
                </div>
                <div className="message-content">
                    <div className="message-data">
                        <span className="author">조은우</span>
                        <span className="datetime">2016-05-07 15:00:00</span>
                    </div>
                    <p className="message-body">
                        안녕하세요.
                    </p>
                </div>
            </div>
        );
    }
}

MessageBox.PropTypes = {};
