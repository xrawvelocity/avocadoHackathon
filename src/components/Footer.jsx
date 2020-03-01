import React, { Component } from 'react'

let currentYear = new Date().getFullYear();
export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
            <div className="footer__logo-box">

                <img className="footer__logo" src="./images/sanspicTextNoBG.svg" alt="Logo"/>
                <div className="footer--link">
                    <a className="footer--link__github" href="https://github.com/xrawvelocity" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    <a className="footer--link__linkedin" href="https://www.linkedin.com/in/victor--fernandez" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
            <div className="row">
                
                <p className="footer__copyright">

                    &copy; {currentYear} Built by <span  className="footer__link">Victor Fernandez</span>
                </p>
                
            </div>
        </footer>
        )
    }
}
