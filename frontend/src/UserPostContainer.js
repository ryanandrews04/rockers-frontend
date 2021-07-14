import React, { Component } from 'react';
import UserPostCard from './UserPostCard';

class UserPostContainer extends Component {
    render() {
        return (
            <div>
                <h2>My Posts</h2>
                {this.props.posts.sort(function (a, b) { return b.id - a.id }).map(post => <UserPostCard post={post} key={post.id} comments={this.props.comments} users={this.props.users} />)}
            </div>
        );
    }
}

export default UserPostContainer;