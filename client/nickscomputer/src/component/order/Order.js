import React, { Component } from "react";

class Order extends Component {

  constructor(props) {
    super(props);
  }

  render() {
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
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div>
                              <a className="btn btn-circle btn-info text-white">
                                1
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>
                          1234
                        </td>
                        <td>Nitesh</td>
                        <td>
                          jhanitesh10 @gmail.com
                        </td>
                        <td>
                          123567890
                        </td>
                        <td>
                          Iphone
                        </td>
                        <td>
                          SE
                        </td>
                        <td>Price</td>
                        <td>Category</td>
                         <td>
                          190
                        </td>
                         <td>
                         29
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