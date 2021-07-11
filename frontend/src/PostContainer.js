import React, { Component } from 'react';
import NewPostForm from './NewPostForm';
import PostCard from './PostCard';

class PostContainer extends Component {

    state = {
        postForm: false
    }

    handleChange = () => {
        this.setState({
            postForm: !this.state.postForm
        })
    }

    render() {
        return (

            <div>
                <button onClick={this.handleChange}>Create a new post</button>
                {this.state.postForm ? <NewPostForm userInfo={this.props.userInfo} createPost={this.props.createPost} handleChange={this.handleChange} /> : null}
                {this.props.posts.sort(function (a, b) { return b.id - a.id }).map(post => { return <PostCard post={post} key={post.id} users={this.props.users} comments={this.props.comments} userInfo={this.props.userInfo} deletePost={this.props.deletePost} updatePost={this.props.updatePost} updateComment={this.props.updateComment} /> })}
            </div>
        );
    }
}

export default PostContainer;