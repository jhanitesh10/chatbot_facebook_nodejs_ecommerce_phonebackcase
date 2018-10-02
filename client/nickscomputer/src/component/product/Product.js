import React, { Component } from "react";

class Product extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div>
        <div className="card">
          <div className="card-body">
            <div>
              <h4 className="card-title">Total Product count: 43</h4>
              <h5 className="card-subtitle">Overview of Top Selling Items</h5>
            </div>
            <div className="d-md-flex align-items-center" />
          </div>
          <div className="table-responsive m-t-20">
            <table className="table table-bordered  v-middle">
              <thead>
                <tr className="bg-light">
                  <th className="border-top-0">Id</th>
                  <th className="border-top-0">Image</th>
                  <th className="border-top-0">Title</th>
                  <th className="border-top-0">Subtitle</th>
                  <th className="border-top-0">Price</th>
                  <th className="border-top-0">Discount</th>
                  <th className="border-top-0">ShippingCost</th>
                  <th className="border-top-0">ProductCount</th>
                  <th className="border-top-0">Stock</th>
                  <th className="border-top-0">ActiveStatus</th>
                  <th className="border-top-0">Trending</th>
                  <th className="border-top-0">Last Updated</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div>
                        <a className="btn btn-circle btn-info text-white">1</a>
                      </div>
                    </div>
                  </td>
                  <td width="40px">
                    <img className="img-thumbnail" src="http://quizplay.esy.es/quiz/images/Logomakr_0ukOms.png" />
                  </td>
                  <td>This is my first product cool!</td>
                  <td>Subtitle from different page</td>
                  <td>₹200</td>
                  <td>100%</td>
                  <td>
                    ₹30                    
                  </td>
                  <td>
                    <div className="">
                      <h4 className="m-b-0 font-16">356</h4>
                    </div>
                  </td>
                  <td>
                    <label className="label label-danger">Out stock</label>
                    <label className="label label-info">In stock</label>
                  </td>
                  <td>
                    <label className="label label-danger">Active</label>
                    <label className="label label-info">In Active</label>
                  </td>
                  <td>
                    <label className="label label-danger">Active</label>
                    <label className="label label-info">In Active</label>
                  </td>

                  <td>
                    <label className="label label-primary">20 Days ago</label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>;
  }
}

export default Product;