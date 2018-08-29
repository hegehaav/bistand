import React from 'react';
import Clip from './Clip';
import Chat from './Chat';


const Posts = ({posts}) => {
  const posts2 = [ //TODO: get from props
    { id: 2, date:"Mandag 23.06.18 Kl 12.34", type: "CHAT", url: "ChatExample.png"},
    { id: 1, date:"Mandag 23.06.18 Kl 12.34", type: "CLIP", url: 'https://www.youtube.com/watch?v=4IP_E7efGWE'  }

  ]
  const postList = posts2.map((post) => {
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
