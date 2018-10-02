import React, { Component } from "react";

class Payment extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div className="card">
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
                        <th className="border-top-0">Buyer</th>
                        <th className="border-top-0">Name</th>
                        <th className="border-top-0">Contact</th>
                        <th className="border-top-0">PaymentRequestId</th>
                        <th className="border-top-0">PaymentCompletedAt</th>
                        <th className="border-top-0">Paymenton</th>
                      
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
                          <div className="">
                            <h4 className="m-b-0 font-16">1234566</h4>
                          </div>
                        </td>
                        <td>
                          Credit
                        </td>
                        <td>"http://google.com"</td>
                        <td>"http://google.com"</td>
                        <td>Freak case</td>
                        <td>
                          <div className="">
                            <h4 className="m-b-0 font-16">4</h4>
                          </div>
                        </td>
                        <td>
                          <div className="">
                            <h4 className="m-b-0 font-16">100</h4>
                          </div>
                        </td>
                        <td>
                          <div className="">
                            <h4 className="m-b-0 font-16">Rupees</h4>
                          </div>
                        </td>
                        <td>Nitesh</td>
                        <td>
                          Nitesh
                        </td>
                        <td>
                          9004250810
                        </td>
                        <td>12341kjljk1234</td>
                         <div className="">
                            <h4 className="m-b-0 font-16">20January</h4>
                          </div>
                        <td>
                          <label className="label label-primary">
                            20 Days ago
                          </label>
                        </td>
                        
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>;
  }
}

export default Payment;