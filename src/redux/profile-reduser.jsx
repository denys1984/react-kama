const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_WINDOW = 'UPDATE-NEW-POST-WINDOW';

let initial = {
    posts: [
        { id: 1, message: "How are you doing", likesCount: 12 },
        { id: 2, message: "I am perfectly well", likesCount: 5 }
      ],
    newPostText: 'Hello there'
};

const profileReducer = (state = initial, action) => {
    switch (action.type) {
        case ADD_POST:{
            let msg =  { 
                id: 3, 
                message: state.newPostText, 
                likesCount: 0
            }
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(msg);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_WINDOW: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.text;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostCreateAction = () => ({type: ADD_POST});
export const updateNewPostCreateAction = (postText) => (
    {type: UPDATE_NEW_POST_WINDOW, text: postText}
);

export default profileReducer;