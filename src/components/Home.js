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

      <Posts posts={this.state.posts}/>
        );
  }
}

export default Home;
