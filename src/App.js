import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Profile from './components/Profile';
import Home from './components/Home';
import Favorites from './components/Favorites';


class App extends Component {

  render (){
    return (
    <div className="App">
      <Nav />
      <div className="header__logo-box">
          <div className="header__logo"></div>
      </div>
      <Switch>

        <Route exact path="/profile" render={(props) => <Profile {...props}  />}></Route>

        <Route exact path="/home" render={(props) => <Home {...props}  />}></Route>

        <Route exact path="/favorites" render={(props) => <Favorites {...props}  />}></Route>

        <Route path="/" render={(props) => <Header {...props} />}></Route>
      </Switch>
      
    </div>
  );
}
}

export default App;
