/**
 * Redux, Actions
 *
 */


export const REGISTER_USER = 'REGISTER_USER';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const LOAD_MESSAGE = 'LOAD_MESSAGE';
export const NEW_MESSAGE = 'NEW_MESSAGE';

export function registerUser(email, name) {
    return {type: REGISTER_USER, user: {email, name}};
}

export function sendMessage(text) {
    return {type: SEND_MESSAGE, text}
}

export function loadMessage(first_index, length = 10) {
    return {type: LOAD_MESSAGE, first_index, length};
}

export function newMessage(last_index) {
    return {type: NEW_MESSAGE, last_index};
}