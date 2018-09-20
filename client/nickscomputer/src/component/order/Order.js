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
import Sortorder from './sortOrder.js';

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderDetail: [],
            totalDataCount: 0,
            offset: 0,
            limit: 2,
            paymentStatus : 1,
            deliveryStatus : 0,
            processStatus : 0,
            orderStatus : 0        
        }
    }

    componentDidMount() {

        let {
            offset, limit, paymentStatus, deliveryStatus, processStatus, orderStatus
        } = this.state;

        axios
          .get(`http://localhost:1234/dashboard/order/count?paymentStatus=${paymentStatus}&deliveryStatus=${deliveryStatus}&processStatus=${processStatus}&orderStatus=${orderStatus}`)
          .then(orderResponse => {
            let orderCount = orderResponse.data;

            axios
                .get(`http://localhost:1234/dashboard/order?offset=${offset}&limit=${limit}&paymentStatus=${paymentStatus}&deliveryStatus=${deliveryStatus}&processStatus=${processStatus}&orderStatus=${orderStatus}`)
              .then(response => {
                let orderDetailArray = response.data;
                let totalDataCount = orderCount.length;

                this.setState({
                  orderDetail: orderDetailArray,
                  totalDataCount: totalDataCount
                });
              })
              .catch(e => {
                console.log("error while sending data to node platform", e);
              });
          })
          .catch(e => {
            console.log("error while getting user count", e);
          });


    }

    hanldePagination(key) {
        let totalDataCount = this.state.totalDataCount;
        let limit = this.state.limit;
        let totalPage = Math.ceil(totalDataCount / limit);
        let offset = (limit) * (key - 1);
        let { paymentStatus, deliveryStatus, processStatus, orderStatus } = this.state;

        axios
            .get(`http://localhost:1234/dashboard/order?offset=${offset}&limit=${limit}&paymentStatus=${paymentStatus}&deliveryStatus=${deliveryStatus}&processStatus=${processStatus}&orderStatus=${orderStatus}`)
            .then((response) => {
                let orderDetailArray = response.data;
                this.setState({ orderDetail: orderDetailArray });
            })
            .catch((e) => {
                console.log("error while sending data to node platform", e);
            });


        // alert(key);
    }

    handleOrderSort(paymentStatus, deliveryStatus, processStatus, orderStatus){
        let {
            offset, limit
        } = this.state;

        axios.get(`http://localhost:1234/dashboard/order?offset=${offset}&limit=${limit}&paymentStatus=${paymentStatus}&deliveryStatus=${deliveryStatus}&processStatus=${processStatus}&orderStatus=${orderStatus}`)
            .then((orderResponse) => {
                let orderCount = orderResponse.data;

                axios.get(`http://localhost:1234/dashboard/order/count?paymentStatus=${paymentStatus}&deliveryStatus=${deliveryStatus}&processStatus=${processStatus}&orderStatus=${orderStatus}`)
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
    handleDownload(e, url){
        e.preventDefault();
        // alert(data);
        axios.get(`http://localhost:1234/dashboard/image/download?url=${url}`).then((res) => {
            console.log(res);
        });
    }
    render() {
        let orderDetail = this.state.orderDetail;
        let currentDateTime = Moment().unix();
        let paginationDetail = this.state.paginationDetail;
        let imageSize = {
            width: 50,
            height: 50
        }
        let detail = {
            paymentStatus : this.state.paymentStatus,
            deliveryStatus : this.state.deliveryStatus,
            processStatus : this.state.processStatus,
            orderStatus : this.state.orderStatus
            }
        return (
            <div>
                <div className="card-header">
                    <i className="fas fa-table"></i>
                    Data Table Example
            </div>
                <div className="card-body">
                    
                    <Route path="/order" render={props => <Sortorder details={detail} handleOrderSort={this.handleOrderSort.bind(this)} isAuthed={true} />} />

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
                                    <th>Download</th>
                                
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
                                    <th>Download</th>

                                    
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
                                        <td><button value={orderData.image} onClick={(e) => {this.handleDownload(e, orderData.image)}}>Click</button></td>
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