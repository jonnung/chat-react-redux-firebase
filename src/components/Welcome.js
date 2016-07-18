/**
 * Welcome view component
 */

import React, {Component, PropTypes} from 'react';


export default class Welcome extends Component {
    render () {
        return (
            <div>
                <h1 className="cover-heading">React + Redux + Firebase = Chat</h1>
                <div className="lead" id="user-welcome">Enter your Email & Name and start chatting!</div>
                <div className="lead" id="user-form">
                    <form className="form-inline">
                        <div className="form-group">
                            <label htmlFor="user-email">Email</label>
                            <input type="email" className="form-control" id="user-email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="user-nickname">Name</label>
                            <input type="text" className="form-control" id="user-name" />
                        </div>
                        <button type="submit" className="btn btn-default">Enter</button>
                    </form>
                </div>
            </div>
        );
    };
}

Welcome.PropTypes = {};
