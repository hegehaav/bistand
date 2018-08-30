import React, { Component } from 'react';
import '../styles/profiles.css';
import Profile from "./Profile.js";

const Profiles = () => (
  <div >
    <Profile
      name="Målfrid"
      instaUrl="https://www.instagram.com/mollyaaraas/"
      imageUrl="profile_image_maalfrid.jpg"
    />
    <Profile
      name="Marie"
      instaUrl="https://www.instagram.com/mariehaga/"
      imageUrl="profile_image_marie.jpg"
    />
    <Profile
      name="Hege"
      instaUrl="https://www.instagram.com/hegehaavaldsen/"
      imageUrl="profile_image_hege.jpg"
    />
  </div>

)



export default Profiles;
