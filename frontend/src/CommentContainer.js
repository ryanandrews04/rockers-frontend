import React, { Component } from 'react';
import CommentCard from './CommentCard';
import NewCommentForm from './NewCommentForm';


class CommentContainer extends Component {

    state = {
        commentForm: false,
        comments: this.props.comments,
        confirmDelete: false
    }

    handleChange = () => {
        this.setState({
            commentForm: !this.state.commentForm
        })
    }

    deleteComment = (commentObj) => {
        const newCommentsArr = this.state.comments.filter(comment => comment.id !== commentObj.id)
        this.setState({
            comments: newCommentsArr
        })
        fetch(`http://localhost:3000/api/v1/comments/${commentObj.id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${localStorage.token}`,
                "Content-Type": "application/json"
            },
        })
            .then(res => res.json())
            .then(() => {
                this.setState({
                    comments: newCommentsArr
                })
                alert("Deleted comment")

            })
    }



    createComment = (commentObj) =>
        this.setState({ comments: [commentObj, ...this.state.comments] })

    render() {
        return (
            <div className={"commentContainer"}>
                <h3>Comments</h3>
                {this.props.userInfo.token ? <button className={"newCommentBtn"} onClick={this.handleChange}>{<img className={"newCommentBtnImg"} src="https://www.pngitem.com/pimgs/m/114-1146547_new-post-new-post-icon-svg-hd-png.png" />}</button> : null}
                {this.state.commentForm ? <NewCommentForm userInfo={this.props.userInfo} createComment={this.createComment} post_id={this.props.post_id} /> : null}
                {this.state.comments.sort(function (a, b) { return b.id - a.id }).map(comment => { return <CommentCard users={this.props.users} comment={comment} key={comment.id} userInfo={this.props.userInfo} deleteComment={this.deleteComment} updateComment={this.props.updateComment} /> })}


            </div>
        );
    }
}

export default CommentContainer;