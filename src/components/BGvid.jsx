import React, { Component } from 'react'

export default class BGvid extends Component {
    render() {
        return (
            <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop>
                    <source src="./videos/lakeBGVid.mp4" type="video/mp4"/>
                    <source src="./videos/lakeBGVid.mp4" type="video/ogg"/>
                    
                    Your browser is not supported!
                </video>
            </div>
        )
    }
}
