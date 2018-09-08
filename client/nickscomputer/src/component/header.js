import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faCheckSquare,
  faTimesCircle,
  faTrashAlt,
  faSearch,
  faBell,
  faBars,
  faUserCircle,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

import './header.css';

class Header extends Component{

    constructor(){
        super();
    }

    render(){
        return (

            <nav class="navbar navbar-expand-sm bg-info navbar-dark">

                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Active</a>
                    </li>
                </ul>
                
            </nav>


        );
    }
}

export default Header;