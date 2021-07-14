import React, { Component } from 'react';
import UserPostCommentCard from './UserPostCommentCard';

class UserPostComments extends Component {
    render() {
        return (
            <div>
                {this.props.comments.sort(function (a, b) { return b.id - a.id }).map(comment => <UserPostCommentCard comment={comment} users={this.props.users} />)}
            </div>
        );
    }
}

export default UserPostComments;