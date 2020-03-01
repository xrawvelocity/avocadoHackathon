import React, { Component } from 'react';
import BGvid from './BGvid';
import Footer from './Footer';
import Nav from './Nav';
import uuid from 'uuid';

export default class YoutubeFavorites extends Component {
    state = {
        favoriteVideos: [],
        favoriteVideos2: []
    }

    componentDidMount(){
        if(localStorage.getItem('favoriteVideos')){
            this.setState({
                favoriteVideos:JSON.parse(localStorage.getItem('favoriteVideos')),
                favoriteVideos2:JSON.parse(localStorage.getItem('favoriteVideos'))
            });
        }
        else {
            this.setState({
                favoriteVideos: [],
                favoriteVideos2: []
            })
        }
    }

    removeFromFavoriteVideos = async (video) => {
        let copyFav = [...this.state.favoriteVideos]
        let removeIndex = copyFav.map(item=>item.value).indexOf(video);
        copyFav.splice(removeIndex,1)
        await this.setState({
            favoriteVideos: copyFav
        })
        localStorage.setItem("favoriteVideos",JSON.stringify(this.state.favoriteVideos))
    }

    showVideos = () => {
        console.log('show videos')
        return this.state.favoriteVideos.map(eachVideo => {
            return (
                <div key={uuid.v4()} className="youtube-fav--video">
                    

                        <iframe width="100%" height="100%" title='test' src={`https://www.youtube.com/embed/${eachVideo.value}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                        <button onClick={() => {
                            this.removeFromFavoriteVideos(eachVideo.value)
                            }
                        }
                        className="tile--yt__fav-btn">Remove<i className="fas fa-times-circle tile--yt__fav-btn__remove"></i></button>

                    
                </div>
            )
        }) 
    }

    showLoading = () => {
        return <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    }

    handleChange = (e) => {
        let videoList = [...this.state.favoriteVideos2]
        console.log(videoList)
        let filteredVideo = videoList.filter(eachVideo=>{
        return eachVideo.title.toLowerCase().includes(e.target.value.toLowerCase())      
        })
        if(filteredVideo){
        this.setState({
            favoriteVideos:filteredVideo
        })
        }
    }

    render() {
        return (
            <main className="youtube-fav">
                <Nav main={false} />
                <div className="youtube-fav__logo-box">
                    <div className="youtube-fav__logo"></div>
                </div>    
                <div className="youtube-fav--intro">
                    <BGvid fav={true}/>
                    <section className="youtube-fav--intro__quote">
                        <h1 className="youtube-fav--quote">Youtube Favorites</h1>
                    </section>
                    <div className="arrow">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                
                <div>
                    <section className="youtube-fav--main">

                        <a href="http://www.youtube.com">
                            <img className="youtube-fav--img" alt="YT logo" src="./images/yt_logo_rgb_dark.png"/>
                        </a>

                        <input onChange={this.handleChange} name="searchVideo" className="youtube-fav--search" type='text' placeholder="Search video title"/>

                        <div className="youtube-fav--grid">
                            {this.showVideos()}
                        </div>
                        
                    </section>
                    
                </div>
                <Footer />
            </main>
        )
    }
}
