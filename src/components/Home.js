import React, { Component } from 'react';
import '../styles/Home.css';
import Posts from './Posts.js'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts : props.posts
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
