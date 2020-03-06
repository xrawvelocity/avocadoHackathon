import React, { Component } from 'react'

let currentYear = new Date().getFullYear();
export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
            
            <div className="row">
                
                <p className="footer__copyright">

                    &copy; {currentYear} Built by <span  className="footer__link">Victor Fernandez, Alexis Frankel, and Sergio Mojica</span>
                </p>
                
            </div>
        </footer>
        )
    }
}
