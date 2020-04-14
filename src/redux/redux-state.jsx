import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reduser";
import dialogReducer from "./dialog-reduser";
import sidebarReducer from "./sidebar-reduser";

let redusers = combineReducers({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer
});

let store = createStore(redusers);



export default store;