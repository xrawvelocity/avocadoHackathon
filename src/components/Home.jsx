import React, { Component } from 'react'
import BGvid from './BGvid';
import YouTube from './YouTube'
import Footer from './Footer';

export default class Home extends Component {
    render() {
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
                        <YouTube />
                        </div>
                        
                    </section>
                    <section className="home--main__amazon"></section>
                </div>
                <Footer />            
            </main>
        )
    }
}
