/* eslint-disable prefer-destructuring */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';


const apiEndpoint = 'http://localhost:4000';

class userSignin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        email: '',
        password: '',
      },
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleAdd = async () => {
    const obj = { newUser };
    const { data: newUser } = await axios.post(apiEndpoint, obj);
    const newUsers = [newUser, ...this.state.newUsers];
    this.setState({ newUsers });
  }


  handleFormSubmit(e) {
    e.preventDefault();
    const userData = this.state.newUser;

    axios.post('http://localhost:4000/auth/signin', { userData }).then((res) => {
      res.json().then((data) => {
        console.log(`Successful ${data}`);
      });
    });
  }

  handleEmail(e) {
    const value = e.target.value;
    this.setState((prevState) => ({ newUser: { ...prevState.newUser, email: value } }));
  }

  handlePassword(e) {
    const value = e.target.value;
    this.setState((prevState) => ({ newUser: { ...prevState.newUser, password: value } }));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <form onSubmit={this.handleFormSubmit}>
              <h3 className="m-3">Sign In</h3>
              <Input
                type="text"
                name="email"
          // eslint-disable-next-line react/destructuring-assignment
                value={this.state.newUser.email}
                placeholder="Email"
                onChange={this.handleEmail}
                required
              />
              <Input
                type="password"
                name="password"
                value={this.state.newUser.password}
                placeholder="Password"
                onChange={this.handlePassword}
                required
              />
              <Button
                action={this.handleFormSubmit}
                type="primary"
                title="Sign In"
                style={ButtonStyle}
              />
              <p className="small">
           Don't have an Account?
           Create One
                <Link to="/CreateUser" className="nav-link">Here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>

    );
  }
}
const ButtonStyle = {
  margin: '10px 10px 10px 10px',
};

export default userSignin;
