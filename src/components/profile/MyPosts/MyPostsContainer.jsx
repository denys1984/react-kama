import React from 'react';
import MyPosts from './MyPosts';
import {addPostCreateAction, updateNewPostCreateAction} from './../../../redux/profile-reduser'


const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addNewPost = () => {
      props.store.dispatch(addPostCreateAction());
    };
  
    let postWindowChange = (postText) => {
      props.store.dispatch(updateNewPostCreateAction(postText));
    };
    // ---------------------------------
  

      return <MyPosts addNewPost={addNewPost}   
                        postWindowChange={postWindowChange}
                        newPostText={state.profilePage.newPostText}
                        postData={state.profilePage.posts}  />
  }
  
  export default MyPostsContainer;