import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BGvid from './BGvid';

export default class Header extends Component {
    render() {
        return (
        <header className="header">

            <BGvid />

            <div className="header__text-box-about">

                <h1 className="heading-primary-about">
                    <span className="heading-primary-about--about">Integrate any lifestyle by keeping up with the best resources and products</span>
                </h1>

                <div className="btn-home">
                    <Link to="/login"><button className="btn-home__log-in">Log in</button></Link>
                    <Link to="/signup"><button className="btn-home__sign-up">Sign up</button></Link>
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
