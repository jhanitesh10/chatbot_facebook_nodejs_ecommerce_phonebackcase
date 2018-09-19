import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCoffee,
    faCheckSquare,
    faTimesCircle,
    faTrashAlt,
    faSearch,
    faBell,
    faDashb
} from "@fortawesome/free-solid-svg-icons";

import './sidebaar.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Usertable from "./Usertable.js";
import Pagination from './Pagination.js';
import Product from "./Product.js";
import Productattribute from './ProductAttribute.js';
import Completepayment from "./completePayment/Completepayment";
import Order from './order/Order.js';


class Sidebaar extends Component{
    constructor(){
        super();
    }

    render(){

        return(
            <Router>
        
                <div id="wrapper">
                {/* <!-- Sidebar --> */}
                    <div id="sidebar-wrapper" className="bg-dark navbar-dark">
                        <ul className="sidebar-nav">
                
                            <li className="nav-item"><Link className="nav-link" to={'/'}>User</Link></li>

                            <li>
                            
                            <li className="nav-item"><Link className="nav-link" to={'/product'}>Product</Link></li>

                            </li>
                            <li>

                            <li className="nav-item"><Link className="nav-link" to={'/productAttribute'}>Product Attribute</Link></li>
                           
                            </li>
                            <li>
                                <li className="nav-item"><Link className="nav-link" to={'/completePayment'}>Complete payment</Link></li>

                            </li>
                            <li>
                                <li className="nav-item"><Link className="nav-link" to={'/order'}>Order</Link></li>
                                
                            </li>
                
                        </ul>
                    </div>


                    <div id="page-content-wrapper">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h1>Simple Sidebar</h1>
                                    <p>This template has a responsive menu toggling system. The menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will appear/disappear. On small screens, the page content will be pushed off canvas.</p>
                                    <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>.</p>
                                    <a href="#menu-toggle" className="btn btn-default" id="menu-toggle">Toggle Menu</a>

                                    <div id="content-wrapper">

                                        <div className="container-fluid">

                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item">
                                                    <a href="#">Dashboard</a>
                                                </li>
                                                <li className="breadcrumb-item active">Overview</li>                                  
                                            </ol>

                                            {/* <!-- DataTables Example --> */}
                                                <div className="card mb-3">
                                                        <Switch>
                                                            <Route exact path='/' component={Usertable}></Route>
                                                            <Route  path='/product' component={Product}></Route>
                                                            <Route path='/productAttribute' component={Productattribute}></Route>
                                                            <Route path='/completePayment' component={Completepayment}></Route>
                                                            <Route path='/order' component={Order}></Route>
                                                        </Switch>
                                                </div>

                                        </div>
                        
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Router>
        );
        
    }
}

export default Sidebaar;