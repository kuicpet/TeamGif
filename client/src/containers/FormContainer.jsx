/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import React, { Component } from 'react';
import axios from 'axios';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';
import TextArea from '../components/TextArea';


class FormContainer extends Component {
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
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleTextArea = this.handleTextArea.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const userData = this.state.newUser;

    axios.post('http://localhost:4000/auth/create-user', { userData }).then((res) => {
      res.json().then((data) => {
        console.log(`Successful ${data}`);
      });
    });
  }


  handleClearForm(e) {
    e.preventDefault();
    this.setState({
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
    });
  }

  handleFirstName(e) {
    // eslint-disable-next-line prefer-destructuring
    const value = e.target.value;
    this.setState((prevState) => ({ newUser: { ...prevState.newUser, firstname: value } }));
  }

  handleLastName(e) {
    const value = e.target.value;
    this.setState((prevState) => ({ newUser: { ...prevState.newUser, lastname: value } }));
  }

  handleEmail(e) {
    const value = e.target.value;
    this.setState((prevState) => ({ newUser: { ...prevState.newUser, email: value } }));
  }

  handlePassword(e) {
    const value = e.target.value;
    this.setState((prevState) => ({ newUser: { ...prevState.newUser, password: value } }));
  }

  handleInput(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState((prevState) => ({
      newUser:
     { ...prevState.newUser, [name]: value },
      // eslint-disable-next-line react/destructuring-assignment
    // eslint-disable-next-line no-console
    }), () => console.log(this.state.newUser));
  }

  handleTextArea(e) {
    console.log('Inside handleTextArea');
    const value = e.target.value;
    this.setState((prevState) => ({
      newUser: {
        ...prevState.newUser, about: value,
      },
    }), () => console.log(this.state.newUser));
  }

  render() {
    return (
      <form method="post" className="form" onSubmit={this.handleFormSubmit}>
        <Input
          type="text"
          name="firstname"
          // eslint-disable-next-line react/destructuring-assignment
          value={this.state.newUser.firstname}
          placeholder="First name"
          onChange={this.handleFirstName}
          required
        />
        <Input
          type="text"
          name="lastname"
          value={this.state.newUser.lastname}
          placeholder="Last name"
          onChange={this.handleLastName}
          required
        />
        <Input
          type="email"
          name="email"
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
        <Select
          name="gender"
          options={this.state.genderOptions}
          value={this.state.newUser.gender}
          placeholder="Gender"
          handleChange={this.handleInput}
        />
        <Select
          name="jobRole"
          options={this.state.jobRoleOptions}
          value={this.state.newUser.jobRole}
          placeholder="Job Role"
          onChange={this.handleInput}
        />
        <Select
          name="department"
          options={this.state.departmentOptions}
          value={this.state.newUser.department}
          placeholder="Department"
          onChange={this.handleInput}
        />
        <TextArea
          name="address"
          rows={3}
          cols={30}
          value={this.state.newUser.address}
          placeholder="Address"
          onChange={this.handleTextArea}
        />
        <Button
          action={this.handleFormSubmit}
          type="primary"
          title="Create User"
          style={ButtonStyle}
        />
        <Button
          action={this.handleClearForm}
          type="secondary"
          title="Reset"
          style={ButtonStyle}
        />
      </form>
    );
  }
}
const ButtonStyle = {
  margin: '10px 10px 10px 10px',
};

export default FormContainer;
