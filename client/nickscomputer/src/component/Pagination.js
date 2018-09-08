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


class Pagination extends Component{

    constructor(){
        super();
    }
    handleClickList(e, data) {
        e.preventDefault();
        // alert(data);
        this.props.handlePagination(data);

    }
    render(){
        let paginationData = this.props.data;

        let offset = paginationData.offset,
            limit = paginationData.limit,
            totalDataCount = paginationData.totalDataCount,
            totalPage = Math.ceil(totalDataCount /limit);

            let pageArray = [];
        for (let i = 1; i <= totalPage; i++) {
            pageArray.push(i);
        }

        return (

            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1">Previous</a>
                    </li>
                    
        
                    {
                    pageArray.map((data, index) =>
                            <li key={data} onClick={(e) => {this.handleClickList(e, data)}} class="page-item"><a class="page-link" href="#">{data}</a></li>                    
                    )
                    }
                    
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>


        );
    }
}

export default Pagination;



