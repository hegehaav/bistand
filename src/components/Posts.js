import React from 'react';
import Clip from './Clip';
import Chat from './Chat';


const Posts = ({posts}) => {
  const posts2 = [ //TODO: get from props
    { id: 2, date:"Mandag 23.06.18 Kl 12.34", type: "CHAT"},
    { id: 1, date:"Mandag 23.06.18 Kl 12.34", type: "CLIP"}

  ]
  const postList = posts2.map((post) => {
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
