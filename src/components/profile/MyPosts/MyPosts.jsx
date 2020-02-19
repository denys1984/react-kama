import React from 'react';
import s from './MyPosts.module.css';
import Post from './post/Post';

const MyPosts = () => {
    return (
        <div>
          my post
          <div>
            new post
          </div>
          <div className={s.posts}>
            <Post message="How are you doing" likesCount="5"/>
            <Post message="I am perfectly well" likesCount="0"/>



          </div>
        </div>

    )
}

export default MyPosts;