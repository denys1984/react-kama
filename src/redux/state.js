import {rerenderTree} from '../render';

let state = {
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
        ]
    },
    profilePage: {
        posts: [
            { id: 1, message: "How are you doing", likesCount: 12 },
            { id: 2, message: "I am perfectly well", likesCount: 5 }
          ]
    }
}

export let addPost = (message) => {
    let msg =  { 
        id: 3, 
        message: message, 
        likesCount: 0
    }
    state.profilePage.posts.push(msg);
    rerenderTree(state);
}

export default state;