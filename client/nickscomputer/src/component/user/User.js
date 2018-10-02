import React, { Component } from "react";

class User extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
         Order.
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="d-md-flex align-items-center">
                    <div>
                      <h4 className="card-title">List of all Order</h4>
                      <h5 className="card-subtitle">Overview of Top Selling Items</h5>
                    </div>
                    <div className="ml-auto">
                      <div className="dl">
                        <select className="custom-select">
                          <option value="0" selected>Monthly</option>
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
                        <th className="border-top-0">Id</th>
                        <th className="border-top-0">Name</th>
                        <th className="border-top-0">Picture</th>
                        <th className="border-top-0">Gender</th>
                        <th className="border-top-0">Locale</th>
                        <th className="border-top-0">Timezone</th>
                        <th className="border-top-0">Last Active</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div><a className="btn btn-circle btn-info text-white">1</a></div>
                          </div>
                        </td>
                        <td>
                          <div className="">
                            <h4 className="m-b-0 font-16">Name</h4>
                          </div>
                        </td>
                        <td width="40px">
                          <img className="img-thumbnail" src="http://quizplay.esy.es/quiz/images/Logomakr_0ukOms.png" />
                        </td>
                        <td>
                          Angular
                                                            </td>
                        <td>46</td>
                        <td>356</td>
                        <td>
                          <label className="label label-primary">20 Days ago</label>
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
    );
  }
}

export default User;