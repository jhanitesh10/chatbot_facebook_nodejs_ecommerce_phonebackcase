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
                        
                        <div class="form-group">
                           <h4>Slect Attribute</h4>
                            <hr />
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
                              <label for="brand">Brand</label>
                                <select class="custom-select">
                                </select>                                
                              </div>
                            </div>       

                            <div class="col-md-3">
                              <div class="form-label-group">
                              <label for="brand">Brand</label>
                                <select class="custom-select">
                                </select>                                
                              </div>
                            </div>

                            <div class="col-md-3">
                              <div class="form-label-group">
                              <label for="brand">Brand</label>
                                <select class="custom-select">
                                </select>                                
                              </div>
                            </div>   
                           


                          </div>
                        </div>

                        <div class="form-group">
                            <label for="example-email" class="col-md-12">Email</label>
                            <div class="col-md-12">
                                <input type="email" placeholder="johnathan@admin.com" class="form-control form-control-line" name="example-email" id="example-email"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-md-12">Password</label>
                            <div class="col-md-12">
                                <input type="password" value="password" class="form-control form-control-line"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-12">Phone No</label>
                            <div class="col-md-12">
                                <input type="text" placeholder="123 456 7890" class="form-control form-control-line"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-12">Message</label>
                            <div class="col-md-12">
                                <textarea rows="5" class="form-control form-control-line"></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-12">Select Country</label>
                            <div class="col-sm-12">
                                <select class="form-control form-control-line">
                                    <option>London</option>
                                    <option>India</option>
                                    <option>Usa</option>
                                    <option>Canada</option>
                                    <option>Thailand</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-12">
                                <button class="btn btn-success">Update Profile</button>
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