import React, { Component } from 'react';
import '../styles/profiles.css';
import Profile from "./Profile.js";

const Profiles = () => (
  <div >
    <Profile
      name="Målfrid"
      instaUrl="https://www.instagram.com/mollyaaraas/"
      imageUrl="profiles_maalfrid.jpg"
    />
    <Profile
      name="Marie"
      instaUrl="https://www.instagram.com/mariehaga/"
      imageUrl="profiles_haga.jpg"
    />
    <Profile
      name="Hege"
      instaUrl="https://www.instagram.com/hegehaavaldsen/"
      imageUrl="profiles_hege.jpg"
    />
  </div>

)



export default Profiles;
