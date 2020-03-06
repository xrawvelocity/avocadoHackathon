/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { Component } from 'react';
import Footer from './Footer';
import Nav from './Nav';
import avocados from '../avocado.json'
import avocadoHealth from '../avocado_health_benefits'
import Celebrities from './Celebrities';

export default class Home extends Component {

    showBenefits = () => {
        console.log(avocadoHealth)
        return avocadoHealth.map(each=>{
            return (
                <div class="benefit">
                <h1 class="benefit-heading">{each.Benefit}</h1>
                <p class="benefit-description">{each.Description}</p>
                </div>
            )
        })
    }
    showRecipes = () => {
        console.log(avocados)
        return avocados.map(each=>{
            return (
                <div>
                <h1>{each.Benefit}</h1>
                <p>{each.Description}</p>
                </div>
            )
        })
    }

    render() {
        return (
            <main id="home" className="home">
                
                <Nav main={false} />
                <div className="home--intro">
                    <div class="home--into__image"></div>
                    <section className="home--intro__quote">
                        <h1 className="heading-primary--quote">Avocado</h1>
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
                        <h1 class="benefit-title">Benefits</h1>
                        {this.showBenefits()}
                        
                        
                    </section>
                   
                    <section id="celebrities" className="home--main__celebrities">
                    <h1 class="benefit-title">Influencers</h1>
                    <Celebrities/>

                    </section>
                </div>
                <Footer />            
            </main>
        )
    }
}
