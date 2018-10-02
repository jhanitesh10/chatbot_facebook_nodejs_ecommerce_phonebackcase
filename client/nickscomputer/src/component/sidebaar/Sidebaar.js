import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Sidebaar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <aside className="left-sidebar" data-sidebarbg="skin6">
        <div className="scroll-sidebar">
          <nav className="sidebar-nav">
            <ul id="sidebarnav">
              <li>
                <div className="user-profile d-flex no-block dropdown m-t-20">
                  <div className="user-pic"><img src="../../assets/images/users/1.jpg" alt="users" className="rounded-circle" width="40" /></div>
                  <div className="user-content hide-menu m-l-10">
                    <a href="javascript:void(0)" className="" id="Userdd" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <h5 className="m-b-0 user-name font-medium">Steave Jobs <i className="fa fa-angle-down"></i></h5>
                      <span className="op-5 user-email">varun@gmail.com</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="Userdd">
                      <a className="dropdown-item" href="javascript:void(0)"><i className="fa fa-power-off m-r-5 m-l-5"></i> Logout</a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="p-15 m-t-10"><Link  className="btn btn-block create-btn text-white no-block d-flex align-items-center" to={'/'}> <span className="hide-menu m-l-5">DASHBOARD</span> </Link></li>
              <li className="sidebar-item"> <Link className="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false" to={'/'}><i className="mdi mdi-view-dashboard"></i><span className="hide-menu">Profile</span></Link></li>
              <li className="sidebar-item"> <Link className="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false" to={'/dashboard/product'}><i className="mdi mdi-account-network"></i><span className="hide-menu">Product</span></Link></li>
              <li className="sidebar-item"> <Link className="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false" to={'/dashboard/productattribute'}><i className="mdi mdi-border-all"></i><span className="hide-menu">Product Attribute</span></Link></li>
              <li className="sidebar-item"> <Link className="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false" to={'/dashboard/order'}><i className="mdi mdi-face"></i><span className="hide-menu">Order</span></Link></li>
              <li className="sidebar-item"> <Link className="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false" to={'/dashboard/payment'}><i className="mdi mdi-file"></i><span className="hide-menu">Complete Payment</span></Link></li>
              <li className="text-center p-40 upgrade-btn">
                <a href="#" className="btn btn-block btn-danger text-white" target="_blank">Logout</a>
              </li>
            </ul>

          </nav>
        </div>
      </aside>
      
    );
  }
}

export default Sidebaar;