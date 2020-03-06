import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Benefits from './components/Benefits'
import Celebrities from './components/Celebrities'
import Products from './components/Products'


class App extends Component {

  render (){
    return (
    <div className="App">
      
      <Switch>

        <Route exact path="/benefits" render={(props) => <Benefits {...props}  />}></Route>

        <Route exact path="/products" render={(props) => <Products {...props}  />}></Route>

        <Route exact path="/celebrities" render={(props) => <Celebrities {...props}  />}></Route>

        <Route path="/" render={(props) => <Home {...props} />}></Route>

      </Switch>
      
      <Celebrities/>
      
    </div>
  );
}
}

export default App;
