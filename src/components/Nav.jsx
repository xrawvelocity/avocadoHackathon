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
                    <li className="navigation__item">Profile</li>
                    <li className="navigation__item">Youtube</li>
                    <li className="navigation__item">Amazon</li>
                    <li className="navigation__item">Podcasts</li>
                    <li className="navigation__item">Contact</li>
                </ul>
            </nav>
        </div>
        )
    }
}
