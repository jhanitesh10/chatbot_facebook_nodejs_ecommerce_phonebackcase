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
import Pagination from "../Pagination.js";

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderDetail: [],
            totalDataCount: 0,
            offset: 0,
            limit: 2
        }
    }

    componentDidMount() {

        let offset = this.state.offset,
            limit = this.state.limit;

        axios.get(`http://localhost:1234/dashboard/order/Count`)
            .then((orderResponse) => {
                let orderCount = orderResponse.data;

                axios.get(`http://localhost:1234/dashboard/order?offset=${offset}&limit=${limit}`)
                    .then((response) => {
                        let orderDetailArray = response.data;
                        let totalDataCount = orderCount.length;


                        this.setState({ orderDetail: orderDetailArray, totalDataCount: totalDataCount });
                    })
                    .catch((e) => {
                        console.log("error while sending data to node platform", e);
                    });

            })
            .catch((e) => {
                console.log("error while getting user count", e);
            });


    }

    hanldePagination(key) {
        let totalDataCount = this.state.totalDataCount;
        let limit = this.state.limit;
        let totalPage = Math.ceil(totalDataCount / limit);
        let offset = (limit) * (key - 1);


        axios.get(`http://localhost:1234/dashboard/order?offset=${offset}&limit=${limit}`)
            .then((response) => {
                let orderDetailArray = response.data;
                this.setState({ orderDetail: orderDetailArray });
            })
            .catch((e) => {
                console.log("error while sending data to node platform", e);
            });


        // alert(key);
    }

    render() {
        let orderDetail = this.state.orderDetail;
        let currentDateTime = Moment().unix();
        let paginationDetail = this.state.paginationDetail;
        let imageSize = {
            width: 50,
            height: 50
        }
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
                                    <th>order id</th>
                                    <th>facebook user id</th>
                                    <th>product user id</th>
                                    <th>name</th>
                                    <th>email</th>
                                    <th>contact</th>
                                    <th>brand</th>
                                    <th>phone</th>
                                    <th>category</th>
                                    <th>price</th>
                                    <th>discount</th>
                                    <th>shipping_cost</th>
                                    <th>total</th>
                                    <th>Image</th>
                                    <th>description</th>
                                    <th>payment Id</th>
                                    <th>payment created at</th>
                                    <th>payment updated at</th>
                                    <th>payment status</th>
                                    <th>Delivery status</th>
                                    <th>Process status</th>
                                    <th>Ordered On</th>
                                    <th>orderd at </th>
                                
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>order id</th>
                                    <th>facebook user id</th>
                                    <th>product user id</th>
                                    <th>name</th>
                                    <th>email</th>
                                    <th>contact</th>
                                    <th>brand</th>
                                    <th>phone</th>
                                    <th>category</th>
                                    <th>price</th>
                                    <th>discount</th>
                                    <th>shipping_cost</th>
                                    <th>total</th>
                                    <th>Image</th>
                                    <th>description</th>
                                    <th>payment Id</th>
                                    <th>payment created at</th>
                                    <th>payment updated at</th>
                                    <th>payment status</th>
                                    <th>Delivery status</th>
                                    <th>Process status</th>
                                    <th>Ordered On</th>
                                    <th>Ordered at</th>
                                    
                                </tr>
                            </tfoot>
                            {orderDetail.map((orderData, index) =>

                                <tbody>
                                    <tr>
                                        <td>{orderData.id}</td>
                                        <td>{orderData.facebook_user_id}</td>
                                        <td>{orderData.product_id}</td>
                                        <td>{orderData.name}</td>
                                        <td>{orderData.email}</td>
                                        <td>{orderData.contact}</td>
                                        <td>{orderData.brand}</td>
                                        <td>{orderData.phone}</td>
                                        <td>{orderData.category}</td>
                                        <td>{orderData.price}</td>
                                        <td>{orderData.discount}</td>
                                        <td>{orderData.shipping_cost}</td>
                                        <td>{orderData.total}</td>
                                        <td><img style={imageSize} src={orderData.image} alt="productdetail"/></td>
                                        <td>{orderData.description}</td>
                                        <td>{orderData.payment_request_id}</td>
                                        <td>{orderData.payment_created_at}</td>
                                        <td>{orderData.payment_modified_at}</td>
                                        <td>{(orderData.payment_status)?"Complete":"Pending"}</td>
                                        <td>{(orderData.delivery_status)?"Deliverd":"Un-deliverd"}</td>
                                        <td>{(orderData.process_status)?"Processed":"Pending"}</td>
                                        <td>{orderData.updated_on}</td>
                                        <td>{Math.ceil((currentDateTime - orderData.updated_on) / (3600 * 24))}Days Ago</td>
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

export default Order;