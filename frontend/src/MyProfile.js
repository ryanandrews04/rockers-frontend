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
            <div >
                {this.props.userInfo.token ?
                    <div className={"profileImgAndBio"}>
                        <div className={"myProfile"}>
                            <div className={"myProfileImgDiv"}>
                                <h1 className={"myProfileText"}>{this.props.userInfo.user.username}</h1>

                                <img className={"profileImg"} alt="" src={this.state.newUserImageUrl} />

                                <button className={"editProfileBtn"} onClick={(e) => this.handleEditImage(e)}>{<img className={"editProfileBtnImg"} src="https://icons-for-free.com/iconfiles/png/512/camera-131965017355314519.png" />}</button>

                                {this.state.editImage
                                    ? <form onSubmit={this.submitImage}>
                                        <input type="text" placeholder={"New Image URL"} onChange={(e) => this.handleUpdatedUserImage(e.target.value)}></input>
                                        <input type="submit" name="submit" value="Save"></input>
                                    </form>
                                    : null
                                }
                            </div>
                            <div className={"myProfileBioDiv"}>
                                <h1 className={"myProfileText"}>About Me</h1>

                                <h3 className={"myProfileText"}>{this.state.newUserBio}</h3>

                                <button className={"editBioBtn"} onClick={(e) => this.handleEditBio(e)}><img className={"editBioBtnImg"} src="https://www.pngitem.com/pimgs/m/114-1146547_new-post-new-post-icon-svg-hd-png.png" /></button>

                                {this.state.editBio
                                    ? <form onSubmit={this.submitBio}>
                                        <input type="text" placeholder={"New Bio"} onChange={(e) => this.handleUpdatedUserBio(e.target.value)}></input>
                                        <input type="submit" name="submit" value="Save"></input>
                                    </form>
                                    : null
                                }

                            </div>
                        </div>

                        <UserPostContainer posts={this.props.userInfo.user.posts} comments={this.props.comments} users={this.props.users} />

                        <UserCommentContainer posts={this.props.posts} comments={this.props.userInfo.user.comments} users={this.props.users} />

                    </div>

                    :

                    //If not logged in
                    <div style={{ textAlign: "center", marginLeft: "30%", marginRight: "30%", background: "#e3e3e3", borderRadius: "10px", paddingTop: "10px", paddingBottom: "10px" }}>
                        <h1 style={{ background: "#e3e3e3", borderRadius: "10px", color: "black" }} className={"myProfileText"}>Please login to view profile!</h1>
                        <h3 style={{ background: "#e3e3e3", borderRadius: "10px", color: "black" }}><a href="http://localhost:3001/login">Login</a></h3>
                        <h3 style={{ background: "#e3e3e3", borderRadius: "10px", color: "black" }}>Not a rocker yet? <a href="http://localhost:3001/signup">Register Here</a></h3>
                    </div>}

            </div>
        );
    }
}

export default MyProfile;