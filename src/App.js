import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Github from './components/github';
import HomePage from './components/home';
import Detail from './components/detail'

class App extends Component {
    render(){
        return(
            <div>
                
                <BrowserRouter>
                  <Switch>
                      <Route exact component = {HomePage} path = '/'/>
                      <Route exact component = {Github} path = '/github'/>
                      <Route exact component = {Detail} path = '/github/detail'/>
                  </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;