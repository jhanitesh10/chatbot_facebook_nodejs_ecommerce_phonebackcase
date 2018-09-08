import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from "reactstrap";

import Header from './component/header.js';
import Sidebaar from "./component/sidebaar.js";
import Usertable from './component/Usertable';

class App extends Component {
  render() {
    return (
            <div className="container-fluid">
              <Header />
              <Sidebaar />
            </div>
         );
  }
}

export default App;
