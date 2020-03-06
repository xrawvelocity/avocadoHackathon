import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Nav extends Component {

    hideNav = () => {
        document.getElementById("navi-toggle").checked = false;
    }

    render() {
        return (
            this.props.main ? <div className="navigation navigation-animation"> 
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>

            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li onClick={this.hideNav} className="navigation__item"><a href="#home" className="navigation__link">Home</a></li>
                    <li onClick={this.hideNav} className="navigation__item"><a href="#benefits" className="navigation__link">Benefits</a></li>
                    <li onClick={this.hideNav} className="navigation__item"><a href="#nutrition" className="navigation__link">Nutrition Facts</a></li>
                    <li onClick={this.hideNav} className="navigation__item"><a href="#celebrities" className="navigation__link">Celebrities</a></li>
                </ul>
            </nav>
            </div>
            
            
            : <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>

            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li onClick={this.hideNav} className="navigation__item"><a href="#home" className="navigation__link">Home</a></li>
                    <li onClick={this.hideNav} className="navigation__item"><a href="#benefits" className="navigation__link">Benefits</a></li>
                    <li onClick={this.hideNav} className="navigation__item"><a href="#nutrition" className="navigation__link">Nutrition Facts</a></li>
                    <li onClick={this.hideNav} className="navigation__item"><a href="#celebrities" className="navigation__link">Celebrities</a></li>
                </ul>
            </nav>
            </div>
            
            
            
        )
    }
}
