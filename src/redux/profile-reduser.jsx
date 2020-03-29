import { stat } from "fs";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_WINDOW = 'UPDATE-NEW-POST-WINDOW';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let msg =  { 
                id: 3, 
                message: state.newPostText, 
                likesCount: 0
            }
            state.posts.push(msg);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_WINDOW:
            state.newPostText = action.text;
            return state;
        default:
            return state;
    }
}

export const addPostCreateAction = () => ({type: ADD_POST});
export const updateNewPostCreateAction = (postText) => (
    {type: UPDATE_NEW_POST_WINDOW, text: postText}
);

export default profileReducer;