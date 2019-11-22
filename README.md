[![Coverage Status](https://coveralls.io/repos/github/kuicpet/TeamGif/badge.png?branch=master)](https://coveralls.io/github/kuicpet/TeamGif?branch=master)
[![License](http://img.shields.io/badge/license-MIT-blue.png?style=flat-square)](http://opensource.org/licenses/MIT)

# TeamGif
TeamGif is an internal social network for employees of an organization. The goal of this application is to facilitate more interaction between colleagues and promote team bonding.

## Table of Contents
- [API Documentation](#api-documentation)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Tests](#tests)
- [Limitations](#limitations)
- [How to contribute](#how-to-contribute)
- [The Dev Team](#the-dev-team)
- [Licence](#licence)
- [FAQs](#faqs)

## API Documentation

The documentation for the TeamGif API can be found [here.] 

## Key Features
##### Users
  - 
##### Authentication
  - TeamGif uses JWT for authentication.
  - On successfull sign up or sign in, the user receives a token in the `OAuth` header which can be used to authenticate requests to protected endpoints.
  For a list of endpoints that are protected and those that are not, see our [documentation]

##### Real time updates
  - The client side implementation uses React, which helps ensure that the app updates in real time. You can interact with the hosted app [here.]

##### Password recovery
  - Forgot your password? No problem. Users can request a password reset, and get a mail with reset instructions.

## Technology Stack

TeamGif uses the PERN (PostgreSql, Express, ReactJs, NodeJs) stack.

#### Client Side: 
  - Front-end implementation in REACT
  - Styling with CSS
  

#### Server Side:
  - Server-side implementation is built on NODE, with an
      EXPRESS server and POSTGRES DB.

#### Authentication and Code Base Organization
  - Written in ES6 (ECMAScript 2015)
  - BABEL transpiler 
  - Json Web Tokens (JWT) for authentication.  
    
#### Code Quality
  - Uses ESLINT which was configured to use Airbnb-base rules for ensuring code quality.


## Dependencies
To use TeamGif, you would need: 
  - [NodeJS](https://nodejs.org) - a JavaScript runtime built on Chrome's V8 JavaScript engine.
  - [PostgreSQL](https://www.postgresql.org/) - a popular object-relational database management system (ORDBMS).
  - Other dependencies are listed in the package.json and should be installed with `npm install` on the command line.
  - Environment variables defined in a `.env` file. You can find a `.sample.env` file in the repository root to guide you on setting up your `.env` file.

## Installation
To get started, 
- Clone this repository to your local machine using https://github.com/kuicpet/TeamGif.git
- Navigate to the root of the cloned local repository.
- Create a file named `.env` using the `.sample.env` file - located on the repository root folder - as a guide.
- Run `npm install` to install the dependencies.
- Run `npm start` to run the application.

## Tests
Tests used have been included:
- API Server tests
- Client side tests for react implementation


##### Server tests
Server side tests can be run on the command line with `npm test`

##### Client tests
Client side tests can be run on the command line with `npm run client-test`

##### Unit tests
If you discover a bug while testing or using app, please [create an issue](https://github.com/kuicpet/TeamGif/issues/new) to report it. That is a way to contribute to the development of Postit.

## How to Contribute

Interested in the development of Teamwork? Awesome! You can check out the [Issues](https://github.com/kuicpet/TeamGif/issues) page, and if you find something you want to work on, let us know in the comments.

Pull Requests should:
  - Contain code written in ES6 for Javascript files.
  - Lint and adhere to the [Airbnb javascript style guide](https://github.com/airbnb/javascript).
  - Pass all tests.

## The Dev. Team
- [Kingsley Umujeyan](https://github.com/kuicpet)

## Licence
Copyright © [The MIT License](./LICENCE.md)

## FAQs
#### What is TeamGif?
gifIT is an internal social network for employees of an organization. The goal of this application is to facilitate more interaction between colleagues and promote team bonding.
    
#### How do I use it?
You can signup for an account on https://postit-ray.herokuapp.com to use the client side implementation built on the API. If you are a developer and wish to use the API, see the [documentation](https://postit-ray.herokuapp.com/api/v1/docs) to learn how to start and what endpoints are available.

#### Is TeamGif an Open-Source Application?
Yes it is. 
    
#### Who can contribute?
Anyone! To contribute, simply raise a PR with your contribution. Only PRs that meet the standard would be considered. For more details on PR conventions for the Postit project, see the [How to contribute](#how-to-contribute) section of this README, and the [wiki](https://github.com/kuicpet/Teamwork/wiki) for this repository.
    
#### What language was used to develop this application?
This project is a full stack Javascript application
    
#### Am I permitted to clone this project for personal use?
See [The MIT License](./LICENCE.md) for the permissions available to you.
    