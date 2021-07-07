import React, { Component } from 'react';



class CommentCard extends Component {

    render() {

        const user = (this.props.users.filter(user => user.id === this.props.comment.user_id))

        return (
            <div className="card" style={{ color: "#000", background: "pink" }}>


                <h5>{user[0].username}:</h5>


                <h5>{this.props.comment.text}</h5>
                {this.props.comment.image ? <img alt="no img" src={this.props.comment.image} /> : null}







            </div >
        );
    }
}

export default CommentCard;