import React, { Component } from 'react';
import UserCommentCard from './UserCommentCard';

class UserCommentContainer extends Component {
    render() {
        return (
            <div className={"commentContainer"}>
                <h3 className={"myProfileText"}>My Comments</h3>
                {this.props.comments.sort(function (a, b) { return b.id - a.id }).map(comment => <UserCommentCard comment={comment} users={this.props.users} posts={this.props.posts} />)}
            </div>
        );
    }
}

export default UserCommentContainer;