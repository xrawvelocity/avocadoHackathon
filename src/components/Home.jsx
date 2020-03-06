/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Nav from './Nav';
import avocados from '../avocado.json'
import avocadoHealth from '../avocado_health_benefits'

export default class Home extends Component {

    showBenefits = () => {
        console.log(avocadoHealth)
    }

    render() {
        return (
            <main className="home">
                <div className="header__logo-box">
                    <Link to="/"><div className="header__logo"></div></Link>
                </div>    
                <Nav main={false} />
                <div className="home--intro">
                    
                    <section className="home--intro__quote">
                        <h1 className="heading-primary--quote">Live Life Your Way.</h1>
                    </section>
                    <a href="#benefits">
                    <div className="arrow">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    </a>
                </div>
                
                <div className="home--main">
                    <section id="benefits" className="home--main__benefits">
                        <h1>Benefits</h1>
                        {this.showBenefits()}
                        
                        
                    </section>
                    <section id="recipes" className="home--main__recipes">
                        


                    </section>
                    <section id="celebrities" className="home--main__celebrities">
                        


                    </section>
                </div>
                <Footer />            
            </main>
        )
    }
}
