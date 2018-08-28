import React from 'react';
import "../styles/Posts.css"

const Chat = ({date}) => (
  <li className="post-list-item">
    <p className="date">{date}</p>
    <img className="chat" src={require("../images/ChatExample.png")}></img>
    <hr className="post-end"></hr>
  </li>
)



export default Chat;
