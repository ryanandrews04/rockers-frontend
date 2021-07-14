import React, { Component } from 'react';
import UserPostContainer from './UserPostContainer';
import UserCommentContainer from './UserCommentContainer';
class MyProfile extends Component {




    state = {
        editImage: false,
        editBio: false,
        newUserImageUrl: this.props.userInfo.token ? this.props.userInfo.user.image : "",
        newUserBio: this.props.userInfo.token ? this.props.userInfo.user.bio : ""
    }

    handleEditImage = (e) => {
        e.preventDefault()
        this.setState({
            editImage: !this.state.editImage,
        })
    }

    handleUpdatedUserImage = (updatedUserImageUrl) => {
        this.setState({
            newUserImageUrl: updatedUserImageUrl
        })
    }

    submitImage = (e) => {
        e.preventDefault()
        this.props.updateUserImage(e, this.state.newUserImageUrl, this.props.userInfo.user)
        this.handleEditImage(e)
    }

    handleEditBio = (e) => {
        e.preventDefault()
        this.setState({
            editBio: !this.state.editBio
        })
    }

    handleUpdatedUserBio = (updatedUserBio) => {
        this.setState({
            newUserBio: updatedUserBio
        })
    }

    submitBio = (e) => {
        e.preventDefault()
        this.props.updateUserBio(e, this.state.newUserBio, this.props.userInfo.user)
        this.handleEditBio(e)
    }

    render() {

        return (
            <div>
                {this.props.userInfo.token ?

                    <div>

                        <h1>{this.props.userInfo.user.username}</h1>

                        <img alt="" src={this.state.newUserImageUrl} />

                        <button onClick={(e) => this.handleEditImage(e)}>Update Profile Picture</button>

                        {this.state.editImage
                            ? <form onSubmit={this.submitImage}>
                                <input type="text" placeholder={"New Image URL"} onChange={(e) => this.handleUpdatedUserImage(e.target.value)}></input>
                                <input type="submit" name="submit" value="Save"></input>
                            </form>
                            : null
                        }

                        <h2>About Me</h2>

                        <h3>{this.state.newUserBio}</h3>

                        <button onClick={(e) => this.handleEditBio(e)}>Update Bio</button>

                        {this.state.editBio
                            ? <form onSubmit={this.submitBio}>
                                <input type="text" placeholder={"New Bio"} onChange={(e) => this.handleUpdatedUserBio(e.target.value)}></input>
                                <input type="submit" name="submit" value="Save"></input>
                            </form>
                            : null
                        }

                        <UserPostContainer posts={this.props.userInfo.user.posts} comments={this.props.comments} users={this.props.users} />

                        <UserCommentContainer posts={this.props.posts} comments={this.props.userInfo.user.comments} users={this.props.users} />

                    </div>

                    :

                    //If not logged in
                    <div>
                        <h1>Please login to view profile!</h1>
                        <h3><a href="http://localhost:3001/login">Login</a></h3>
                        <h3>Not a rocker yet? <a href="http://localhost:3001/signup">Register Here</a></h3>
                    </div>}

            </div>
        );
    }
}

export default MyProfile;