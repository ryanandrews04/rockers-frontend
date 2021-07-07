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
                {this.state.postForm ? <NewPostForm /> : null}
                {this.props.posts.map(post => { return <PostCard post={post} key={post.id} users={this.props.users} comments={this.props.comments} /> })}
            </div>
        );
    }
}

export default PostContainer;