import React, { Component } from "react";

class Order extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="card">
        <div class="card-body">
         Order.
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <div class="d-md-flex align-items-center">
                    <div>
                      <h4 class="card-title">List of all Order</h4>
                      <h5 class="card-subtitle">Overview of Top Selling Items</h5>
                    </div>
                    <div class="ml-auto">
                      <div class="dl">
                        <select class="custom-select">
                          <option value="0" selected>Monthly</option>
                          <option value="1">Daily</option>
                          <option value="2">Weekly</option>
                          <option value="3">Yearly</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="table-responsive m-t-20">
                  <table class="table table-bordered  v-middle">
                    <thead>
                      <tr class="bg-light">
                        <th class="border-top-0">Id</th>
                        <th class="border-top-0">Name</th>
                        <th class="border-top-0">Picture</th>
                        <th class="border-top-0">Gender</th>
                        <th class="border-top-0">Locale</th>
                        <th class="border-top-0">Timezone</th>
                        <th class="border-top-0">Last Active</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <div><a class="btn btn-circle btn-info text-white">1</a></div>
                          </div>
                        </td>
                        <td>
                          <div class="">
                            <h4 class="m-b-0 font-16">Name</h4>
                          </div>
                        </td>
                        <td width="40px">
                          <img class="img-thumbnail" src="http://quizplay.esy.es/quiz/images/Logomakr_0ukOms.png" />
                        </td>
                        <td>
                          Angular
                                                            </td>
                        <td>46</td>
                        <td>356</td>
                        <td>
                          <label class="label label-primary">20 Days ago</label>
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

export default Order;