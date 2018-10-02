import React, { Component } from "react";

class ProductAttribute extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div>
        <div class="card">
          <div class="card-body">
            <div>
              <h4 class="card-title">Total Product count: 43</h4>
            </div>
            <div class="d-md-flex align-items-center">
              <div>
                <form class="form-inline">
                  <div class="form-inline">
                    <select class="custom-select">
                      <option value="0" selected>
                        Monthly
                      </option>
                      <option value="1">Daily</option>
                      <option value="2">Weekly</option>
                      <option value="3">Yearly</option>
                    </select>
                    <select class="custom-select">
                      <option value="0" selected>
                        Monthly
                      </option>
                      <option value="1">Daily</option>
                      <option value="2">Weekly</option>
                      <option value="3">Yearly</option>
                    </select>
                    <select class="custom-select">
                      <option value="0" selected>
                        Monthly
                      </option>
                      <option value="1">Daily</option>
                      <option value="2">Weekly</option>
                      <option value="3">Yearly</option>
                    </select>
                    <select class="custom-select">
                      <option value="0" selected>
                        Monthly
                      </option>
                      <option value="1">Daily</option>
                      <option value="2">Weekly</option>
                      <option value="3">Yearly</option>
                    </select>
                    <select class="custom-select">
                      <option value="0" selected>
                        Monthly
                      </option>
                      <option value="1">Daily</option>
                      <option value="2">Weekly</option>
                      <option value="3">Yearly</option>
                    </select>
                    <select class="custom-select">
                      <option value="0" selected>
                        Monthly
                      </option>
                      <option value="1">Daily</option>
                      <option value="2">Weekly</option>
                      <option value="3">Yearly</option>
                    </select>
                    <div class="input-group-prepend">
                      <button type="submit" class="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="ml-auto">
                <button class="btn btn-primary">Add product</button>
              </div>
            </div>
          </div>
          <div class="table-responsive m-t-20">
            <table class="table table-bordered  v-middle">
              <thead>
                <tr class="bg-light">
                  <th class="border-top-0">ProductAttributeId</th>
                  <th class="border-top-0">ProductId</th>
                  <th class="border-top-0">Brand</th>
                  <th class="border-top-0">Phone</th>
                  <th class="border-top-0">Price</th>
                  <th class="border-top-0">Category</th>
                  <th class="border-top-0">Image</th>
                  <th class="border-top-0">Title</th>
                  <th class="border-top-0">Subtitle</th>
                  <th class="border-top-0">Price</th>
                  <th class="border-top-0">Discount</th>
                  <th class="border-top-0">ShippingCost</th>
                  <th class="border-top-0">ProductCount</th>
                  <th class="border-top-0">Stock</th>
                  <th class="border-top-0">ActiveStatus</th>
                  <th class="border-top-0">Trending</th>
                  <th class="border-top-0">Last Updated</th>
                  <th class="border-top-0">Edit</th>
                  <th class="border-top-0">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <div>
                        <a class="btn btn-circle btn-info text-white">1</a>
                      </div>
                    </div>
                  </td>
                   <td>
                    <div class="d-flex align-items-center">
                      <div>
                        <a class="btn btn-circle btn-info text-white">1</a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="">
                      <h4 class="m-b-0 font-16">IPHONE</h4>
                    </div>
                  </td>
                  <td>
                    <div class="">
                      <h4 class="m-b-0 font-16">Iphone-se</h4>
                    </div>
                  </td>
                  <td>
                    <div class="">
                      <h4 class="m-b-0 font-16">2800</h4>
                    </div>
                  </td>
                  <td>
                    <div class="">
                      <h4 class="m-b-0 font-16">LGBT</h4>
                    </div>
                  </td>
                  <td width="40px">
                    <img class="img-thumbnail" src="http://quizplay.esy.es/quiz/images/Logomakr_0ukOms.png" />
                  </td>
                  <td>This is my first product cool!</td>
                  <td>Subtitle from different page</td>
                  <td>
                    <div class="">
                      <h4 class="m-b-0 font-16">₹200</h4>
                    </div>
                  </td>
                  <td>
                    <div class="">
                      <h4 class="m-b-0 font-16">100%</h4>
                    </div>
                  </td>
                  <td>
                    <div class="">
                      <h4 class="m-b-0 font-16">₹30</h4>
                    </div>
                  </td>
                  <td>
                    <div class="">
                    <h4 class="m-b-0 font-16">₹30</h4>
                    </div>
                  </td>
                  <td>
                    <label class="label label-danger">Out stock</label>
                    <label class="label label-info">In stock</label>
                  </td>
                  <td>
                    <label class="label label-danger">Active</label>
                    <label class="label label-info">In Active</label>
                  </td>
                  <td>
                    <div class="">
                      <h4 class="m-b-0 font-16">100</h4>
                    </div>
                  </td>

                  <td>
                    <label class="label label-primary">20 Days ago</label>
                  </td>
                   <td>
                    <button class="btn btn-info">Edit</button>
                  </td>
                  <td>
                    <button class="btn btn-danger">Delete</button>
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