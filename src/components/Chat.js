import React from 'react';
import "../styles/Posts.css"

const Chat = ({date, imageUrl}) => (
  <li className="post-list-item">
    <p className="date">{date}</p>
    <img className="chat" src={require(`../images/${imageUrl}`)}></img>
    <hr className="post-end"></hr>
  </li>
)



export default Chat;
