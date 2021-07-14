import React, { Component } from 'react';
import UserPostComments from './UserPostComments';

class UserPostCard extends Component {

    state = {
        viewComments: false
    }

    handleChange = () => {
        this.setState({
            viewComments: !this.state.viewComments
        })
    }

    render() {
        return (

            <div className="card" style={{ margin: "5px", color: "#000", background: "gray" }}>
                <h3>{this.props.post.title}</h3>
                <h5>{this.props.post.text}</h5>
                <button onClick={this.handleChange}>Comments</button>
                {this.state.viewComments ? <UserPostComments comments={this.props.comments.filter(comment => comment.post_id === this.props.post.id)} users={this.props.users} /> : null}
            </div>
        );
    }
}

export default UserPostCard;