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
    showNutrition = () => {
        console.log(avocados)
        return avocados.map(each=>{
            return (
                <div class="nutrition">
                <h1 class="nutrition-heading">{each.Description}</h1>
                <p class="nutrition-description">Calories: {each.calories}</p>
                <p class="nutrition-description">Carbs: {each.carbohydrate}</p>
                <p class="nutrition-description">Fat: {each.fat}</p>
                <p class="nutrition-description">Protein: {each.protein}</p>
                </div>
            )
        })
    }

    

    render() {
        return (
            <main id="home" className="home">
                
                <Nav main={false} />
                <div className="home--intro">
                
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
                    <section id="nutrition" className="home--main__nutrition">
                        <h1 class="nutrition-title">Nutrition Facts</h1>
                        {this.showNutrition()}
                        
                        
                    </section>
                   
                    <section id="celebrities" className="home--main__celebrities">
                    <h1 class="benefit-title">Influencers</h1>
                    <Celebrities/>
                    <p class="random benefit-description">Influencers love avocadoes! Many of them may be rich, but you can see that they love the beautifying affects of avocadoes just as much as everyone else. Miley and Kim K both vouch the holistic benefits of these fruits and use them as masks habitually. Avocadoes are superfoods for your face too! Mash and apply to your face to get glowy skin on the cheap.</p>
                    </section>
                </div>
                <Footer />            
            </main>
        )
    }
}
