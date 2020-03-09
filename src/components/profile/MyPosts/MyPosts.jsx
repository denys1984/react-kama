import React from 'react';
import s from './MyPosts.module.css';
import Post from './post/Post';

const MyPosts = (props) => {

  let makePost = React.createRef();
  let createPost = () => {
    let postText = makePost.current.value;
    props.addPost(postText);
    makePost.current.value = '';
  };
  let postsElements = props.postData.map(item => {
    return (
      <Post message={item.message} likesCount={item.likesCount} />
    )
  });
    return (
        <div className={s.postsBlock}>
          <h3>My post</h3>
          <div>
            <div>            
              <textarea ref={makePost}></textarea>
            </div>
            <div>            
              <button onClick={createPost}>Add post</button>
            </div>
          </div>
          <div className={s.posts}>
            {postsElements}
          </div>
        </div>

    )
}

export default MyPosts;