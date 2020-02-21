import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
        <header className="header">

            <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop>
                    <source src="./videos/lakeBGVid.mp4" type="video/mp4"/>
                    <source src="./videos/lakeBGVid.mp4" type="video/ogg"/>
                    
                    Your browser is not supported!
                </video>
            </div>

            <div className="header__logo-box">
                <div className="header__logo"></div>
            </div>

            <div className="header__text-box-about">
                <h1 className="heading-primary-about">
                    <span className="heading-primary-about--about">Integrate any lifestyle by keeping up with the best resources and products</span>
                </h1>
                <div className="btn-home">
                    <button className="btn-home__log-in">Log in</button>
                    <button className="btn-home__sign-up">Sign up</button>
                </div>
            </div>
                
            <div className="header__text-box">
            
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Welcome</span>
                    <span className="heading-primary--sub">to your</span>
                </h1>
                

                <div className="header__logo-box-text">
                    <div className="header__logo-text"></div>
                </div>

            </div>
        </header>
        )
    }
}
