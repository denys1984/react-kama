import React from 'react';
import s from './MyPosts.module.css';
import Post from './post/Post';

const MyPosts = () => {
  let postData = [
    { id: 1, message: "How are you doing", likesCount: 12 },
    { id: 2, message: "I am perfectly well", likesCount: 5 }
  ];
  let postsElements = postData.map(item => {
    return (
      <Post message={item.message} likesCount={item.likesCount} />
    )
  });
    return (
        <div className={s.postsBlock}>
          <h3>My post</h3>
          <div>
            <div>            
              <textarea></textarea>
            </div>
            <div>            
              <button>Add post</button>
            </div>
          </div>
          <div className={s.posts}>
            {postsElements}
          </div>
        </div>

    )
}

export default MyPosts;