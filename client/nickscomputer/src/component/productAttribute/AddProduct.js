import React, { Component } from "react";

class AddProduct extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div class="col-lg-10 col-xlg-9 col-md-7 offset-lg-1">
            <div class="card">
             
              <div class="card-header bg-white text-center">
                <h4></h4>
              </div>

                <div class="card-body">
                    <form class="form-horizontal form-material">
                        
                           <h5>Select Attribute</h5>
                            <hr />
                        <div class="form-group">
                          <div class="form-row">

                            <div class="col-md-3">
                              <div class="form-label-group">
                              <label for="brand">Brand</label>
                                <select class="custom-select">
                                </select>                                
                              </div>
                            </div>

                            <div class="col-md-3">
                              <div class="form-label-group">
                              <label for="brand">Phone</label>
                                <select class="custom-select">
                                </select>                                
                              </div>
                            </div>       

                            <div class="col-md-3">
                              <div class="form-label-group">
                              <label for="brand">Price</label>
                                <select class="custom-select">
                                </select>                                
                              </div>
                            </div>

                            <div class="col-md-3">
                              <div class="form-label-group">
                              <label for="brand">Category</label>
                                <select class="custom-select">
                                </select>                                
                              </div>
                            </div>   
                

                          </div>
                        </div>

                      <h5>Fill Product Detail</h5>
                            <hr />

                      <div class="form-group">
                        <div class="form-row">
                          
                          <div class="col-md-6">
                              <div class="form-label-group">
                                <label for="typeOfProduct">Type of product</label>
                                <input type="text"   class="form-control form-control-line" ref="typeOfProduct" id="typeOfProduct"/>

                              </div>
                          </div>

                          <div class="col-md-6">
                              <div class="form-label-group">
                              <label for="brand">Brand</label>
                                <select class="form-control form-control-line custom-select">
                                <option>Select </option>
                                <option>iphone</option>
                                <option>iphone</option>
                                <option>iphone</option>
                                <option>iphone</option>
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
                                <input type="text"  class="form-control form-control-line" />
                              </div>
                          </div>

                          <div class="col-md-6">
                              <div class="form-label-group">
                              <label for="subtitle">Subtile</label>
                                <input type="text"  class="form-control form-control-line" /> 
                              </div>
                          </div>

                        </div>
                      </div>


                      <div class="form-group">
                        <div class="form-row">
                          
                          <div class="col-md-6">
                              <div class="form-label-group">
                                <label for="file">Choose Image</label>
                                <input type="file" class="form-control form-control-line"  />
                              </div>
                          </div>

                          <div class="col-md-6">
                              <div class="form-label-group">
                              <label for="discount">Discount %</label>
                                <input type="text"  class="form-control form-control-line"  /> 
                              </div>
                          </div>

                        </div>
                      </div>


                      <div class="form-group">
                        <div class="form-row">
                          
                          <div class="col-md-6">
                              <div class="form-label-group">
                                <label for="price">Price</label>
                                <input type="text"  class="form-control form-control-line" />
                              </div>
                          </div>

                          <div class="col-md-6">
                              <div class="form-label-group">
                              <label for="shippingcost">Shipping Cost</label>
                                <input type="text"  class="form-control form-control-line" /> 
                              </div>
                          </div>

                        </div>
                      </div>

                      <div class="form-group">
                        <div class="form-row">
                          
                          <div class="col-md-6">
                              <div class="form-label-group">
                                <label for="isAvailable">Is Available</label>
                                <input type="text"  class="form-control form-control-line" />
                              </div>
                          </div>

                          <div class="col-md-6">
                              <div class="form-label-group">
                              <label for="stock">Stock</label>
                                <input type="text"  class="form-control form-control-line" /> 
                              </div>
                          </div>

                        </div>
                      </div>
                      <hr />
                        <div class="form-group">
                            <div class="col-6 col-sm-12">
                                <button class="btn btn-success btn-block">Submit</button>
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