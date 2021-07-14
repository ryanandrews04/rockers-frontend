import React, { Component } from 'react';



class UserPostCommentCard extends Component {

    render() {

        const user = (this.props.users.filter(user => user.id === this.props.comment.user_id))

        return (
            <div>
                <h5><img alt="" src={user[0].image} style={{ height: "20px", width: "20px" }} />{user[0].username}:</h5>
                <h5>{this.props.comment.text}</h5>
                {this.props.comment.image ? <img alt="no img" src={this.props.comment.image} /> : null}
            </div>
        );
    }
}

export default UserPostCommentCard;