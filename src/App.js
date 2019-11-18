import React, {Component} from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './assets/custom.css'
import ConnectWallet from './ConnectWallet'
import ConnectedWallet from './ConnectedWallet'


class App extends Component {
  render(){
    return (      
          <Router>
            <Switch>
            <Route path="/">
                <ConnectWallet />
              </Route>
              <Route path="/connectedWallet">
              <ConnectedWallet />
              </Route>
            </Switch>
        </Router>             
    );
  }
}

export default App;
