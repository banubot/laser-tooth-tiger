import React from 'react';
import './App.css';
import Gameboard from './components/Gameboard'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact render = {context => <Home/>}/>
        <Route path='/play/:bkg' component = {Gameboard}/>
        <Route path='/' render={() => 
          <div>
            ERROR: Nothing lives here :(
          </div>
        }/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
