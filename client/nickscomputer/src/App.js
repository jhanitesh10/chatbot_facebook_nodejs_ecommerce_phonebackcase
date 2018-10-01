import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from './component/header/Header.js';
// import Sidebaar from "./component/sidebaar/sidebaar.js";
// import Product from "./component/product/Product.js";

class App extends Component {
  render() {
    return (
    <React.Fragment >

        <div class="preloader">
          <div class="lds-ripple">
            <div class="lds-pos"></div>
            <div class="lds-pos"></div>
          </div>
        </div>
        <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full" data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
        {/* header */}
        <Header />
         {/* side component */}
         {/* <Sidebaar /> */}
          <div class="page-wrapper">
            <div class="page-breadcrumb">
              <div class="row align-items-center">
                <div class="col-5">
                  <h4 class="page-title">Dashboard</h4>
                  <div class="d-flex align-items-center">
                    <nav aria-label="breadcrumb">
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Library</li>
                      </ol>
                    </nav>
                  </div>
                </div>
                <div class="col-7">
                  <div class="text-right upgrade-btn">
                    <a href="https://wrappixel.com/templates/xtremeadmin/" class="btn btn-danger text-white" target="_blank">Upgrade
                                to Pro</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="container-fluid">
              <div class="row">
                <div class="col-12">

              {/* card data component */}
              {/* <Product /> */}

                </div>
              </div>
            </div>
          </div>
        </div>   
      </React.Fragment>

    );
  }
}

export default App;
