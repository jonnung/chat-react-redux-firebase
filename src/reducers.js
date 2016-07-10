import {REGISTER_USER, SEND_MESSAGE, LOAD_MESSAGE, NEW_MESSAGE} from './actions';

export default function reducer(state, action) {
    switch (action.type) {
    case REGISTER_USER:
        break;
    case SEND_MESSAGE:
        break;
    case LOAD_MESSAGE:
        break;
    case NEW_MESSAGE:
        break;
    default:
        return state;
        break;
    }
};