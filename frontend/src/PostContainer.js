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

            <div className={"postContainer"}>
                {this.props.userInfo.token ? <button className={"newPostBtn"} onClick={this.handleChange}>{<img className={"newPostBtnImg"} src="https://www.pngitem.com/pimgs/m/114-1146547_new-post-new-post-icon-svg-hd-png.png" />}</button> : null
                }
                {this.state.postForm ? <NewPostForm userInfo={this.props.userInfo} createPost={this.props.createPost} handleChange={this.handleChange} /> : null}
                {this.props.posts.sort(function (a, b) { return b.id - a.id }).map(post => { return <PostCard post={post} key={post.id} users={this.props.users} comments={this.props.comments} userInfo={this.props.userInfo} deletePost={this.props.deletePost} updatePost={this.props.updatePost} updateComment={this.props.updateComment} /> })}
            </div >
        );
    }
}

export default PostContainer;