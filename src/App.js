import React, { Component } from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Navbar from './components/header'
import Dashboard from './components/dashboard'
import SignIn from './components/auth/signIn';
import SignUp from './components/auth/signUp'
import NewUser from './components/newUser';
import Update from './components/deleteUser';
import Initial from './components/initial';
import './App.css'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/newuser' component={NewUser} />
            <Route path='/update' component={Update}/>
            <Route path='/initial' component={Initial}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App
