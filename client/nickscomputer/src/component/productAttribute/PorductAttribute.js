import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class ProductAttribute extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div>
        <div className="card">
          <div className="card-body">
            <div>
              <h4 className="card-title">Total Product count: 43</h4>
            </div>
            <div className="d-md-flex align-items-center">
              <div>
                <form className="form-inline">
                  <div className="form-inline">
                    <select className="custom-select">
                      <option value="0" selected>
                        Monthly
                      </option>
                      <option value="1">Daily</option>
                      <option value="2">Weekly</option>
                      <option value="3">Yearly</option>
                    </select>
                    <select className="custom-select">
                      <option value="0" selected>
                        Monthly
                      </option>
                      <option value="1">Daily</option>
                      <option value="2">Weekly</option>
                      <option value="3">Yearly</option>
                    </select>
                    <select className="custom-select">
                      <option value="0" selected>
                        Monthly
                      </option>
                      <option value="1">Daily</option>
                      <option value="2">Weekly</option>
                      <option value="3">Yearly</option>
                    </select>
                    <select className="custom-select">
                      <option value="0" selected>
                        Monthly
                      </option>
                      <option value="1">Daily</option>
                      <option value="2">Weekly</option>
                      <option value="3">Yearly</option>
                    </select>
                    <select className="custom-select">
                      <option value="0" selected>
                        Monthly
                      </option>
                      <option value="1">Daily</option>
                      <option value="2">Weekly</option>
                      <option value="3">Yearly</option>
                    </select>
                    <select className="custom-select">
                      <option value="0" selected>
                        Monthly
                      </option>
                      <option value="1">Daily</option>
                      <option value="2">Weekly</option>
                      <option value="3">Yearly</option>
                    </select>
                    <div className="input-group-prepend">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="ml-auto">
                <Link className="btn btn-info" to={'/dashboard/addproduct'}>Add Product</Link>
              </div>
            </div>
          </div>
          <div className="table-responsive m-t-20">
            <table className="table table-bordered  v-middle">
              <thead>
                <tr className="bg-light">
                  <th className="border-top-0">ProductAttributeId</th>
                  <th className="border-top-0">ProductId</th>
                  <th className="border-top-0">Brand</th>
                  <th className="border-top-0">Phone</th>
                  <th className="border-top-0">Price</th>
                  <th className="border-top-0">Category</th>
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
                  <th className="border-top-0">Edit</th>
                  <th className="border-top-0">Delete</th>
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
                  <td>
                    <div className="d-flex align-items-center">
                      <div>
                        <a className="btn btn-circle btn-info text-white">1</a>
                      </div>
                    </div>
                  </td>
                  <td>IPHONE</td>
                  <td>Iphone-se</td>
                  <td>₹2800</td>
                  <td>LGBT</td>
                  <td width="40px">
                    <img className="img-thumbnail" src="http://quizplay.esy.es/quiz/images/Logomakr_0ukOms.png" />
                  </td>
                  <td>This is my first product cool!</td>
                  <td>Subtitle from different page</td>
                  <td>₹200</td>
                  <td>100%</td>
                  <td>₹30</td>
                  <td>
                    <div className="">
                      <h4 className="m-b-0 font-16">30</h4>
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
                    <label className="label label-danger">Trending</label>
                    <label className="label label-info">Basic</label>
                  </td>

                  <td>
                    <label className="label label-primary">20 Days ago</label>
                  </td>
                  <td>
                    <Link className="btn btn-info" to="/dashboard/productattribute/addproduct">Edit</Link>
                  </td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>;
  }
}

export default ProductAttribute;