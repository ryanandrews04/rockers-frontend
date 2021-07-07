import React, { Component } from 'react';

class newPostForm extends Component {

    state = {
        title: "",
        text: "",
        image: "",
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/api/v1/posts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({
                user_id: this.props.userInfo.user.id,
                title: this.state.title,
                text: this.state.text,
                image: this.state.image
            })
        })
            .then(res => res.json())
            .then(newPost => {
                this.props.createPost(newPost)
                this.setState({
                    title: "",
                    text: "",
                    image: ""
                })
            })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} type="text" placeholder="title"></input>
                    <input value={this.state.text} onChange={(e) => this.setState({ text: e.target.value })} type="text" placeholder="Type your post here"></input>
                    <input value={this.state.image} onChange={(e) => this.setState({ image: e.target.value })} type="text" placeholder="Optional image URL here"></input>
                    <input type="submit" name="submit" value="Post"></input>
                </form>
            </div>
        );
    }
}

export default newPostForm;