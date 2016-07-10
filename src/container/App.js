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
import {connect} from 'react-redux';
import Welcome from '../components/Welcome';
import Chat from '../components/Chat';


class App extends Component {
    render() {
        const {dispatch, user, messages} = this.props;
        return (
            <div>
                /*
                 * jsx 안에서 if-else 사용하기
                 * https://facebook.github.io/react/tips/if-else-in-JSX.html
                 */
                /* {(() => {
                     if (user.email != '') {
                         return <Chat dispatch={ dispatch } user={ user } messages={ messages }/>;
                     } else {
                         return <Welcome dispatch={ dispatch } user={ user }/>;
                     }
                 })()} */
                <Welcome dispatch={ dispatch } user={ user }/>
            </div>
        )
    };
}

/**
 * 전역 Redux 스토어의 상태(state)를 받아서 컴포넌트가 필요로 하는 props를 반환
 */
function select(global_state) {
    return {
        user: global_state.user,
        messages: global_state.messages
    };
}

// connect 함수는 props로 dispatch를 전달
export default connect(select)(App);
