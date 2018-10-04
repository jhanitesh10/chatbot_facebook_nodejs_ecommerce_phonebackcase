import React, { Component } from "react";
import axios from "axios";
import Moment from "moment";
import Pagination from "../pagination/Pagination.js";

class Order extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orderDetail: [],
      totalDataCount: 0,
      offset: 0,
      limit: 2,
      paymentStatus: 1,
      deliveryStatus: 0,
      processStatus: 0,
      orderStatus: 0
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

  handleOrderSort(paymentStatus, deliveryStatus, processStatus, orderStatus) {
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

  }

  render() {
    let orderDetail = this.state.orderDetail;
    let currentDateTime = Moment().unix();
    let paginationDetail = this.state.paginationDetail;
   
    let detail = {
      paymentStatus: this.state.paymentStatus,
      deliveryStatus: this.state.deliveryStatus,
      processStatus: this.state.processStatus,
      orderStatus: this.state.orderStatus
    }

    return <div className="card">
        <div className="card-body">
          Order.
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="d-md-flex align-items-center">
                    <div>
                      <h4 className="card-title">List of all Order</h4>
                      <h5 className="card-subtitle">
                        Overview of Top Selling Items
                      </h5>
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
                        <th className="border-top-0">OrderId</th>
                        <th className="border-top-0">ProductId</th>
                        <th className="border-top-0">Name</th>
                        <th className="border-top-0">Email</th>
                        <th className="border-top-0">Contact</th>
                        <th className="border-top-0">Brand</th>
                        <th className="border-top-0">Phone</th>
                        <th className="border-top-0">Category</th>
                        <th className="border-top-0">Price</th>
                        <th className="border-top-0">Discount</th>
                        <th className="border-top-0">ShippingCost</th>
                        <th className="border-top-0">Total</th>
                        <th className="border-top-0">Image</th>
                        <th className="border-top-0">Description</th>
                        <th className="border-top-0">PaymentOn</th>
                        <th className="border-top-0">OrderedOn</th>
                        <th className="border-top-0">PaymentStatus</th>
                        <th className="border-top-0">DeliveryStatus</th>
                        <th className="border-top-0">ProcessStatus</th>
                        <th className="border-top-0">DownloadProduct</th>
                        <th className="border-top-0">DoneStatus</th>
                      </tr>
                    </thead>

                  {orderDetail.map((orderData, index) =>

                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div>
                              <a className="btn btn-circle btn-info text-white">
                                {orderData.id}
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>
                          {orderData.product_id}
                        </td>
                        <td>{orderData.name}</td>
                        <td>
                          {orderData.email}
                        </td>
                        <td>
                          {orderData.contact}
                        </td>
                        <td>
                          {orderData.brand}
                        </td>
                        <td>
                          {orderData.phone}
                        </td>
                        <td>{orderData.category}</td>
                        <td>{orderData.price}</td>
                         <td>
                          {orderData.discount}
                        </td>
                         <td>
                         {orderData.shipping_cost}
                        </td>
                        <td>
                          <div className="">
                            <h4 className="m-b-0 font-16">1000</h4>
                          </div>
                        </td>
                        <td width="40px">
                          <img className="img-thumbnail" src="http://quizplay.esy.es/quiz/images/Logomakr_0ukOms.png" />
                        </td>
                        <td> I want my case to be delivered ASAP </td>
                        <td> 
                          <div className="">
                            <h4 className="m-b-0 font-16">20January</h4>
                          </div>
                        </td>
                        <td> 
                          <div className="">
                            <h4 className="m-b-0 font-16">20January</h4>
                          </div>
                        </td>
                        <td>
                          <label className="label label-primary">
                            DONE
                          </label>
                          <label className="label label-primary">
                            PENDING 
                          </label>
                        </td>
                        <td>
                          <label className="label label-primary">
                            DONE
                          </label>
                          <label className="label label-primary">
                            PENDING 
                          </label>
                        </td>
                        <td>
                          <label className="label label-primary">
                            DONE
                          </label>
                          <label className="label label-primary">
                            PENDING 
                          </label>
                        </td>

                      <td>
                        <button className="btn btn-danger">Download</button>
                      </td>
                      <td>
                        <button className="btn btn-danger">Done</button>
                      </td>
                      </tr>
                    </tbody>

                    )}

                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  }
}

export default Order;