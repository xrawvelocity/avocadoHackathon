import React, { Component } from 'react'

export default class BGvid extends Component {
    render() {
        return (
            !this.props.fav ?
            <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop>
                    <source src="./videos/lakeBGVid.mp4" type="video/mp4"/>
                    <source src="./videos/lakeBGVid.mp4" type="video/ogg"/>
                    
                    Your browser is not supported!
                </video>
            </div>
            :
            <div className="bg-video-fav">
                <video className="bg-video-fav__content" autoPlay muted loop>
                    <source src="./videos/lakeBGVid.mp4" type="video/mp4"/>
                    <source src="./videos/lakeBGVid.mp4" type="video/ogg"/>
                    
                    Your browser is not supported!
                </video>
            </div>
        )
    }
}
