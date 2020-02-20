import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
        <header className="header">
            
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Welcome</span>
                    <span className="heading-primary--sub">to your</span>
                </h1>

                <div className="header__logo-box">
                    <div className="header__logo"></div>
                </div>

            </div>
        </header>
        )
    }
}
