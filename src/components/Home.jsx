import React, { Component } from 'react'
import BGvid from './BGvid';
// import YouTube from './YouTube'
import Footer from './Footer';

export default class Home extends Component {

    showVideos = () => {
        return this.props.links.map(eachVideo => {
            return (
                <div className="tile">
                <iframe width="290" height="180.625" title='test' src={`https://www.youtube.com/embed/${eachVideo.id.videoId}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            )
        })
    }

    showLoading = () => {
        return <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    }

    render() {
        console.log(this.props.links)
        return (
            <main className="home">
                <div className="home--intro">
                    <BGvid />
                    <section className="home--intro__quote">
                        <h1 className="heading-primary--quote">Live Life Your Way.</h1>
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
                            {this.props.ready ? this.showVideos() : this.showLoading()}
                        </div>
                        </div>
                        </div>
                        
                    </section>
                    <section className="home--main__amazon"></section>
                </div>
                <Footer />            
            </main>
        )
    }
}
