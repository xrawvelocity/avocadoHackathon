import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BGvid from './BGvid';

export default class SignUp extends Component {
    state = {
        
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
        console.log(this.state)
    }

    handleSubmit = () => {
        localStorage.setItem('username', this.state.username)
        localStorage.setItem('password', this.state.password)
    }
    

    render() {
        return (
            <section className="form">
                <BGvid />
                <form className="form--form">
                    <input onChange={this.handleChange}  className="form__input" type="text" name="username" placeholder="Username"></input>
                    <input onChange={this.handleChange} className="form__input" type="password" name="password" placeholder="Password"></input>
                    <Link to="/home"><button onClick={this.handleSubmit} className="btn-home__log-in">Sign up</button></Link>
                </form>

            </section>
        )
    }
}
