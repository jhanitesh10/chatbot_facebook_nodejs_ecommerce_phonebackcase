import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from './component/header/Header.js';
import Sidebaar from "./component/sidebaar/Sidebaar.js";
import Product from "./component/product/Product.js";
import Payment from "./component/payment/Payment.js";
import Order from './component/order/Order.js';
import ProductAttribute from "./component/productAttribute/PorductAttribute.js";
import User from './component/user/User.js';
import AddProduct from './component/productAttribute/AddProduct.js';
import EditProduct from './component/productAttribute/EditProduct.js';

class App extends Component {
  render() {
    return (
    <div >

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
         <Sidebaar />
          <div class="page-wrapper">
            <div class="page-breadcrumb">
              <div class="row align-items-center">
                <div class="col-5">
                  <h4 class="page-title">Dashboard</h4>
                  <div class="d-flex align-items-center">
                    <nav aria-label="breadcrumb">
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">User</li>
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

        
                 
                  <Switch>
                    <Route exact path='/' component={User}></Route>
                    <Route path='/dashboard/product' component={Product}></Route>
                    <Route path='/dashboard/productattribute' component={ProductAttribute}></Route>
                    <Route path='/dashboard/order' component={Order}></Route>
                    <Route path='/dashboard/payment' component={Payment}></Route>
                    <Route path='/dashboard/addproduct' component={AddProduct}></Route>
                    <Route path='/dashboard/editproduct/:id' component={EditProduct}></Route>
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>   
      </div>

    );
  }
}

export default App;
