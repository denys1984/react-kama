import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postData = [
    { id: 1, message: "How are you doing", likesCount: 12 },
    { id: 2, message: "I am perfectly well", likesCount: 5 }
  ];

let dialogs = [
    { id: 1, name: "Denys" },
    { id: 2, name: "Valera" },
    { id: 3, name: "Sasha" },
    { id: 4, name: "Lesha" },
    { id: 5, name: "Oleg" },
    { id: 6, name: "Sergey" }
];

let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "hello 1" },
    { id: 3, message: "hello 3434" },
    { id: 4, message: "hello 3434" },
    { id: 5, message: "hello 3434" }
];
ReactDOM.render(
    <App postData={postData} dialogs={dialogs} messages={messages} />, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
