import React , { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { deletePost } from '../action/postAction';

class Post extends Component {

  // state = {
  //   post: null
  // }
  //
  // componentDidMount() {
  //   let Id = this.props.match.params.post_id;
  //   axios.get('https://jsonplaceholder.typicode.com/posts/' + Id)
  //    .then(res => {
  //      this.setState({
  //        post: res.data
  //      });
  //    })
  // }

  handleClick = () => {
    this.props.deletePost(this.props.post.id)
    this.props.history.push('/');
  }

  render() {
    const post = this.props.post ? (
      <div className="post">
        <h2 className="center">{this.props.post.title}</h2>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn grey" onClick= {this.handleClick}>
            Delete Post
          </button>
        </div>
      </div>
    ) : (
      <div className="center">
        Loading post....
      </div>
    )

    return (
      <div className="container">
        {post}
      </div>
    )
  }
}

const mapStatetoProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  id = parseInt(id);
  return {
    post: state.posts.find(post => post.id === id)
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch(deletePost(id))
    }
  }
}

export default connect(mapStatetoProps , mapDispatchtoProps)(Post);
