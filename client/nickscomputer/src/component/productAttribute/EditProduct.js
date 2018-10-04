import React, { Component } from "react";
import axios from "axios";
import Moment from "moment";


class EditProduct extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      brand: [],
      phone: [],
      priceArray: [],
      category: [],
      id: 0,
      product_id: 0,
      brand_id: 0,
      phone_id: 0,
      price_id: 0,
      category_id: 0,
      product_type: '',
      title: '',
      subtitle: '',
      image: '',
      discount: 0,
      shipping_cost: 0,
      priceValue: 0,
      available: 0,
      product_count: 0,
      trending_status: 0,
      active_status: 0,
      created_on: 0,
      updated_on: 0
    }
  }

  componentDidMount() {
    let productAttributeId = this.props.match.params.id;
    axios.get(`http://localhost:1234/dashboard/product/edit?productAttributeId=${productAttributeId}`).then((response) => {
      let productAttribute = response.data;

      this.setState({
        id: productAttribute[0].id,
        product_id: productAttribute[0].product_id,
        brand_id: productAttribute[0].brand_id,
        phone_id: productAttribute[0].phone_id,
        price_id: productAttribute[0].price_id,
        category_id: productAttribute[0].category_id,
        product_type: productAttribute[0].product_type,
        title: productAttribute[0].title,
        subtitle: productAttribute[0].subtitle,
        image: productAttribute[0].image,
        priceValue: productAttribute[0].price,
        discount: productAttribute[0].discount,
        shipping_cost: productAttribute[0].shipping_cost,
        available: productAttribute[0].available,
        product_count: productAttribute[0].product_count,
        trending_status: productAttribute[0].trending_status,
        active_status: productAttribute[0].active_status,
        created_on: productAttribute[0].created_on,
        updated_on: productAttribute[0].updated_on
      });


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
                  this.setState({ priceArray: price });
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
    }).catch((error) => {
      console.log("Error while editing product attribute data", error);
    });

  }


  handleBrand(e) {

    let brandId = e.target.value;
    this.setState({ brandId: brandId });
    axios.get(`http://localhost:1234/dashboard/phone?brandId=${brandId}`).
      then((response) => {
        let phone = response.data;
        this.setState({ phone: phone });
        this.setState({ brand_id: brandId });
      }).catch((error) => {
        console.log("error while getting phone value", error);
      });

  }

  handlePhone(e) {
    let phoneId = e.target.value;
    this.setState({ phone_id: phoneId });
  }

  handlePrice(e) {
    let priceId = e.target.value;
    this.setState({ price_id: priceId });
  }

  handleCategory(e) {
    let categoryId = e.target.value;
    this.setState({ category_id: categoryId });
  }



  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.props.history.push('/dashboard/productattribute');
    let productAttributeId = this.props.match.params.id;
    alert(`The product with id ${productAttributeId} edited sucessfully!`);
    this.props.history.push({
      pathname: '/dashboard/productattribute',
      state: { message: `Product with product id ${productAttributeId} etited sucssfully` }
    });
    

    
    axios.post(`http://localhost:1234/dashboard/productAttribute/editSucess`, {
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
    this.setState({ product_type: value });

  }
  handleTrandingOrBasic(e) {
    e.preventDefault();
    let value = e.target.value;
    this.setState({ trending_status: value });
  }
  handleTitle(e) {
    e.preventDefault();
    let value = e.target.value;
    this.setState({ title: value });
  }
  handleSubtitle(e) {
    e.preventDefault();
    let value = e.target.value;
    this.setState({ subtitle: value });

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
    this.setState({ shipping_cost: value });

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
  let productAttributeDetail = this.state;
  let {
    brand,
    phone,
    priceArray,
    category,
    id,

    product_id,

    brand_id,
    phone_id,
    price_id,
    category_id,
    priceValue,
    product_type,
    title,
    subtitle,
    image,
    discount,
    shipping_cost,
    available,
    product_count,
    trending_status,
    active_status,
    created_on,
    updated_on
  } = this.state;

  
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
                            <option value={data.id} selected={brand_id === data.id} >{data.title}</option>

                          )}
                      </select>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-label-group">
                      <label for="brand">Phone</label>
                      <select onChange={(e) => { this.handlePhone(e) }} class="custom-select" id="inputGroupSelect02">
                        {
                          phone.map((data, index, arr) =>
                            <option value={data.id} selected={phone_id === data.id} >{data.title}</option>

                          )}
                      </select>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-label-group">
                      <label for="brand">Price</label>
                      <select onChange={(e) => { this.handlePrice(e) }} class="custom-select" id="inputGroupSelect03">
                        {
                          priceArray.map((data, index, arr) =>
                            <option value={data.id} selected={id === data.price_id}>{data.title}</option>

                          )}
                      </select>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-label-group">
                      <label for="brand">Category</label>
                      <select onChange={(e) => { this.handleCategory(e) }} class="custom-select" id="inputGroupSelect04">
                        {
                          category.map((data, index, arr) =>

                            <option value={data.id} selected={category_id === data.id}>{data.title}</option>

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
                      <input type="text" onChange={(e) => { this.handleProductType(e) }} value={product_type} className="form-control form-control-line" ref="typeOfProduct" id="typeOfProduct" />

                    </div>
                  </div>


                  <div className="col-md-6">
                    <div className="form-label-group">
                      <label for="file">Choose Image</label>
                      <input type="file" onChange={(e) => {this.handleImage(e)}} className="form-control form-control-line" />
                    </div>
                  </div>
                </div>
              </div>



              <div className="form-group">
                <div className="form-row">

                  <div className="col-md-6">
                    <div className="form-label-group">
                      <label for="title">Title</label>
                      <input type="text" onChange={(e) => { this.handleTitle(e) }} value={title} className="form-control form-control-line" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-label-group">
                      <label for="subtitle">Subtile</label>
                      <input type="text" onChange={(e) => { this.handleSubtitle(e) }} value={subtitle} className="form-control form-control-line" />
                    </div>
                  </div>

                </div>
              </div>


              <div className="form-group">
                <div className="form-row">

                  <div className="col-md-6">
                    <div className="form-label-group">
                      <label for="price">Price</label>
                      <input type="text" onChange={(e) => {this.handlePrice(e)}} value={priceValue} className="form-control form-control-line" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-label-group">
                      <label for="discount">Discount(%)</label>
                      <input type="text" onChange={(e) => { this.handleDiscount(e) }} value={discount} className="form-control form-control-line" />
                    </div>
                  </div>

                </div>
              </div>


              <div className="form-group">
                <div className="form-row">

                  <div className="col-md-6">
                    <div className="form-label-group">
                      <label for="shippingcost">Shipping Cost</label>
                      <input type="text" onChange={(e) => { this.handleShippingcost(e) }} value={shipping_cost} className="form-control form-control-line" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-label-group">
                      <label for="stock">Stock</label>
                      <input type="number" onChange={(e) => { this.handleStock(e) }} value={product_count} className="form-control form-control-line" />
                    </div>
                  </div>


                </div>
              </div>

              <div className="form-group">
                <div className="form-row">

                  <div className="col-md-6">
                    <div className="form-label-group">
                      <label for="isAvailable">Is Available</label>
                      <select onChange={(e) => { this.handleAvailable(e) }} className="form-control form-control-line custom-select">
                        <option value="1" selected={available === 1}>Available</option>
                        <option value="0" selected={available === 0}>Un-Available</option>
                      </select>
                    </div>
                  </div>


                  <div className="col-md-6">
                    <div className="form-label-group">
                      <label for="brand">Trending</label>
                      <select onChange={(e) => { this.handleTrandingOrBasic(e) }}  class="form-control form-control-line custom-select">

                        <option value="1" selected={trending_status === 1}>Tranding</option>
                        <option value="0" selected={trending_status === 0}>Basic</option>

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

export default EditProduct;