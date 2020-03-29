const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = "SEND_MESSAGE";

const dialogReducer = (state, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.text;
            return state;
        case SEND_MESSAGE:
            let msg = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: msg});
            return state;
        default:
            return state;
    }
}

export const updateNewMessageBodyCreator = (body) => (
    {type: UPDATE_NEW_MESSAGE_BODY, text: body}
);
export const sendMessageCreator = () => (
    {type: SEND_MESSAGE}
);

export default dialogReducer;