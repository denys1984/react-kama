import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
            <div className={s.item}>
              <img src="https://cs13.pikabu.ru/post_img/big/2019/06/30/11/156192403212146226.jpg" alt=""/>
              {props.message}
              <div>
                <span>Like</span> {props.likesCount}
              </div>
              
            </div>

    )
}

export default Post;