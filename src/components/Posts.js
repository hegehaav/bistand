import React from 'react';
import Clip from './Clip';
import Chat from './Chat';


const Posts = ({posts}) => {

  const postList = posts.map((post) => {
    if (post.type == "CHAT"){
      return (
        <Chat date={post.date} imageUrl={post.url} />
      );
    }
    else {
      return (
        <Clip date={post.date} videoUrl={post.url} />
      );
    }

  });

  return (
    <ul className="posts"> {postList}</ul>
  )

}


export default Posts;
