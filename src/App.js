import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
// import SignUp from './components/SignUp';
// import LogIn from './components/LogIn';
import Profile from './components/Profile';
import Home from './components/Home';

let key = 'AIzaSyCL9rLbM01CmVdUgYZWFYUIqcYUsso7MDQ';

class App extends Component {

  state = {
    links: [],
    ready: false
  }

  async componentDidMount(){
    await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=relevance&q=coding&type=video&videoEmbeddable=true&key=${key}`)
    .then(res=>res.json())
    .then(async data=>{
        await this.setState({
          links: data.items,
          ready: true
        })      
    })
    console.log(this.state.links)
}

  render (){
    return (
    <div className="App">
      <Nav />
      <div className="header__logo-box">
          <div className="header__logo"></div>
      </div>
      <Switch>

        <Route exact path="/profile" render={(props) => <Profile {...props} links={this.state.links} ready={this.state.ready} />}></Route>

        <Route exact path="/home" render={(props) => <Home {...props} links={this.state.links} ready={this.state.ready} />}></Route>

        <Route path="/" render={(props) => <Header {...props} />}></Route>
      </Switch>
      
    </div>
  );
}
}

export default App;
