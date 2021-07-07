import React, { Component } from 'react';
import CommentCard from './CommentCard';
class CommentContainer extends Component {
    render() {
        return (
            <div>
                <h3>Comments</h3>
                {this.props.comments.map(comment => { return <CommentCard users={this.props.users} comment={comment} key={comment.id} /> })}
            </div>
        );
    }
}

export default CommentContainer;