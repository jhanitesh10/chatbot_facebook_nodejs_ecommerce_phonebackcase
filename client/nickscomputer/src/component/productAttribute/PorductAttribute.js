import React, { Component } from "react";
import axios from "axios";
import Moment from "moment";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Pagination from "../pagination/Pagination.js";
import SortProductAttribute from './SortProductAttribute.js';


class ProductAttribute extends Component {

  constructor(props) {
    super(props);
    this.state = {
      productDetail: [],
      totalDataCount: 0,
      offset: 0,
      limit: 10,
      brandId: 1,
      phoneId: 1,
      priceId: 1,
      categoryId: 1,
      productAttributeId: ''
    }
  }

  componentDidMount() {

    let offset = this.state.offset,
      limit = this.state.limit,
      brandId = this.state.brandId,
      phoneId = this.state.phoneId,
      priceId = this.state.priceId,
      categoryId = this.state.categoryId;

    axios.get(`http://localhost:1234/dashboard/productAttributeCount?brandId=${brandId}&phoneId=${phoneId}&priceId=${priceId}&categoryId=${categoryId}`)
      .then((userCountResponse) => {
        let productAttributeCount = userCountResponse.data;

        axios.get(`http://localhost:1234/dashboard/productAttribute?offset=${offset}&limit=${limit}&brandId=${brandId}&phoneId=${phoneId}&priceId=${priceId}&categoryId=${categoryId}`)
          .then((response) => {
            let productDetail = response.data;
            let totalDataCount = productAttributeCount.length;

            this.setState({ productDetail: productDetail, totalDataCount: totalDataCount });
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
    let brandId = this.state.brandId,
      phoneId = this.state.phoneId,
      priceId = this.state.priceId,
      category = this.state.categoryId;

    axios.get(`http://localhost:1234/dashboard/productAttribute?offset=${offset}&limit=${limit}&brandId=${brandId}&phoneId=${phoneId}&priceId=${priceId}&categoryId=${category}`)
      .then(response => {
        let productDetail = response.data;
        this.setState({ productDetail: productDetail });
      })
      .catch(e => {
        console.log("error while sending data to node platform", e);
      });


  }


  handleProductAttributeCount(brandId, phoneId, priceId, categoryId) {

    let offset = this.state.offset,
        limit = this.state.limit;
    this.setState({ brandId: brandId, phoneId: phoneId, priceId: priceId, categoryId: categoryId });

    axios.get(`http://localhost:1234/dashboard/productAttributeCount?brandId=${brandId}&phoneId=${phoneId}&priceId=${priceId}&categoryId=${categoryId}`)
      .then((userCountResponse) => {
        let productAttributeCount = userCountResponse.data;

        axios.get(`http://localhost:1234/dashboard/productAttribute?offset=${offset}&limit=${limit}&brandId=${brandId}&phoneId=${phoneId}&priceId=${priceId}&categoryId=${categoryId}`)
          .then((response) => {
            let productDetail = response.data;
            let totalDataCount = productDetail.length;
            this.setState({ productDetail: productDetail, totalDataCount: totalDataCount });
          })
          .catch((e) => {
            console.log("error while sending data to node platform", e);
          });

      })
      .catch((e) => {
        console.log("error while getting user count", e);
      });
  }

  render() {

    let productDetail = this.state.productDetail;
    let currentDateTime = Moment().unix();
    let productAttributeDetail = this.state;
    let paginationDetail = this.state.paginationDetail;
    let productAttributeId = this.state.productAttributeId;

    return (
      <div>
        <div className="card">
          <div className="card-body">
            <div>
              <h4 className="card-title">Total Product count: {this.state.totalDataCount}</h4>
            </div>
            <div className="d-md-flex align-items-center">
              {/* sort component */}
              <SortProductAttribute handleProductAttributeCount={this.handleProductAttributeCount.bind(this)}/>
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

              {productDetail.map((data, index) => 


              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div>
                        <a className="btn btn-circle btn-info text-white">{data.productAttributeId}</a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div>
                        <a className="btn btn-circle btn-info text-white">{data.productId}</a>
                      </div>
                    </div>
                  </td>
                  <td>{data.phoneTitle}</td>
                  <td>{data.brandTitle}</td>
                  <td>₹{data.priceTitle}</td>
                  <td>{data.categoryTitle}</td>
                  <td width="40px">
                      <img className="img-thumbnail" src={data.image} />
                  </td>
                  <td>{data.title}</td>
                  <td>{data.subtitle}</td>
                  <td>₹{data.price}</td>
                  <td>{data.discount}%</td>
                  <td>₹{data.shipping_cost}</td>
                  <td>
                    <div className="">
                      <h4 className="m-b-0 font-16">{data.product_count}</h4>
                    </div>
                  </td>
                    <td>

                      {
                        (data.available) ?
                          (<label className="label label-info">In Stock</label>) : (<label className="label label-danger">Out Stock</label>)
                      }

                    </td>
                    <td>

                      {
                        (data.active_status) ?
                          (<label className="label label-info">Active</label>) : (<label className="label label-danger">Un-Active</label>)
                      }

                    </td>
                    <td>

                      {
                        (data.trending_status) ?
                          (<label className="label label-info">Trending</label>) : (<label className="label label-danger">Basic</label>)
                      }

                    </td>

                    <td>
                      <label className="label label-primary">{Math.ceil((currentDateTime - data.updated_on) / (3600 * 24))} Days ago</label>
                    </td>
                  <td>
                    <Link className="btn btn-info" to={`/dashboard/editproduct/${data.productAttributeId}`}>Edit</Link>                      
                  </td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              </tbody>

              )}

            </table>
            <Pagination data={this.state} handlePagination={this.hanldePagination.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductAttribute;