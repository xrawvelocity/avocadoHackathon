import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="header__logo-box">
          <div className="header__logo"></div>
      </div>
      <Switch>
        <Route exact path="/login" render={(props) => <LogIn {...props} />}></Route>

        <Route exact path="/signup" render={(props) => <SignUp {...props} />}></Route>

        <Route exact path="/home" render={(props) => <Home {...props} />}></Route>

        <Route path="/" render={(props) => <Header {...props} />}></Route>
      </Switch>
      
    </div>
  );
}

export default App;
