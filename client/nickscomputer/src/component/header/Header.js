import React, { Component } from "react";
import './header.css';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="topbar" data-navbarbg="skin5">
        <nav className="navbar top-navbar navbar-expand-md navbar-dark navbar-fixed-top">
          <div className="navbar-header" data-logobg="skin5">
            <a className="navbar-brand" href="index.html">
              <b className="logo-icon">
                <img src="../../assets/images/logo-icon.png" alt="homepage" className="dark-logo" />
                <img src="../../assets/images/logo-light-icon.png" alt="homepage" className="light-logo" />
              </b>
              <span className="logo-text">
                <img src="../../assets/images/logo-text.png" alt="homepage" className="dark-logo" />
                <img src="../../assets/images/logo-light-text.png" className="light-logo" alt="homepage" />
              </span>
            </a>

            <a className="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)"><i className="ti-menu ti-close"></i></a>
          </div>

        </nav>
      </header>
    );
  }
}

export default Header;