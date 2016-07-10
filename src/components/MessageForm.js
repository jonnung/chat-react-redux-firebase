/**
 * Chat Action component
 */

import React, {Component, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';


export default class MessageForm extends Component {
    render() {
        return (
            <div className="message-form">
                <textarea className="col-xs-11 input-message" ref="textarea" placeholder="메세지를 입력하세요."></textarea>
                <div className="col-xs-1 green-background send-message">
                    <span className="fa fa-paper-plane" onClick={ (e) => {this.handleClick(e)} }></span>
                </div>
            </div>
        );
    };

    handleClick(e) {
        const node = findDOMNode(this.refs.textarea);
        const text = node.value.trim();
        this.props.onSubmit(text);
        node.value = '';
    }
}

MessageForm.PropTypes = {
    onSubmit: PropTypes.func.isRequired
};
