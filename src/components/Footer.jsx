import React, { Component } from 'react'

let currentYear = new Date().getFullYear();
export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
            <div className="footer__logo-box">

                <img className="footer__logo" src="./images/sanspicTextNoBG.svg" alt="Logo"/>
            </div>
            <div className="row">
                
                <p className="footer__copyright">

                    &copy; {currentYear} Built by <a href="https://github.com/xrawvelocity" className="footer__link">Victor Fernandez</a>
                </p>
                
            </div>
        </footer>
        )
    }
}
