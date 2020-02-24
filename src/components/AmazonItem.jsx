import React, { Component } from 'react'
import cheerio from 'cheerio';
import axios from 'axios'

export default class AmazonItem extends Component {

    componentDidMount() {
        axios.get('https://cors-anywhere.herokuapp.com/https://www.amazon.com/s?k=skate+board&ref=nb_sb_noss_2')
        .then(res => {
            const $ = cheerio.load(res.data)
            console.log($)
            const urlElems = $("div.a-section.a-spacing-medium")
            console.log(urlElems)
        })
    }
    render() {
        return (
            <div>
                <iframe title="coding book" className="home--main__amazon--link" scrolling="no" frameBorder="0" src="https://ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=xrawvelocity-20&marketplace=amazon&region=US&placement=0984782850&asins=0984782850&linkId=aaa7c17006b83edbe76249ae9deae7ac&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066C0&bg_color=FFFFFF">
                </iframe>
            </div>
        )
    }
}
