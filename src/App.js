import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Github from './components/github';
import HomePage from './components/home';
import Detail from './components/detail';
import UserList from './components/users';
import Country from './components/countries';
import CheckBox from './components/checkbox';
import ArmyList from './components/armylist';

class App extends Component {
    render(){
        return(
            <div> 
                <BrowserRouter>
                  <Switch>
                      <Route exact component = {HomePage} path = '/'/>
                      <Route exact component = {Github} path = '/github'/>
                      <Route exact component = {Detail} path = '/github/detail'/>
                      <Route exact component = {UserList} path = '/SocialSelfService'/>
                      <Route exact component = {Country} path = '/country'/>
                      <Route exact component = {CheckBox} path = '/checkbox'/>
                      <Route exact component = {ArmyList} path = '/army'/>
                  </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;