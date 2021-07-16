import React, { Component } from 'react'
import { Howl, Howler } from 'howler'
import Low_E from "./AudioClips/Low_E.mp3"
import Low_A from "./AudioClips/Low_A.mp3"
import Open_D from "./AudioClips/Open_D.mp3"
import Open_G from "./AudioClips/Open_G.mp3"
import Open_b from "./AudioClips/Open_b.mp3"
import High_e from "./AudioClips/High_e.mp3"
import dropDlowD from "./AudioClips/dropDlowD.mp3"
import openChighC from "./AudioClips/openChighC.mp3"
import openClowC from "./AudioClips/openClowC.mp3"
import openCmiddleC from "./AudioClips/openCmiddleC.mp3"
import openDhighA from "./AudioClips/openDhighA.mp3"
import openDhighF from "./AudioClips/openDhighF.mp3"
import openGhighD from "./AudioClips/openGhighD.mp3"
import openGlowG from "./AudioClips/openGlowG.mp3"


const StdAudioClips = [
    { sound: Low_E, label: "E" },
    { sound: Low_A, label: "A" },
    { sound: Open_D, label: "D" },
    { sound: Open_G, label: "G" },
    { sound: Open_b, label: "B" },
    { sound: High_e, label: "E" }
]

const dropDAudioClips = [
    { sound: dropDlowD, label: "D" },
    { sound: Low_A, label: "A" },
    { sound: Open_D, label: "D" },
    { sound: Open_G, label: "G" },
    { sound: Open_b, label: "B" },
    { sound: High_e, label: "E" }
]

const openGAudioClips = [
    { sound: dropDlowD, label: "D" },
    { sound: openGlowG, label: "G" },
    { sound: Open_D, label: "D" },
    { sound: Open_G, label: "G" },
    { sound: Open_b, label: "B" },
    { sound: openGhighD, label: "D" }
]

const openDAudioClips = [
    { sound: dropDlowD, label: "D" },
    { sound: Low_A, label: "A" },
    { sound: Open_D, label: "D" },
    { sound: openDhighF, label: "F#" },
    { sound: openDhighA, label: "A" },
    { sound: openGhighD, label: "D" }
]

const openCAudioClips = [
    { sound: openClowC, label: "C" },
    { sound: openGlowG, label: "G" },
    { sound: openCmiddleC, label: "C" },
    { sound: Open_G, label: "G" },
    { sound: openChighC, label: "C" },
    { sound: High_e, label: "E" }
]


class Tuner extends Component {

    state = {
        tuning: "standard"
    }

    select = (e) => {
        this.setState({
            tuning: e.target.value
        })
    }

    soundPlay = (src) => {
        const sound = new Howl({
            src
        })
        sound.play()
    }

    renderButtonAndSound = () => {
        return this.state.tuning === "standard" ? StdAudioClips.map((soundObj, index) => {
            return (

                <button className={`string${index}`} key={index} onClick={() => this.soundPlay(soundObj.sound)}>
                    {soundObj.label}
                </button>

            )
        })
            : this.state.tuning === "dropD" ? dropDAudioClips.map((soundObj, index) => {
                return (

                    <button className={`string${index}`} key={index} onClick={() => this.soundPlay(soundObj.sound)}>
                        {soundObj.label}
                    </button>

                )
            })
                : this.state.tuning === "openG" ? openGAudioClips.map((soundObj, index) => {
                    return (

                        <button className={`string${index}`} key={index} onClick={() => this.soundPlay(soundObj.sound)}>
                            {soundObj.label}
                        </button>

                    )
                })
                    : this.state.tuning === "openD" ? openDAudioClips.map((soundObj, index) => {
                        return (

                            <button className={`string${index}`} key={index} onClick={() => this.soundPlay(soundObj.sound)}>
                                {soundObj.label}
                            </button>

                        )
                    })
                        : this.state.tuning === "openC" ? openCAudioClips.map((soundObj, index) => {
                            return (

                                <button className={`string${index}`} key={index} onClick={() => this.soundPlay(soundObj.sound)}>
                                    {soundObj.label}
                                </button>

                            )
                        })
                            : null
    }

    handleChange = (e) => {
        this.setState({
            tuning: e.target.value
        })
    }

    render() {
        Howler.volume(1.0)
        return (

            <div>
                <div style={{ textAlign: "center" }}>
                    <h3 className={"tuningHeader"}>Select Tuning</h3>
                    <select className={"tunerSelect"} value={this.state.tuning} onChange={this.handleChange}>
                        <option selected value="standard">Standard</option>
                        <option selected value="dropD">Drop D</option>
                        <option selected value="openG">Open G</option>
                        <option selected value="openD">Open D</option>
                        <option selected value="openC">Open C</option>
                    </select>
                </div>
                <br></br>
                {this.renderButtonAndSound()}
                <img className={"tunerImg"} src="https://static.thenounproject.com/png/171509-200.png" />
            </div>
        );
    }
}

export default Tuner;