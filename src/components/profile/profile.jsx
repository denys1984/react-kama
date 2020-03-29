import React from 'react';
import s from './profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return ( 
    <div>
      <ProfileInfo />
      <MyPosts postData = {props.postData.posts} 
              newPostText = {props.postData.newPostText}
              dispatch ={props.dispatch} />
    </div> 
  )
}

export default Profile;