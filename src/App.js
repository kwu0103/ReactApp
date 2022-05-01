import React, { Component } from 'react';
import './App.css';
import Home from './home/home';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import HomeNav from './homenav/homenav';
import PokeGame from './pokegame/pokegame';

class App extends Component{
  
  
  
  
  render(){
    return (
      
        
        <Router>
            <HomeNav></HomeNav>
              <Switch>
            <div>
                    <Route path="/" exact component={Home}/>
                    <Route path="/pokegame" component={PokeGame}/>
            </div>
            </Switch>
        </Router>









    );
  }
}

export default App;
