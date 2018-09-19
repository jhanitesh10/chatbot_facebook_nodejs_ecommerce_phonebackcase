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

class Completepayment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paymentDetail: [],
            totalDataCount: 0,
            offset: 0,
            limit: 2
        }
    }

    componentDidMount() {

        let offset = this.state.offset,
            limit = this.state.limit;

        axios.get(`http://localhost:1234/dashboard/completePayment/count`)
            .then((pymentResponse) => {
                let payemntCount = pymentResponse.data;

                axios.get(`http://localhost:1234/dashboard/completePayment?offset=${offset}&limit=${limit}`)
                    .then((response) => {
                        let paymentDetailArray = response.data;
                        let totalDataCount = payemntCount.length;


                        this.setState({ paymentDetail: paymentDetailArray, totalDataCount: totalDataCount });
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


        axios.get(`http://localhost:1234/dashboard/completePayment?offset=${offset}&limit=${limit}`)
            .then((completePayment) => {
                let userDetailArray = completePayment.data;
                this.setState({ paymentDetail: userDetailArray });
            })
            .catch((e) => {
                console.log("error while sending data to node platform", e);
            });


        // alert(key);
    }

    render() {
        let paymentDetail = this.state.paymentDetail;
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
                                    <th>paymentId</th>
                                    <th>productId</th>
                                    <th>status</th>
                                    <th>shortUrl</th>
                                    <th>longUrl</th>
                                    <th>purpose</th>
                                    <th>fee</th>
                                    <th>amount</th>
                                    <th>currency</th>
                                    <th>buyer</th>
                                    <th>buyername</th>
                                    <th>buyer phone</th>
                                    <th>payment request id</th>
                                    <th>payment Intiated at</th>
                                    <th>payment completed at</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>paymentId</th>
                                    <th>productId</th>
                                    <th>status</th>
                                    <th>shortUrl</th>
                                    <th>longUrl</th>
                                    <th>purpose</th>
                                    <th>fee</th>
                                    <th>amount</th>
                                    <th>currency</th>
                                    <th>buyer</th>
                                    <th>buyername</th>
                                    <th>buyer phone</th>
                                    <th>payment request id</th>
                                    <th>payment Initiated at</th>
                                    <th>payment completed at</th>
                                </tr>
                            </tfoot>
                            {paymentDetail.map((paymentDetail, index) =>

                                <tbody>

                                    <tr>
                                        <td>{paymentDetail.payment_id}</td>
                                        <td>{paymentDetail.product_id}</td>
                                        <td>{paymentDetail.status}</td>
                                        <td>{paymentDetail.shorturl}</td>
                                        <td>{paymentDetail.longurl}</td>
                                        <td>{paymentDetail.purpose}</td>
                                        <td>{paymentDetail.fee}</td>
                                        <td>{paymentDetail.amount}</td>
                                        <td>{paymentDetail.currency}</td>
                                        <td>{paymentDetail.buyer}</td>
                                        <td>{paymentDetail.buyer_name}</td>
                                        <td>{paymentDetail.buyer_phone}</td>
                                        <td>{paymentDetail.payment_request_id}</td>
                                        <td>{paymentDetail.createdat}</td>
                                        <td>{paymentDetail.updatedat}</td>
                                        <td>{Math.ceil((currentDateTime - paymentDetail.updatedat) / (3600 * 24))}Days Ago</td>
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

export default Completepayment;