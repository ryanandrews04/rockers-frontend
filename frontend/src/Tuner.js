import React, { Component } from 'react'
import { Howl, Howler } from 'howler'
import Low_E from "./AudioClips/Low_E.mp3"
import Low_A from "./AudioClips/Low_A.mp3"
import Open_D from "./AudioClips/Open_D.mp3"
import Open_G from "./AudioClips/Open_G.mp3"
import Open_b from "./AudioClips/Open_b.mp3"
import High_e from "./AudioClips/High_e.mp3"


const audioClips = [
    { sound: Low_E, label: "E" },
    { sound: Low_A, label: "A" },
    { sound: Open_D, label: "D" },
    { sound: Open_G, label: "G" },
    { sound: Open_b, label: "b" },
    { sound: High_e, label: "e" }
]


class Tuner extends Component {

    soundPlay = (src) => {
        const sound = new Howl({
            src
        })
        sound.play()
    }

    renderButtonAndSound = () => {
        return audioClips.map((soundObj, index) => {
            return (
                <button key={index} onClick={() => this.soundPlay(soundObj.sound)}>
                    {soundObj.label}
                </button>
            )
        })
    }

    render() {
        Howler.volume(1.0)
        return (
            <div>
                {this.renderButtonAndSound()}
            </div>
        );
    }
}

export default Tuner;