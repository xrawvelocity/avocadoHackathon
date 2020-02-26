/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { Component } from 'react'
import BGvid from './BGvid';
import Footer from './Footer';
import AmazonItem from './AmazonItem';
import AdBlockDetect from 'react-ad-block-detect';
// const axios = require('axios')
// const cheerio = require('cheerio')
import axios from 'axios'


///////////////////////////////////////////////////////
////////// implement suggested categories /////////////
///////////////////////////////////////////////////////


let key = 'AIzaSyCL9rLbM01CmVdUgYZWFYUIqcYUsso7MDQ';
let key2 = 'AIzaSyCRlttHdu2haccytjzgvKVCkNIXc_PWR5A';

export default class Home extends Component {

    state = {
        links: [],
        prevLinks: [],
        amazonItems: [],
        ytReady: false,
        amReady: false
      }

    async componentDidMount(){

        if(localStorage.getItem('list')){
          const list = window.localStorage.getItem('list');
          const parsedList = JSON.parse(list);
          
          await parsedList.map( async item => {

            //YOUTUBE API REQUEST

              await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&order=relevance&q=${item.value}&type=video&videoEmbeddable=true&key=${key2}`)
              .then(res=>res.json())
              .then(async data=>{
                  
                  await this.setState({
                      prevLinks: data,
                      
                  })
                  this.state.links.push(this.state.prevLinks)
                  console.log(this.state.links)
              })
            
            //CUSTOM API WEB SCRAPING AMAZON

            let r = await axios.get(`http://localhost:3000/scrapeAmazon?q=${item.value}`)
            
            console.log(r.data)

            for(let i=2; i<7;i++){
                await this.state.amazonItems.push(r.data.amazonList[i])
            }

            await this.setState({
                ytReady: true,
                amReady: true
            })
            console.log(this.state.amazonItems)
        })
            
        }
        
    }

    showVideos = () => {
        console.log('show videos')
        return this.state.links.map(eachLink=> {
            return eachLink.items.map(eachVideo => {
                return (
                    <div className="tile">
                    <iframe width="290" height="180.625" title='test' src={`https://www.youtube.com/embed/${eachVideo.id.videoId}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                )
            })
        }) 
    }

    showAmazon = () => {
        console.log('show amazon')
        return this.state.amazonItems.map(eachItem=> {
            
                return (
                    <div className="tile-amazon">
                        <AmazonItem title={eachItem.title} image={eachItem.img} link={`https://www.amazon.com/${eachItem.url}`} price={eachItem.price}/>
                    </div>
                )           
        }) 
    }
    

    showCategories = () => {
        const list = window.localStorage.getItem('list');
        const parsedList = JSON.parse(list);
        return parsedList.map(item => {
            return item.value + " "
        })
    }

    showLoading = () => {
        return <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    }

    /////////////////////////////////////////////////////////////////////

    // UNPLASH API JUST IN CASE

    /////////////////////////////////////////////////////////////////////

    // onSearchSubmit = async () => {
    //     const response = await axios.get("https://api.unsplash.com/search/photos", {
    //         params: { query: "water" },
    //         headers: {
    //         Authorization: "Client-ID gKLGEEGnAX143NdSwLJF-O-1eCRn_9D2Dr_GA0wpSu8"
    //         }
    //     });
    //     console.log(response);
    //     this.setState({ images: response.data.results });
    //     console.log(this.state.images)
    // };


    
    ///////////////////////////////////////////////////////////////////

    render() {
        return (
            <main className="home">

            
            <marquee onClick={this.test} className="home--scrolling-text" behavior="scroll" scrollamount="5" direction="left">{this.showCategories()}</marquee>


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
                                    {this.state.ytReady ? this.showVideos() : this.showLoading()}
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
                                {this.state.amReady ? this.showAmazon() : this.showLoading()}
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
