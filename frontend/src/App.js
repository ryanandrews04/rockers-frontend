import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from "react-router-dom";
import Signup from './Signup'
import Login from './Login'
import Navbar from './Navbar';
import PostContainer from './PostContainer';
import Tuner from './Tuner';
import MyProfile from './MyProfile';
import style from './App.css';


class App extends Component {

  state = {
    users: [],
    posts: [],
    comments: [],
    userInfo: [],
  }


  login = (e) => {
    e.preventDefault()

    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: e.target[0].value,
        password: e.target[1].value
      })
    })
      .then(res => res.json())
      .then(userInfo => {
        localStorage.token = userInfo.token
        this.setState({
          userInfo
        })
      })

  }

  loginHandler = (e) => {
    e.preventDefault();
    this.login(e)
  }

  componentDidMount() {


    fetch('http://localhost:3000/api/v1/posts', {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`
      }
    })
      .then(res => res.json())
      .then(posts => this.setState({
        posts
      })
      )


    fetch('http://localhost:3000/api/v1/users', {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`
      }
    })
      .then(res => res.json())
      .then(users => this.setState({
        users
      })
      )



    fetch('http://localhost:3000/api/v1/comments', {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`
      }
    })
      .then(res => res.json())
      .then(comments => this.setState({
        comments
      })
      )

  }

  createPost = (postObj) =>
    this.setState({ posts: [postObj, ...this.state.posts] })


  deletePost = (postObj) => {
    const newPostsArr = this.state.posts.filter(post => post.id !== postObj.id)
    this.setState({
      posts: newPostsArr
    })
    fetch(`http://localhost:3000/api/v1/posts/${postObj.id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`,
        "Content-Type": "application/json"
      },
    })
      .then(res => res.json())
      .then(() => {
        this.setState({
          posts: newPostsArr
        })
        alert("Deleted post")

      })
  }

  updatePost = (e, updatedPostText, postObj) => {
    e.preventDefault()
    let updatedPost = {
      title: postObj.title,
      text: `${postObj.text} Edit: ${updatedPostText}`,
      user_id: postObj.user_id
    }
    fetch(`http://localhost:3000/api/v1/posts/${postObj.id}`, {
      method: "PATCH",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPost),
    })
      .then(res => res.json())
      .then(newPostObj => {
        this.setState({
          posts: this.state.posts.map(post => {
            if (post.id === newPostObj.id) return newPostObj
            else return post
          })
        })
      })

  }

  updateComment = (e, updatedCommentText, commentObj) => {
    e.preventDefault()
    let updatedComment = {
      text: `${commentObj.text} Edit: ${updatedCommentText}`,
      user_id: commentObj.user_id,
      post_id: commentObj.post_id
    }
    fetch(`http://localhost:3000/api/v1/comments/${commentObj.id}`, {
      method: "PATCH",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedComment),
    })
      .then(res => res.json())
      .then(newCommentObj => {
        this.setState({
          comments: this.state.comments.map(comment => {
            if (comment.id === newCommentObj.id) return newCommentObj
            else return comment
          })
        })
      })

  }

  updateUserImage = (e, updatedImageUrl, userObj) => {
    e.preventDefault()
    let updatedUser = {
      username: userObj.username,
      bio: userObj.bio,
      image: updatedImageUrl,
      posts: userObj.posts,
      comments: userObj.comments

    }
    fetch(`http://localhost:3000/api/v1/users/${userObj.id}`, {
      method: "PATCH",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then(res => res.json())
      .then(newUserObj => {
        this.setState({
          users: this.state.users.map(user => {
            if (user.id === newUserObj.id) return newUserObj
            else return user
          })
        })
      })

  }

  updateUserBio = (e, updatedBio, userObj) => {
    e.preventDefault()
    let updatedUser = {
      username: userObj.username,
      bio: updatedBio,
      image: userObj.image,
      posts: userObj.posts,
      comments: userObj.comments

    }
    fetch(`http://localhost:3000/api/v1/users/${userObj.id}`, {
      method: "PATCH",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then(res => res.json())
      .then(newUserObj => {
        this.setState({
          users: this.state.users.map(user => {
            if (user.id === newUserObj.id) return newUserObj
            else return user
          })
        })
      })

  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar userInfo={this.state.userInfo} />

          <Switch>

            <Route exact path="/">
              <Redirect to="/home" />
            </Route>

            <Route path="/home">
              <PostContainer posts={this.state.posts} users={this.state.users} comments={this.state.comments} userInfo={this.state.userInfo} createPost={this.createPost} deletePost={this.deletePost} updatePost={this.updatePost} updateComment={this.updateComment} />
            </Route>

            <Route path="/signup">
              <Signup />
            </Route>

            <Route path="/login" component={Login}>
              <Login login={this.login} loginHandler={this.loginHandler} userInfo={this.state.userInfo} history={useHistory} />
            </Route>

            <Route exact path="/login">
              {localStorage.token ? <Redirect to="/home" /> : null}
            </Route>

            {/* {localStorage.token && <Route exact path="/login"></Route> ? <Redirect to="/home" /> : null} */}

            <Route path="/tuner">
              <Tuner />
            </Route>

            <Route path="/profile">
              <MyProfile posts={this.state.posts} comments={this.state.comments} users={this.state.users} userInfo={this.state.userInfo} updateUserImage={this.updateUserImage} updateUserBio={this.updateUserBio} />
            </Route>



          </Switch>

        </div>
      </Router >
    );
  }
}

export default App;
