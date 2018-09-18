import React, { Component } from 'react';
import { Container, Row, Col, Button, Modal } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios';

class Addproduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            brand: [],
            phone: [],
            price: [],
            category: [],
            brandId : 1,
            phoneId: 1,
            priceId : 1,
            categoryId : 1,
            productType : '',
            trendingOrBasic : '',
            title : '',
            subTitle : '',
            image : '',
            discount : '',
            priceValue : '',
            shippingCost : '',
            available : '',
            stock : ''            
        }
    }

    componentDidMount(){
       
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
    handleBrand(e){

        let brandId = e.target.value;
        this.setState({brandId : brandId});
        axios.get(`http://localhost:1234/dashboard/phone?brandId=${brandId}`).
        then((response) => {
            let phone = response.data;
             this.setState({phone: phone});
        }).catch((error) => {
            console.log("error while getting phone value", error);
        });

    }

    handlePhone(e){
        let phoneId = e.target.value;
        this.setState({phoneId : phoneId});
    }

    handlePrice(e){
        let priceId = e.target.value;
        this.setState({priceId : priceId});
    }

    handleCategory(e){
        let categoryId = e.target.value;
        this.setState({categoryId: categoryId});
    }



    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    handleFormSubmit(e){
        e.preventDefault();

        axios.post(`http://localhost:1234/dashboard/product/add`,{
            productDetail : this.state
        })
        .then((response) => {
                let category = response.data;
console.log("********************", category);
        })
        .catch((e) => {
            console.log("error while sending data to node platform", e);
        });

    }

    handleProductType(e){
        e.preventDefault();
        let value = e.target.value;
        this.setState({productType : value});
        
    }
    handleTrandingOrBasic(e){
        e.preventDefault();
        let value = e.target.value;
        this.setState({trendingOrBasic: value});
    }
    handleTitle(e){
        e.preventDefault();
        let value = e.target.value;
        this.setState({title: value});
    }
    handleSubtitle(e){
        e.preventDefault();
        let value = e.target.value;
        this.setState({subTitle: value});

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
        this.setState({shippingCost: value});
        
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
        let { brand, phone, price, category } = this.state;

        return (
            <div>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
  Add product
</button>

<div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
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
                                                        <option value={data.id}>{data.title}</option>

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
                                                        <option value={data.id}>{data.title}</option>

                                                    )}
                                            </select>
                                    </div>
                                </div>

                            <div class="col-md-3">
                                    <div class="form-label-group">
                                        <label for="firstName">Price range</label>
                                            <select onChange={(e) => { this.handlePrice(e) }} class="custom-select" id="inputGroupSelect03">
                                                {
                                                    price.map((data, index, arr) =>
                                                        <option value={data.id}>{data.title}</option>

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

                                                        <option value={data.id}>{data.title}</option>

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
                                        <input onChange={(e) => {this.handleProductType(e)}} type="text" ref="typeOfProduct" id="inputPassword" class="form-control" placeholder="Type of prodct" required="required" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-label-group">
                                        <label for="confirmPassword">Tranding or Basic</label>
                                        <select onChange={(e) => {this.handleTrandingOrBasic(e)}} ref="trendingOrBasic" class="custom-select" id="inputGroupSelect04">

                                            <option value="1">Tranding</option>
                                            <option value="0">Basic</option>

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
                                        <input onChange={(e) => {this.handleTitle(e)}} type="text" id="title" class="form-control" placeholder="Title" required="required"  autofocus="autofocus" />
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-label-group">
                                        <label for="subtitle">Subtitle</label>
                                        <input onChange={(e) => {this.handleSubtitle(e)}} type="text" id="subtitle" class="form-control" placeholder="subtitle" required="required" />
                                    </div>
                                </div>
                            </div>
                        </div>    

                        <div class="form-group">
                            <div class="form-row">
                                <div class="col-md-6">
                                    <div class="form-label-group">
                                        <label for="file">Choose image</label>
                                        <input onChange={(e) => {this.handleImage(e)}} type="file" id="image" class="form-control" placeholder="image" required="required" autofocus="autofocus" />
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-label-group">
                                        <label for="shipping">Discount in %</label>
                                        <input onChange={(e) => {this.handleDiscount(e)}} type="number" id="discount" class="form-control" placeholder="Discount" required="required" />
                                    </div>
                                </div>
                            </div>
                        </div>  

                        <div class="form-group">
                            <div class="form-row">
                                <div class="col-md-6">
                                    <div class="form-label-group">
                                        <label for="price">Price</label>
                                        <input onChange={(e) => {this.handlePrice(e)}} type="number" id="price" class="form-control" placeholder="price" required="required" autofocus="autofocus" />
                                    </div>
                                </div>  

                                <div class="col-md-6">
                                    <div class="form-label-group">
                                        <label for="lastName">Shiping cost</label>
                                        <input onChange={(e) => {this.handleShippingcost(e)}} type="text" id="lastName" class="form-control" placeholder="Last name" required="required" />
                                    </div>
                                </div>
                            </div>
                        </div>     

                        <div class="form-group">
                            <div class="form-row">
                                <div class="col-md-6">
                                    <div class="form-label-group">
                                        <label for="available">Is available</label>
                                        <input onChange={(e) => {this.handleAvailable(e)}} type="number" id="firstName" class="form-control" placeholder="available" required="required" autofocus="autofocus" />
                                    </div>
                                </div>  

                                <div class="col-md-6">
                                    <div class="form-label-group">
                                        <label for="stock">Stock</label>
                                        <input onChange={(e) => {this.handleStock(e)}} type="number" id="stock" class="form-control" placeholder="stock" required="required" />
                                    </div>
                                </div>

                            </div>
                        </div>  
                                <div class="modal-footer">
                                    <button type="submit" class="btn btn-primary">Save</button>
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

export default Addproduct;
