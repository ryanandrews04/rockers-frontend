import React, { Component } from 'react';
import CommentContainer from './CommentContainer';

class PostCard extends Component {


    state = {
        viewComments: false,
        confirmDelete: false,
        edit: false,
        postText: this.props.post.text,
        newPost: ""
    }

    handleChange = () => {
        this.setState({
            viewComments: !this.state.viewComments
        })
    }

    handleDelete = () => {
        this.setState({
            confirmDelete: !this.state.confirmDelete
        })
    }

    handleEdit = (e) => {
        e.preventDefault()
        this.setState({
            edit: !this.state.edit,
        })
    }

    handleUpdatedPost = (updatedPost) => {
        this.setState({
            newPost: updatedPost,
        })
    }

    submit = (e) => {
        this.props.updatePost(e, this.state.newPost, this.props.post)
        this.handleEdit(e)
    }

    render() {

        // const user = (this.props.users.filter(user => user.id === this.props.post.user_id))

        return (
            <div className="postCard" >

                {/* <h5>{user[0].username}:</h5> */}
                <br></br>

                {this.props.userInfo.token ? (this.props.userInfo.user.id === this.props.post.user_id ? <button onClick={this.handleDelete}>🗑</button> : null) : null}

                {this.state.confirmDelete ? <div><h5>Are you sure you want to delete this post?</h5> <button onClick={() => this.props.deletePost(this.props.post)}>Yes</button> <button onClick={this.handleDelete}>No</button></div> : null}

                {this.props.userInfo.token ? (this.props.userInfo.user.id === this.props.post.user_id ? <button onClick={(e) => this.handleEdit(e)}>Add to Post</button> : null) : null}

                <h3>{this.props.post.title}</h3>

                {
                    this.state.edit
                        ? <form onSubmit={this.submit}>
                            <input type="text" placeholder={"New Text"} onChange={(e) => this.handleUpdatedPost(e.target.value)}></input>
                            <input type="submit" name="submit" value="Save"></input>
                        </form>
                        : null
                }


                <h5>{this.props.post.text}</h5>

                {this.props.post.image ? <img alt={""} className={"postImage"} src={this.props.post.image} /> : null}

                <br></br>

                <button onClick={this.handleChange}>Comments</button>

                {this.state.viewComments ?
                    <CommentContainer users={this.props.users} comments={this.props.post.comments} post_id={this.props.post.id} userInfo={this.props.userInfo} updateComment={this.props.updateComment} /> : null
                }


                {/* <button onClick={() => this.props.deletePost(this.props.post)}></button> */}



            </div >
        );
    }
}

export default PostCard;