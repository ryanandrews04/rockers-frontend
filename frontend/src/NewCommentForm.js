import React, { Component } from 'react';

class NewCommentForm extends Component {

    state = {
        text: "",
        image: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/api/v1/comments', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({
                user_id: this.props.userInfo.user.id,
                text: this.state.text,
                image: this.state.image,
                post_id: this.props.post_id
            })
        })
            .then(res => res.json())
            .then(newComment => {
                this.props.createComment(newComment)
                this.setState({
                    text: "",
                    image: ""
                })
            })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.text} onChange={(e) => this.setState({ text: e.target.value })} type="text" placeholder="Type your comment here"></input>
                    <input value={this.state.image} onChange={(e) => this.setState({ image: e.target.value })} type="text" placeholder="Optional image URL here"></input>
                    <input type="submit" name="submit" value="Post"></input>
                </form>
            </div>
        );
    }
}

export default NewCommentForm;