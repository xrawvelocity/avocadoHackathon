import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import BGvid from './BGvid';

export default class LogIn extends Component {

    state = {
        loggedIn: false
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
        console.log(this.state)
    }

    handleSubmit = () => {
        if(this.state.username === localStorage.getItem('username') && this.state.password === localStorage.getItem('password')){
            this.setState({
                loggedIn:true
            })
        }
        else {
            this.setState({
                loggedIn:false
            })
        }
    }
    renderRedirect = () => {
        if (this.state.loggedIn) {
          return <Redirect to='/home' />
        }
    }

    render() {
        return (
            <section className="form">
                {this.renderRedirect()}
                <BGvid />
                <form className="form--form">
                    <input onChange={this.handleChange} className="form__input" type="text" name="username" placeholder="Username"></input>
                    <input onChange={this.handleChange} className="form__input" type="password" name="password" placeholder="Password"></input>
                    <button  onClick={this.handleSubmit}className="btn-home__log-in">Log in</button>
                </form>

            </section>
            
        )
    }
}
