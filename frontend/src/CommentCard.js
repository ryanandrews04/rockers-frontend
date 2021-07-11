import React, { Component } from 'react';



class CommentCard extends Component {

    state = {
        confirmDelete: false,
        edit: false,
        commentText: this.props.comment.text,
        newComment: ""
    }


    handleDelete = () => {
        this.setState({
            confirmDelete: !this.state.confirmDelete,
        })
    }

    handleEdit = (e) => {
        e.preventDefault()
        this.setState({
            edit: !this.state.edit,
        })
    }

    handleUpdatedComment = (updatedComment) => {
        this.setState({
            newComment: updatedComment,
        })
    }

    submit = (e) => {
        this.props.updateComment(e, this.state.newComment, this.props.comment)
        this.handleEdit(e)
    }

    render() {

        const user = (this.props.users.filter(user => user.id === this.props.comment.user_id))

        return (
            <div className="card" style={{ color: "#000", background: "pink" }}>


                <h5>{user[0].username}:</h5>

                {this.props.userInfo.token ? (this.props.userInfo.user.id === this.props.comment.user_id ? <button onClick={this.handleDelete}>🗑</button> : null) : null}

                {this.state.confirmDelete ? <div><h5>Are you sure you want to delete this comment?</h5> <button onClick={() => this.props.deleteComment(this.props.comment)}>Yes</button> <button onClick={this.handleDelete}>No</button></div> : null}

                {this.props.userInfo.token ? (this.props.userInfo.user.id === this.props.comment.user_id ? <button onClick={(e) => this.handleEdit(e)}>Add to Comment</button> : null) : null}

                {
                    this.state.edit
                        ? <form onSubmit={this.submit}>
                            <input type="text" placeholder={"New Text"} onChange={(e) => this.handleUpdatedComment(e.target.value)}></input>
                            <input type="submit" name="submit" value="Save"></input>
                        </form>
                        : null
                }

                <h5>{this.state.commentText}</h5>
                {this.props.comment.image ? <img alt="no img" src={this.props.comment.image} /> : null}







            </div >
        );
    }
}

export default CommentCard;