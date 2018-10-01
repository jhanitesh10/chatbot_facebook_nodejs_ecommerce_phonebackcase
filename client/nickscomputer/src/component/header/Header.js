import React, { Component } from "react";
import './header.css';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header class="topbar" data-navbarbg="skin5">
        <nav class="navbar top-navbar navbar-expand-md navbar-dark">
          <div class="navbar-header" data-logobg="skin5">
            <a class="navbar-brand" href="index.html">
              <b class="logo-icon">
                <img src="./assets/images/logo-icon.png" alt="homepage" class="dark-logo" />
                <img src="./assets/images/logo-light-icon.png" alt="homepage" class="light-logo" />
              </b>
              <span class="logo-text">
                <img src="./assets/images/logo-text.png" alt="homepage" class="dark-logo" />
                <img src="./assets/images/logo-light-text.png" class="light-logo" alt="homepage" />
              </span>
            </a>

            <a class="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)"><i class="ti-menu ti-close"></i></a>
          </div>

        </nav>
      </header>
    );
  }
}

export default Header;