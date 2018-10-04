import React, { Component } from "react";
import axios from "axios";
import Moment from "moment";
import Pagination from "../pagination/Pagination.js";

class Payment extends Component {

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

  }


  render() {
    let paymentDetail = this.state.paymentDetail;
    let currentDateTime = Moment().unix();
    let paginationDetail = this.state.paginationDetail;

    return (
      <div className="card">
        <div className="card-body">
          Payment.
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="d-md-flex align-items-center">
                    <div>
                      <h4 className="card-title">List of all Payment</h4>
                      <h5 className="card-subtitle">Overview of payment</h5>
                    </div>
                    <div className="ml-auto">
                      <div className="dl">
                        <select className="custom-select">
                          <option value="0" selected>
                            Monthly
                          </option>
                          <option value="1">Daily</option>
                          <option value="2">Weekly</option>
                          <option value="3">Yearly</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table-responsive m-t-20">
                  <table className="table table-bordered  v-middle">
                    <thead>
                      <tr className="bg-light">
                        <th className="border-top-0">PaymentId</th>
                        <th className="border-top-0">ProductId</th>
                        <th className="border-top-0">Status</th>
                        <th className="border-top-0">ShortUrl</th>
                        <th className="border-top-0">LongUrl</th>
                        <th className="border-top-0">Purpose</th>
                        <th className="border-top-0">Fee</th>
                        <th className="border-top-0">Amount</th>
                        <th className="border-top-0">Currency</th>
                        <th className="border-top-0">EmailId</th>
                        <th className="border-top-0">Name</th>
                        <th className="border-top-0">Contact</th>
                        <th className="border-top-0">PaymentCompletedAt</th>
                        <th className="border-top-0">Paymenton</th>

                      </tr>
                    </thead>

                    {paymentDetail.map((paymentDetail, index) =>

                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div>
                              <a className="btn btn-circle btn-info text-white">
                                {paymentDetail.payment_id}
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="">
                            <h4 className="m-b-0 font-16">{paymentDetail.product_id}</h4>
                          </div>
                        </td>
                        <td>
                          {paymentDetail.status}
                        </td>
                        <td>{paymentDetail.shorturl}</td>
                        <td>{paymentDetail.longurl}</td>
                        <td>{paymentDetail.purpose}</td>
                        <td>
                          <div className="">
                            <h4 className="m-b-0 font-16">{paymentDetail.fees}</h4>
                          </div>
                        </td>
                        <td>
                          <div className="">
                            <h4 className="m-b-0 font-16">{paymentDetail.amount}</h4>
                          </div>
                        </td>
                        <td>
                          <div className="">
                            <h4 className="m-b-0 font-16">{paymentDetail.currency}</h4>
                          </div>
                        </td>
                        <td>{paymentDetail.buyer}</td>
                        <td>
                          {paymentDetail.buyer_name}
                        </td>
                        <td>
                          {paymentDetail.buyer_phone}
                        </td>
                        <div className="">
                          <h4 className="m-b-0 font-16">{paymentDetail.createdat}</h4>
                        </div>
                        <td>
                          <label className="label label-primary">
                            {Math.ceil((currentDateTime - paymentDetail.updatedat) / (3600 * 24))}Days Ago
                          </label>
                        </td>

                      </tr>
                    </tbody>

                    )}

                  </table>
                  <Pagination data={this.state} handlePagination={this.hanldePagination.bind(this)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Payment;