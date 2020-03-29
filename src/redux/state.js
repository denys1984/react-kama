import sidebarReducer from "./../redux/sidebar-reduser";
import profileReducer from "./../redux/profile-reduser";
import dialogReducer from "./../redux/dialog-reduser";

const store = {
    // ------------- State
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            posts: [
                { id: 1, message: "How are you doing", likesCount: 12 },
                { id: 2, message: "I am perfectly well", likesCount: 5 }
              ],
            newPostText: 'Hello there'
        },
        sidebar: {}
    },
    // ------------- State

    _callSubscriber() {
        console.log('state changed')
    },
    getState() {  
        return this._state;
    },
    subscribe(obser) {
        this._callSubscriber = obser;
    },

    // ---------------------- Dispatch
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },
    // ---------------------- Dispatch

}


window.store = store;
export default store; 