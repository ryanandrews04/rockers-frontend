import React, { Component } from 'react';
import CommentContainer from './CommentContainer';

class PostCard extends Component {


    state = {
        viewComments: false
    }

    handleChange = () => {
        this.setState({
            viewComments: !this.state.viewComments
        })
    }

    render() {

        const user = (this.props.users.filter(user => user.id === this.props.post.user_id))

        return (
            <div className="card" style={{ color: "#000", background: "gray" }}>

                {/* <h4>{user[0].username}:</h4> */}

                <h3>{this.props.post.title}</h3>

                <h5>{this.props.post.text}</h5>

                {this.props.post.image ? <img alt={null} src={this.props.post.image} /> : null}

                <br></br>

                <button onClick={this.handleChange}>Comments</button>

                {this.state.viewComments ?
                    <CommentContainer users={this.props.users} comments={this.props.post.comments} post_id={this.props.post.id} /> : null
                }




            </div >
        );
    }
}

export default PostCard;