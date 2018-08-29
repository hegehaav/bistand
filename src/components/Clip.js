import React from 'react';
import ReactPlayer from 'react-player'

import "../styles/Posts.css"

const Clip = ({date, videoUrl}) => (
  <li className="post-list-item">
    <p className="date">{date}</p>
    <ReactPlayer url={videoUrl}/>

    <hr className="post-end"></hr>
  </li>
)



export default Clip;
