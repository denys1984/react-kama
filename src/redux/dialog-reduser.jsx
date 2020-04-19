const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = "SEND_MESSAGE";

let initial = {
    dialogs: [
        { id: 1, name: "Denys" },
        { id: 2, name: "Valera" },
        { id: 3, name: "Sasha" },
        { id: 4, name: "Lesha" },
        { id: 5, name: "Oleg" },
        { id: 6, name: "Sergey" }
    ],
    messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "hello 1" },
        { id: 3, message: "hello 3434" },
        { id: 4, message: "hello 3434" },
        { id: 5, message: "hello 3434" }
    ],
    newMessageBody: '',
};

const dialogReducer = (state = initial, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:{
            let stateCopy = {...state};
            stateCopy.newMessageBody = action.text;
            return stateCopy;
        }
        case SEND_MESSAGE: {
            let msg = state.newMessageBody;
            let stateCopy = {...state};
            stateCopy.newMessageBody = '';
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push({id: 6, message: msg});
            return stateCopy;
        }
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