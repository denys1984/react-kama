import React from 'react';
import MyPosts from './MyPosts';
import { addPostCreateAction, updateNewPostCreateAction } from './../../../redux/profile-reduser';
import { connect } from 'react-redux';


  let mapStateToProps = (state) => {
    return {
      newPostText: state.profilePage.newPostText,
      postData: state.profilePage.posts
    }
  };
  let mapDispatchToProps = (dispatch) => {
    return {
      addNewPost: () => {
        dispatch(addPostCreateAction());
      },
      postWindowChange: (postText) => {
        dispatch(updateNewPostCreateAction(postText));
      }
    }
  }

  const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
  
  export default MyPostsContainer;