/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: '' };
  }

  // eslint-disable-next-line react/sort-comp
  callApi() {
    fetch('http://localhost:4000/')
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }))
      .catch((err) => err);
  }

  componentDidMount() {
    this.callApi();
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div className="container text-center">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.apiResponse}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
