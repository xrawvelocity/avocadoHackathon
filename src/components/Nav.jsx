import React, { Component } from 'react'


export default class Nav extends Component {
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
                    <li className="navigation__item"><a href="#" className="navigation__link">Profile</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Youtube</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Amazon</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Podcasts</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Contact</a></li>
                </ul>
            </nav>
        </div>
        )
    }
}
