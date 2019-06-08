import React , { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';
import { connect } from 'react-redux';

class Home extends Component {

  // state = {
  //   posts: [ ]
  // }
  //
  // componentDidMount() {
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //    .then(res => {
  //      this.setState({
  //        posts : res.data.slice(0,10)
  //      })
  //    })
  // }

  render() {
    console.log(this.props);

    const { posts } = this.props ;
    const postlist = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key= {post.id}>
            <img src={Pokeball} alt="Pokeball"/>
            <div className="card-content">
              <Link to={'/'+post.id}><div className="card-title">{post.title}</div></Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No Posts Yet</div>
    )

    return (
      <div className="container home">
        <h1 className="center">Home</h1>
        {postlist}
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStatetoProps)(Home);
