import React, { Component } from 'react';
import '../styles/Home.css';
import Posts from './Posts.js'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts : [
          { id: 2, date:"Lørdag 01.08.18 Kl 20.34", type: "CHAT", url: "chat1.png"},
          { id: 1, date:"Fredag 31.08.18 Kl 12.34", type: "CLIP", url: 'https://www.youtube.com/watch?v=4IP_E7efGWE'  }]
    }
  }
  render() {

    return (
      <div>
        <Posts posts={this.state.posts}/>
      </div>

        );
  }
}

export default Home;
