import React, { Component } from 'react'


export default class AmazonItem extends Component {

    limitTitle = (title, limit = 50) => {
        const newTitle = [];
        if(title.length > limit){
            title.split(' ').reduce((acc,cur) => {
                if(acc + cur.length <= limit){
                    newTitle.push(cur);
                }
                return acc + cur.length;
            },0);
            return `${newTitle.join(' ')}...`;
        }
        return title;
    };

    
    render() {
        return (
            
            <div className="amazon-item">
                <div className="amazon-item__img--container">
                    <img className="amazon-item__img" src={this.props.image} alt="product"/>
                </div>
                <div className="amazon-item__text">
                    <h2 className="amazon-item__title">{this.limitTitle(this.props.title)}</h2>
                    <span className="amazon-item__price">{this.props.price}</span>
                    <div className="amazon-item__btn">
                        <a rel="noopener noreferrer" target="_blank" className="amazon-item__btn-buy" href={this.props.link}>Buy now</a>
                        {this.props.home ? 
                            <button onClick={() => this.props.addToFavoriteItems({
                            image:this.props.image,
                            title:this.props.title,
                            price:this.props.price,
                            link:this.props.link
                        })}
                        className="amazon-item__btn-fav">Add to Favorites</button>:
                        <button onClick={() => {
                            console.log(this.props.image);
                            this.props.removeFromFavoriteItems(this.props.image)
                            }
                        }
                        className="amazon-item__btn-fav">Remove from Favorites</button>
                        }
                    </div>
                </div>
            </div>
            
        )
    }
}
