import React, { Component } from 'react';
import BGvid from './BGvid';
import Footer from './Footer';
import AmazonItem from './AmazonItem';
import Nav from './Nav';
import AdBlockDetect from 'react-ad-block-detect';
import uuid from 'uuid';

export default class Favorites extends Component {

    state = {
        favoriteVideos: [],
        favoriteItems: []
    }

    componentDidMount(){
        if(localStorage.getItem('favoriteVideos')){
            this.setState({
                favoriteVideos:JSON.parse(localStorage.getItem('favoriteVideos'))
            });
        }
        else {
            this.setState({
                favoriteVideos: []
            })
        }
        if(localStorage.getItem('favoriteItems')){
            this.setState({
                favoriteItems:JSON.parse(localStorage.getItem('favoriteItems'))
            });
        }
        else {
            this.setState({
                favoriteItems: []
            })
        }
    }

    removeFromFavorites = (video) => {
        let removeIndex = this.state.favoriteVideos.map(item=>item.value).indexOf(video);
        console.log(removeIndex)
        this.state.favoriteVideos.splice(removeIndex,1)
        localStorage.setItem("favoriteVideos",JSON.stringify(this.state.favoriteVideos))
        window.location.reload()
    }

    showVideos = () => {
        console.log('show videos')
        return this.state.favoriteVideos.map(eachVideo => {
            return (
                <div key={uuid.v4()} className="tile">
                    <div className="container">

                        <iframe width="540" height="330.625" title='test' src={`https://www.youtube.com/embed/${eachVideo.value}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                        <button onClick={() => this.removeFromFavorites(eachVideo.id.videoId)} className="tile--yt__fav-btn">Remove from Favorites</button>

                    </div>
                </div>
            )
        }) 
    }

    showAmazon = () => {
        console.log('favorite items state: ', this.state.favoriteItems)
        return this.state.favoriteItems.map(eachItem=> {
            
            if(eachItem.value.title !== ''){
                return (
                    <div key={uuid.v4()} className="tile-amazon">
                        <AmazonItem title={eachItem.value.title} image={eachItem.value.image} link={`https://www.amazon.com/${eachItem.value.url}`} price={eachItem.value.price} removeFromFavorites={this.removeFromFavorites} home={false}/>
                    </div>
                )           
            }
        }) 
    }
    
    showLoading = () => {
        return <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    }

    render() {
        return (
            <main className="home">
                <Nav main={false} />
                <div className="home--intro">
                    <BGvid />
                    <section className="home--intro__quote">
                        <h1 className="heading-primary--quote">Favorites</h1>
                    </section>
                    <div className="arrow">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                
                <div className="home--main">
                    <section className="home--main__youtube">

                        <a href="http://www.youtube.com">
                            <img className="home--main__youtube--img" alt="YT logo" src="./images/yt_logo_rgb_dark.png"/>
                        </a>
                        <div className="home--main__youtube--carousel">
                            <div className="row--youtube">
                                <div className="row__inner">
                                    {this.showVideos()}
                                </div>
                            </div>
                        </div>
                        
                    </section>
                    <section className="home--main__amazon">
                        <AdBlockDetect>
                            <p>please disable adblock to see this amazon section</p>
                        </AdBlockDetect>
                        <a href="http://www.amazon.com">
                            <img className="home--main__amazon--img" alt="Amazon logo" src="./images/amazon-logo.png"/>
                        </a>
                        
                        <div className="home--main__amazon--carousel">
                        <div className="row--amazon">
                            <div className="row__inner-amazon">
                                {this.showAmazon()}
                            </div>
                        </div>                  
                        </div>
                    </section>
                </div>
                <Footer />            
            </main>
        )
    }
}
