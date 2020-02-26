import React, { Component } from 'react'


export default class AmazonItem extends Component {

    render() {
        return (
            
            <div className="amazon-item">
                <div className="amazon-item__img--container">
                    <img className="amazon-item__img" src={this.props.image} alt="product"/>
                </div>
                <h2 className="amazon-item__title">{this.props.title}</h2>
                <span className="amazon-item__price">{this.props.price}</span>
                <a rel="noopener noreferrer" target="_blank" className="amazon-item__btn" href={this.props.link}>Buy now</a>
            </div>
            
        )
    }
}
