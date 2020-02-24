import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Nav extends Component {

    hideNav = () => {
        document.getElementById("navi-toggle").checked = false;
    }

    render() {
        return (
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>

            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li onClick={this.hideNav} className="navigation__item"><Link to="/profile" className="navigation__link">Profile</Link></li>
                    <li onClick={this.hideNav} className="navigation__item"><Link to="/home" className="navigation__link">Home</Link></li>
                    <li onClick={this.hideNav} className="navigation__item"><Link to="/" className="navigation__link">Start</Link></li>
                    <li onClick={this.hideNav} className="navigation__item"><Link to="/" className="navigation__link">Podcasts</Link></li>
                    <li onClick={this.hideNav} className="navigation__item"><Link to="/" className="navigation__link">Contact</Link></li>
                </ul>
            </nav>
        </div>
        )
    }
}
