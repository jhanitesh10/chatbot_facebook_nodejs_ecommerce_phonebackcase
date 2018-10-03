import React, { Component } from "react";
import axios from "axios";
import Moment from "moment";

class AddProduct extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      brand: [],
      phone: [],
      price: [],
      category: [],
      brandId: 1,
      phoneId: 1,
      priceId: 1,
      categoryId: 1,
      productType: '',
      trendingOrBasic: '',
      title: '',
      subTitle: '',
      image: '',
      discount: '',
      priceValue: '',
      shippingCost: '',
      available: '',
      stock: ''
    }
  }

  componentDidMount() {

    axios.get(`http://localhost:1234/dashboard/brand`)
      .then((response) => {
        let brand = response.data;
        this.setState({ brand: brand });
        axios.get(`http://localhost:1234/dashboard/phone?brandId=${brand[0].id}`)
          .then((response) => {
            let phone = response.data;
            this.setState({ phone: phone });

            axios.get(`http://localhost:1234/dashboard/price`)
              .then((response) => {
                let price = response.data;
                this.setState({ price: price });
                axios.get(`http://localhost:1234/dashboard/category`)
                  .then((response) => {
                    let category = response.data;
                    this.setState({ category: category });
                  })
                  .catch((e) => {
                    console.log("error while sending data to node platform", e);
                  });
              })
              .catch((e) => {
                console.log("error while sending data to node platform", e);
              });

          })
          .catch((e) => {
            console.log("error while sending data to node platform", e);
          });
      })
      .catch((e) => {
        console.log("error while sending data to node platform", e);
      });

  }


  handleBrand(e) {

    let brandId = e.target.value;
    this.setState({ brandId: brandId });
    axios.get(`http://localhost:1234/dashboard/phone?brandId=${brandId}`).
      then((response) => {
        let phone = response.data;
        this.setState({ phone: phone });
      }).catch((error) => {
        console.log("error while getting phone value", error);
      });

  }

  handlePhone(e) {
    let phoneId = e.target.value;
    this.setState({ phoneId: phoneId });
  }

  handlePrice(e) {
    let priceId = e.target.value;
    this.setState({ priceId: priceId });
  }

  handleCategory(e) {
    let categoryId = e.target.value;
    this.setState({ categoryId: categoryId });
  }
  handleFormSubmit(e) {
    e.preventDefault();
    this.props.history.push('/dashboard/productattribute');
    alert("producg inserted sucessfully");
    axios.post(`http://localhost:1234/dashboard/product/add`, {
      productDetail: this.state
    })
      .then((response) => {
        let category = response.data;
      })
      .catch((e) => {
        console.log("error while sending data to node platform", e);
      });

  }

  handleProductType(e) {
    e.preventDefault();
    let value = e.target.value;
    this.setState({ productType: value });

  }
  handleTrandingOrBasic(e) {
    e.preventDefault();
    let value = e.target.value;
    this.setState({ trendingOrBasic: value });
  }
  handleTitle(e) {
    e.preventDefault();
    let value = e.target.value;
    this.setState({ title: value });
  }
  handleSubtitle(e) {
    e.preventDefault();
    let value = e.target.value;
    this.setState({ subTitle: value });

  }
  handleImage(e) {
    e.preventDefault();
    let value = e.target.value;
    this.setState({ image: value });

  }
  handleDiscount(e) {
    e.preventDefault();
    let value = e.target.value;
    this.setState({ discount: value });

  }
  handlePrice(e) {
    e.preventDefault();
    let value = e.target.value;
    this.setState({ priceValue: value });

  }
  handleShippingcost(e) {
    e.preventDefault();
    let value = e.target.value;
    this.setState({ shippingCost: value });

  }
  handleAvailable(e) {
    e.preventDefault();
    let value = e.target.value;
    this.setState({ available: value });

  }
  handleStock(e) {
    e.preventDefault();
    let value = e.target.value;
    this.setState({ title: value });

  }
  render() {
    let { brand, phone, price, category } = this.state;

    return (
        <div className="col-lg-10 col-xlg-9 col-md-7 offset-lg-1">
            <div className="card">
             
              <div className="card-header bg-white text-center">
                <h4></h4>
              </div>

                <div className="card-body">
                    <form onSubmit={this.handleFormSubmit.bind(this)} className="form-horizontal form-material">
                        
                        <h5>Select Attribute</h5>
                        <hr />
                        <div className="form-group">
                          <div className="form-row">

                            <div className="col-md-3">
                              <div className="form-label-group">
                              <label for="brand">Brand</label>
                                <select onChange={(e) => { this.handleBrand(e) }} class="custom-select" id="inputGroupSelect01">
                                  {
                                    brand.map((data, index, arr) =>
                                        <option value={data.id}>{data.title}</option>

                                    )
                                  }
                                  </select>
                              </div>
                            </div>

                            <div className="col-md-3">
                              <div className="form-label-group">
                              <label for="brand">Phone</label>
                                <select onChange={(e) => { this.handlePhone(e) }} class="custom-select" id="inputGroupSelect02">
                                  {
                                    phone.map((data, index, arr) =>
                                        <option value={data.id}>{data.title}</option>

                                    )
                                  }
                                </select>                               
                              </div>
                            </div>       

                            <div className="col-md-3">
                              <div className="form-label-group">
                              <label for="brand">Price</label>
                                <select onChange={(e) => { this.handlePrice(e) }} class="custom-select" id="inputGroupSelect03">
                                  {
                                    price.map((data, index, arr) =>
                                      <option value={data.id}>{data.title}</option>

                                    )
                                  }
                                </select>                                
                              </div>
                            </div>

                            <div className="col-md-3">
                              <div className="form-label-group">
                              <label for="brand">Category</label>
                                <select onChange={(e) => { this.handleCategory(e) }} class="custom-select" id="inputGroupSelect04">
                                  {
                                    category.map((data, index, arr) =>

                                      <option value={data.id}>{data.title}</option>

                                    )}
                                </select>                                
                              </div>
                            </div>   
                

                          </div>
                        </div>

                      <h5>Fill Product Detail</h5>
                            <hr />

                      <div className="form-group">
                        <div className="form-row">
                          
                          <div className="col-md-6">
                              <div className="form-label-group">
                                <label for="typeOfProduct">Type of product</label>
                                <input type="text" onChange={(e) => {this.handleProductType(e)}}   className="form-control form-control-line" ref="typeOfProduct" id="typeOfProduct"/>

                              </div>
                          </div>


                          <div className="col-md-6">
                            <div className="form-label-group">
                              <label for="file">Choose Image</label>
                              <input type="file" onChange={(e) => { this.handleImage(e) }} className="form-control form-control-line" />
                            </div>
                          </div>
                        </div>
                      </div>


                      
                      <div className="form-group">
                        <div className="form-row">
                          
                          <div className="col-md-6">
                              <div className="form-label-group">
                                <label for="title">Title</label>
                                <input type="text" onChange={(e) => {this.handleTitle(e)}} className="form-control form-control-line" />
                              </div>
                          </div>

                          <div className="col-md-6">
                              <div className="form-label-group">
                              <label for="subtitle">Subtile</label>
                                <input type="text" onChange={(e) => {this.handleSubtitle(e)}}  className="form-control form-control-line" /> 
                              </div>
                          </div>

                        </div>
                      </div>


                      <div className="form-group">
                        <div className="form-row">
                          
                          <div className="col-md-6">
                              <div className="form-label-group">
                                <label for="price">Price</label>
                                <input type="text" onChange={(e) => {this.handlePrice(e)}} className="form-control form-control-line" />
                              </div>
                          </div>

                          <div className="col-md-6">
                              <div className="form-label-group">
                              <label for="discount">Discount(%)</label>
                                <input type="text" onChange={(e) => {this.handleDiscount(e)}} className="form-control form-control-line"  /> 
                              </div>
                          </div>

                        </div>
                      </div>


                      <div className="form-group">
                        <div className="form-row">
                          
                          <div className="col-md-6">
                              <div className="form-label-group">
                              <label for="shippingcost">Shipping Cost</label>
                                <input type="text" onChange={(e) => {this.handleShippingcost(e)}} className="form-control form-control-line" /> 
                              </div>
                          </div>

                          <div className="col-md-6">
                              <div className="form-label-group">
                              <label for="stock">Stock</label>
                                <input type="number" onChange={(e) => {this.handleStock(e)}} className="form-control form-control-line" /> 
                              </div>
                          </div>
                          

                        </div>
                      </div>

                      <div className="form-group">
                        <div className="form-row">
                          
                          <div className="col-md-6">
                              <div className="form-label-group">
                                <label for="isAvailable">Is Available</label>
                                <select onChange={(e) => {this.handleAvailable(e)}} className="form-control form-control-line custom-select">
                                  <option value="1">Available </option>
                                  <option value="0">Unalvailable</option>
                                </select> 
                              </div>
                          </div>
                         
                          
                          <div className="col-md-6">
                            <div className="form-label-group">
                              <label for="brand">Trending</label>
                              <select onChange={(e) => { this.handleTrandingOrBasic(e) }} className="form-control form-control-line custom-select">
                                <option value="1">Trending </option>
                                <option value="0">Basic</option>
                              </select>
                            </div>
                          </div>

                        </div>
                      </div>
                      <hr />
                        <div className="form-group">
                            <div className="col-6 col-sm-12">
                                <button className="btn btn-success btn-block">Submit</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
          </div>      
    );
  }
}

export default AddProduct;