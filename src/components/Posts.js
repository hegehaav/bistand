import React from 'react';
import Clip from './Clip';
import Chat from './Chat';


const Posts = (props) => {
  const postList = props.posts.map((post) => {
    if (post.type == "CHAT"){
      return (
        <Chat date={post.date} />
      );
    }
    else {
      return (
        <Clip date={post.date} />
      );
    }

  });

  return (
    <ul className="posts"> {postList}</ul>
  )

}


export default Posts;
