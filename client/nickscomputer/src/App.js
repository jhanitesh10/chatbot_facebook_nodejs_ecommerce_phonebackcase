import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import Header from './component/header/Header.js';
import Sidebaar from "./component/sidebaar/Sidebaar.js";
import Product from "./component/product/Product.js";
import Payment from "./component/payment/Payment.js";
import Order from './component/order/Order.js';
import ProductAttribute from "./component/productAttribute/PorductAttribute.js";
import User from './component/user/User.js';
import AddProduct from './component/productAttribute/AddProduct.js';
import EditProduct from './component/productAttribute/EditProduct.js';
import Login from './component/login/Login.js';
import Landing from './component/landing/Landing.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn : false
    }
  }

  updateAuthenticStatus(status){
    // alert(status);
    this.setState({isLoggedIn : status });
    
  }
  
  render() {
    let isLoggedIn = this.state.isLoggedIn;
    console.log(isLoggedIn, "****");
    return (
      <div>
        {

        (isLoggedIn)?(
              <Landing />
        
     
        ):(
          <Switch>
            {/* <Redirect to="/login"></Redirect> */}
        <Route
          path='/login'
          render={(props) => <Login {...props} isAuthed={true} updateAuthenticStatus={this.updateAuthenticStatus.bind(this)}/>}>
        />
        </Route>
        </Switch>
        )

        }
        
      </div>
    )
  }

}

export default App;
