import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Home from './components/Home';
import Favorites from './components/Favorites';
import YoutubeFavorites from './components/YoutubeFavorites';
import AmazonFavorites from './components/AmazonFavorites';


class App extends Component {

  render (){
    return (
    <div className="App">
      
      <Switch>

        <Route exact path="/profile" render={(props) => <Profile {...props}  />}></Route>

        <Route exact path="/home" render={(props) => <Home {...props}  />}></Route>

        <Route exact path="/favorites" render={(props) => <Favorites {...props}  />}></Route>

        <Route exact path="/youtube-favorites" render={(props) => <YoutubeFavorites {...props}  />}></Route>

        <Route exact path="/amazon-favorites" render={(props) => <AmazonFavorites {...props}  />}></Route>

        <Route path="/" render={(props) => <Header {...props} />}></Route>
      </Switch>
      
    </div>
  );
}
}

export default App;
