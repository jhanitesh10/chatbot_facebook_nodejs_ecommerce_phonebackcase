import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Moment from "moment";

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

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pagination from './Pagination.js';

class Productattribute extends Component{

    constructor(props){
        super(props);
        this.state = {
            productDetail : [],
            totalDataCount: 0,
            offset : 0,
            limit : 100
        }
    }

    componentDidMount(){
        
        let offset = this.state.offset,
            limit = this.state.limit;

        axios.get(`http://localhost:1234/dashboard/productAttributeCount`)
        .then( (userCountResponse) => {
            let productAttributeCount = userCountResponse.data;

            axios.get(`http://localhost:1234/dashboard/productAttribute?offset=${offset}&limit=${limit}`)
                .then((response) => {
                    let productDetail = response.data;
                    let totalDataCount = productAttributeCount.length;
                    
        
                    this.setState({ productDetail: productDetail, totalDataCount: totalDataCount });
                })
                .catch((e) => {
                    console.log("error while sending data to node platform", e);
                });

        })
        .catch((e) => {
            console.log("error while getting user count", e);
        });


    }

    hanldePagination(key){
        console.log(key, "@@@@@@@@@@@@@@@@@@@@@@@@@");
        let totalDataCount = this.state.totalDataCount;
        let limit = this.state.limit;
        let totalPage = Math.ceil(totalDataCount / limit);
        let offset = (limit)*(key-1);

        console.log(totalDataCount, limit, totalPage, offset, "*******************");
        axios.get(`http://localhost:1234/dashboard/productAttribute?offset=${offset}&limit=${limit}`)
          .then(response => {
              let productDetail = response.data;
              console.log(productDetail, "*********************");
            this.setState({ productDetail: productDetail });
          })
          .catch(e => {
            console.log("error while sending data to node platform", e);
          });


        // alert(key);
    }

    render(){
        let productDetail = this.state.productDetail;
        let currentDateTime = Moment().unix();

        let paginationDetail = this.state.paginationDetail;
        return (
            <div>
            <div className="card-header">
                <i className="fas fa-table"></i>
                Data Table Example
            </div>
            <div className="card-body">
                <div className="table-responsive">

                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Brand</th>
                                <th>Phone</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>ProductId</th>
                                <th>Picutre</th>
                                <th>Title</th>
                                <th>Subtitle</th>
                                <th>Price</th>
                                <th>Discount</th>
                                <th>Shipping Cost</th>
                                <th>Stock</th>
                                <th>Numbser Of product</th>
                                <th>Normal product</th>
                                <th>Top product</th>
                                <th>Last Updat</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Id</th>
                                <th>Brand</th>
                                <th>Phone</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>ProductId</th>
                                <th>Picutre</th>
                                <th>Title</th>
                                <th>Subtitle</th>
                                <th>Price</th>
                                <th>Discount</th>
                                <th>Shipping Cost</th>
                                <th>Stock</th>
                                <th>Numbser Of product</th>
                                <th>Normal product</th>
                                <th>Top product</th>
                                <th>Last Updat</th>
                            </tr>
                        </tfoot>
                        {productDetail.map((data, index) =>

                            <tbody>

                                <tr>
                                    <td>{data.pa_id}</td>
                                    <td>{data.brandTitle}</td>
                                    <td>{data.phoneTitle}</td>
                                    <td>{data.priceTitle}</td>
                                    <td>{data.categoryTitle}</td>
                                    <td>{data.pr_id}</td>
                                    <td><img src ={data.image} /></td>
                                    <td>{data.title}</td>
                                    <td>{data.subtitle}</td>
                                    <td>{data.price}</td>
                                    <td>{data.discount}</td>
                                    <td>{data.shipping_cost}</td>
                                    <td>{(data.isAvailable)?"Available":"Unavailable"}</td>
                                    <td>{data.product_count}</td>
                                    <td>{(data.status)?"Yes":"No"}</td>
                                    <td>{(data.top_status)?"Yes":"No"}</td>
                                    <td>{Math.ceil((currentDateTime - data.updated_on) / (3600 * 24))}Days Ago</td>
                                </tr>

                            </tbody>

                        )}
                    </table>

                </div>
            </div>
            <Pagination data={this.state} handlePagination={this.hanldePagination.bind(this)} />
            <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>

            </div>
            
                 
    

        );
    }
}

export default Productattribute;
