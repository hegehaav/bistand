import React from 'react';
import ReactPlayer from 'react-player'

import "../styles/Posts.css"

const Clip = ({date, videoUrl, title}) => (
  <li className="post-list-item">
    <p className="date">{date}</p>
    <div class="title">{title}</div>
    <ReactPlayer url={videoUrl}/>

    <hr className="post-end"></hr>
  </li>
)



export default Clip;
