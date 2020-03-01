import React, { Component } from 'react';
import BGvid from './BGvid';
import Footer from './Footer';
import AmazonItem from './AmazonItem';
import Nav from './Nav';
// import AdBlockDetect from 'react-ad-block-detect';
import uuid from 'uuid';

export default class AmazonFavorites extends Component {
    state = {
        favoriteItems: [],
        favoriteItems2: []
    }

    componentDidMount(){
        if(localStorage.getItem('favoriteItems')){
            this.setState({
                favoriteItems:JSON.parse(localStorage.getItem('favoriteItems')),
                favoriteItems2:JSON.parse(localStorage.getItem('favoriteItems'))
            });
        }
        else {
            this.setState({
                favoriteItems: [],
                favoriteItems2: []
            })
        }
    }

    removeFromFavoriteItems = async (itemImg) => {
        let copyFav = [...this.state.favoriteItems]
        let removeIndex = copyFav.map(eachItem=>eachItem.value.image).indexOf(itemImg);
        copyFav.splice(removeIndex,1)
        await this.setState({
            favoriteItems: copyFav
        })
        localStorage.setItem("favoriteItems",JSON.stringify(this.state.favoriteItems))
    }

    showAmazon = () => {
        console.log('favorite items state: ', this.state.favoriteItems)
        // eslint-disable-next-line array-callback-return
        return this.state.favoriteItems.map(eachItem=> {
            
            if(eachItem.value.title !== ''){
                return (
                    <div key={uuid.v4()} className="amazon-fav--item">
                        <AmazonItem title={eachItem.value.title} image={eachItem.value.image} link={`https://www.amazon.com/${eachItem.value.url}`} price={eachItem.value.price} removeFromFavoriteItems={this.removeFromFavoriteItems} home={false}/>
                    </div>
                )           
            }
        }) 
    }

    showLoading = () => {
        return <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    }

    handleChange = (e) => {
        let itemList = [...this.state.favoriteItems2]
        console.log(itemList)
        let filteredItem = itemList.filter(eachItem=>{
        return eachItem.value.title.toLowerCase().includes(e.target.value.toLowerCase())      
        })
        if(filteredItem){
        this.setState({
            favoriteItems:filteredItem
        })
        }
    }

    render() {
        return (
            <main className="amazon-fav">
                <Nav main={false} />
                <div className="amazon-fav__logo-box">
                    <div className="amazon-fav__logo"></div>
                </div>
                <div className="amazon-fav--intro">
                    <BGvid fav={true}/>
                    <section className="amazon-fav--intro__quote">
                        <h1 className="amazon-fav--quote">Amazon Favorites</h1>
                    </section>
                    <div className="arrow">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                
                <div>
                    
                    <section className="amazon-fav--main">
                        
                        <a href="http://www.amazon.com">
                            <img className="amazon-fav--img" alt="Amazon logo" src="./images/amazon_logo-white.png"/>
                        </a>
                        
                        <input onChange={this.handleChange} name="searchVideo" className="youtube-fav--search" type='text' placeholder="Search item title"/>

                        <div className="amazon-fav--grid">
                            {this.showAmazon()}
                        </div>      
                        
                    </section>
                </div>
                <Footer />
            </main>
        )
    }
}
