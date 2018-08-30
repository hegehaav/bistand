import React from 'react';
import "../styles/profiles.css"

const Profile = ({name, instaUrl, imageUrl}) => (
  <div className="profile_div">
    <img className="profile_image" src={require(`../images/${imageUrl}`)}/>
    <div className="profile_meta">
      <h1 className="name">{name}</h1>
      <a href={instaUrl}><img  src={require('../images/instagram_icon_simple.png')} /></a>
    </div>
  </div>
)



export default Profile;
