import state, {observer} from "./redux/state"
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost, updateNewPostWindow} from './redux/state';

let rerenderTree = (state) => {
    ReactDOM.render(
      <App state={state} addPost={addPost} updateNewPostWindow={updateNewPostWindow} />, 
      document.getElementById('root')
    );
} 

rerenderTree(state);

observer(rerenderTree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
