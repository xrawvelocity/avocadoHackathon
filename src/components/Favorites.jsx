import React, { Component } from 'react';
import BGvid from './BGvid';
import { Link } from 'react-router-dom'

export default class Favorites extends Component {
    render() {
        return (
            <div className="profile">
            <BGvid />
            <div className="profile--heading">
                <h1 className="profile--heading__text">Your Favorite LiveStyles</h1>
            </div>
            
            
            <div>
            <Link to="/home"><button onClick={this.test} className="profile--button">Country Roads</button></Link>
            
            </div>
            
        </div>
        )
    }
}
