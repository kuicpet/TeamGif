/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-use-before-define */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FormContainer from '../containers/FormContainer';


const apiEndpoint = 'http://localhost:4000/';

class createUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        gender: '',
        jobRole: [],
        department: [],
        address: '',
      },
      genderOptions: ['Male', 'Female'],
      jobRoleOptions: ['Front-End Dev', 'Back-End Dev', 'UI/UX Designer', 'Software Tester', 'PM', 'Digital Marketer', 'Programmer'],
      departmentOptions: ['Programming', 'Design', 'Development', 'Testing'],
    };
  }

  handleAdd = async () => {
    const obj = { newUser };
    const { data: newUser } = await axios.post(apiEndpoint, obj);
    const newUsers = [newUser, ...this.state.newUsers];
    this.setState({ newUsers });
  }

  render() {
    return (
      <div className="container mt-2">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h3 className="mt-1">Sign Up</h3>
            <FormContainer />
            <p className="small">
           Already have an Account?
              <Link to="/UserSignin" className="nav-link">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default createUser;
