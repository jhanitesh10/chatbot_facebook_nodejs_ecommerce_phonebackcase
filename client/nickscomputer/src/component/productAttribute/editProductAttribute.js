import React, { Component } from 'react';
import { Container, Row, Col, Button, Modal } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios';

class Editproductattribute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            brand: [],
            phone: [],
            priceArray: [],
            category: [],
            id : 0,
            product_id : 0,
            brand_id : 0,
            phone_id : 0,
            price_id : 0,
            category_id : 0,
            product_type : '',
            title : '',
            subtitle : '',
            image : '',
            discount : 0,
            shipping_cost : 0,
            priceValue: 0,
            available : 0,
            product_count : 0,
            trending_status : 0,
            active_status : 0,
            created_on : 0,
            updated_on : 0
                }
    }

    componentDidMount(){
        let productAttributeId = this.props.match.params.id;
        axios.get(`http://localhost:1234/dashboard/product/edit?productAttributeId=${productAttributeId}`).then((response) => {
            let productAttribute = response.data;

            this.setState({
                id : productAttribute[0].id,
                product_id : productAttribute[0].product_id,
                brand_id : productAttribute[0].brand_id,
                phone_id : productAttribute[0].phone_id,
                price_id : productAttribute[0].price_id,
                category_id : productAttribute[0].category_id,
                product_type : productAttribute[0].product_type,
                title : productAttribute[0].title,
                subtitle : productAttribute[0].subtitle,
                image : productAttribute[0].image,
                priceValue: productAttribute[0].price,
                discount : productAttribute[0].discount,
                shipping_cost : productAttribute[0].shipping_cost,
                available : productAttribute[0].available,
                product_count : productAttribute[0].product_count,
                trending_status : productAttribute[0].trending_status,
                active_status : productAttribute[0].active_status,
                created_on : productAttribute[0].created_on,
                updated_on : productAttribute[0].updated_on
            });
        

        axios.get(`http://localhost:1234/dashboard/brand`)
        .then((response) => {
            let brand = response.data;
            this.setState({ brand: brand});
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
    handleBrand(e){

        let brandId = e.target.value;
        this.setState({brandId : brandId});
        axios.get(`http://localhost:1234/dashboard/phone?brandId=${brandId}`).
        then((response) => {
            let phone = response.data;
             this.setState({phone: phone});
             this.setState({brand_id: brandId});
        }).catch((error) => {
            console.log("error while getting phone value", error);
        });

    }

    handlePhone(e){
        let phoneId = e.target.value;
        this.setState({phone_id : phoneId});
    }

    handlePrice(e){
        let priceId = e.target.value;
        this.setState({price_id : priceId});
    }

    handleCategory(e){
        let categoryId = e.target.value;
        this.setState({category_id: categoryId});
    }



    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    handleFormSubmit(e){
        e.preventDefault();
        this.props.history.push('/productAttribute');

        axios.post(`http://localhost:1234/dashboard/productAttribute/editSucess`,{
            productDetail : this.state
        })
        .then((response) => {
                let category = response.data;

        })
        .catch((e) => {
            console.log("error while sending data to node platform", e);
        });

    }

    handleProductType(e){
        e.preventDefault();
        let value = e.target.value;
        this.setState({product_type : value});
        
    }
    handleTrandingOrBasic(e){
        e.preventDefault();
        let value = e.target.value;
        this.setState({trending_status: value});
    }
    handleTitle(e){
        e.preventDefault();
        let value = e.target.value;
        this.setState({title: value});
    }
    handleSubtitle(e){
        e.preventDefault();
        let value = e.target.value;
        this.setState({subtitle: value});

    }
    handleImage(e){
        e.preventDefault();
        let value = e.target.value;
        this.setState({image: value});
        
    }
    handleDiscount(e){
        e.preventDefault();
        let value = e.target.value;
        this.setState({discount: value});
        
    }
    handlePrice(e){
        e.preventDefault();
        let value = e.target.value;
        this.setState({priceValue: value});
        
    }
    handleShippingcost(e){
        e.preventDefault();
        let value = e.target.value;
        this.setState({shipping_cost: value});
        
    }
    handleAvailable(e){
        e.preventDefault();
        let value = e.target.value;
        this.setState({available: value});
        
    }
    handleStock(e){
        e.preventDefault();
        let value = e.target.value;
        this.setState({title: value});
        
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
                            } =  this.state;
                console.log("*******************************888");
                console.log(
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
                );
        
        
        return (
            <div>


<div className="modal fade" id="exampleModalLong1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">


       <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        
            <div class="card card-register mx-auto mt-5">
                <div class="card-header">Add product</div>
                    <div class="card-body">

                    <form onSubmit={this.handleFormSubmit.bind(this)}>
                        
                        <div class="form-group">
                        <h6>Select attribute</h6>
                            <hr />
                            
                            <div class="form-row">
                                <div class="col-md-3">
                                    <div class="form-label-group">
                                        <label for="firstName">Brand</label>
                                            <select onChange={(e) => { this.handleBrand(e) }} class="custom-select" id="inputGroupSelect01">
                                                {
                                                    brand.map((data, index, arr) =>
                                                        <option value={data.id} selected={brand_id === data.id} >{data.title}</option>

                                                    )}
                                            </select>
                                    </div>
                                </div>
                                
                                <div class="col-md-3">
                                    <div class="form-label-group">
                                        <label for="firstName">Phone</label>
                                            <select onChange={(e) => { this.handlePhone(e) }} class="custom-select" id="inputGroupSelect02">
                                                {
                                                    phone.map((data, index, arr) =>
                                                        <option value={data.id} selected={phone_id === data.id} >{data.title}</option>

                                                    )}
                                            </select>
                                    </div>
                                </div>

                            <div class="col-md-3">
                                    <div class="form-label-group">
                                        <label for="firstName">Price range</label>
                                            <select onChange={(e) => { this.handlePrice(e) }} class="custom-select" id="inputGroupSelect03">
                                                {
                                                    priceArray.map((data, index, arr) =>
                                                        <option value={data.id} selected={id === data.price_id}>{data.title}</option>

                                                    )}
                                            </select>

                                    </div>
                                </div>
                                
                                <div class="col-md-3">
                                    <div class="form-label-group">
                                        <label for="firstName">Category</label>                                
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

                        <h6>Product detail</h6>
                        <hr />

                        <div class="form-group">
                            <div class="form-row">
                                <div class="col-md-6">
                                    <div class="form-label-group">
                                        <label for="inputPassword">Type of product</label>
                                        <input onChange={(e) => {this.handleProductType(e)}} type="text" value={product_type} ref="typeOfProduct" id="inputPassword" class="form-control" placeholder="Type of prodct" required="required" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-label-group">
                                        <label for="confirmPassword">Tranding or Basic</label>
                                        <select onChange={(e) => {this.handleTrandingOrBasic(e)}} ref="trendingOrBasic" class="custom-select" id="inputGroupSelect04">

                                            <option value="1" selected={trending_status === 1}>Tranding</option>
                                            <option value="0" selected={trending_status === 0}>Basic</option>

                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="form-row">

                                <div class="col-md-6">
                                    <div class="form-label-group">
                                        <label for="title">Title</label>
                                        <input onChange={(e) => {this.handleTitle(e)}} type="text" id="title" class="form-control" value={title} required="required"  autofocus="autofocus" />
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-label-group">
                                        <label for="subtitle">Subtitle</label>
                                        <input onChange={(e) => {this.handleSubtitle(e)}} type="text" id="subtitle" class="form-control" value={subtitle} required="required" />
                                    </div>
                                </div>
                            </div>
                        </div>    

                        <div class="form-group">
                            <div class="form-row">
                                <div class="col-md-6">
                                    <div class="form-label-group">
                                        <label for="file">Choose image</label>
                                        <input onChange={(e) => {this.handleImage(e)}} type="file" id="image" class="form-control" placeholder="image"  autofocus="autofocus" />
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-label-group">
                                        <label for="shipping">Discount in %</label>
                                        <input onChange={(e) => {this.handleDiscount(e)}} type="number" id="discount" class="form-control" value={discount} required="required" />
                                    </div>
                                </div>
                            </div>
                        </div>  

                        <div class="form-group">
                            <div class="form-row">
                                <div class="col-md-6">
                                    <div class="form-label-group">
                                        <label for="price">Price</label>
                                        <input onChange={(e) => {this.handlePrice(e)}} type="number" id="price" class="form-control" value={priceValue} required="required" autofocus="autofocus" />
                                    </div>
                                </div>  

                                <div class="col-md-6">
                                    <div class="form-label-group">
                                        <label for="lastName">Shiping cost</label>
                                        <input onChange={(e) => {this.handleShippingcost(e)}} type="text" id="lastName" class="form-control" value={shipping_cost} required="required" />
                                    </div>
                                </div>
                            </div>
                        </div>     

                        <div class="form-group">
                            <div class="form-row">
                                <div class="col-md-6">
                                    <div class="form-label-group">
                                        <label for="available">Is available</label>
                                        <input onChange={(e) => {this.handleAvailable(e)}} type="number" id="firstName" class="form-control" value={available} placeholder="available" required="required" autofocus="autofocus" />
                                    </div>
                                </div>  

                                <div class="col-md-6">
                                    <div class="form-label-group">
                                        <label for="stock">Stock</label>
                                        <input onChange={(e) => {this.handleStock(e)}} type="number" id="stock" class="form-control" value={product_count} required="required" />
                                    </div>
                                </div>

                            </div>
                        </div>  
                                <div class="modal-footer">
                                    <button type="submit" class="btn btn-primary">Click!</button>
                                </div>
                    </form>
                    </div>
                </div>
            </div>
      
        </div>
                      
    </div>

    </div>
</div>
        );
    }
}

export default Editproductattribute;
