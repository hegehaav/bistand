import React, { Component } from 'react';
import '../styles/ReleaseContent.css';
import Posts from './Posts.js'
class ReleaseContent extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts : [
        { id: 2, date:"Mandag 23.06.18 Kl 12.34", type: "CHAT"},
        { id: 1, date:"Mandag 23.06.18 Kl 12.34", type: "CLIP"}

      ]
    }
  }
  render() {

    return (
      <Posts posts={this.state.posts}/>
        );
  }
}

export default ReleaseContent;
