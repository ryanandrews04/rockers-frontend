import React, { Component } from 'react';

class UserCommentCard extends Component {

    render() {

        const post = this.props.posts.find(post => post.id === this.props.comment.post_id)
        const user = this.props.users.find(user => user.id === post.user_id)
        return (
            <div className="card" style={{ margin: "5px", color: "#000", background: "gray" }}>
                <h4>Commented "{this.props.comment.text}" on {user.username}'s Post:</h4>

                <h5>{post.title}</h5>


            </div>
        );
    }
}

export default UserCommentCard;