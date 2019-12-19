/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import CreateUser from './routes/CreateUser';
import UserSignin from './routes/UserSignin';
import Notfound from './routes/NotFound';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/CreateUser" component={CreateUser} />
            <Route exact path="/Usersignin" component={UserSignin} />
            <Route component={Notfound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
