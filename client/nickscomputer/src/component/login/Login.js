import React, { Component } from "react";
import './login.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

class Header extends Component {

   constructor() {
      super();
      this.state={
            email:'',
            password:''   
      };
   }
   handleEmail(e){
      e.preventDefault();
      let email = e.target.value;
      this.setState({
            email:email
      });
   }

   handlePassword(e){
         e.preventDefault();
         let password = e.target.value;
         this.setState({
               password: password
         });
      }
      handleSubmit(e){
            e.preventDefault();

            let {email, password} = this.state;
            axios.post(`http://localhost:1234/login?email=${email}&password=${password}`).
            then((response) => {
                  let checkUser = response.data;
                  let checkStatus = response.status;
                  
                  if(checkStatus === 200 && checkUser){
                        console.log("Hey we got you!!!", checkUser);
                        this.setState({
                              isAuthenticated: true
                        });
                        this.props.updateAuthenticStatus(this.state.isAuthenticated);
                        console.log(this.props.match, this.props.path, this.props.url);
                        this.props.history.push("/")
                             
                        }else{
                              console.log("Error while authenticating user");
                        }

                  }).catch((error) => {
                        console.log("error while getting phone value", error);
                  });
      }
   render() {
       
      return (
      <section class="login-block">
            <div class="container">
                  
                  <div class="row">
                        <div class="col-md-4 login-sec">
                        <h2 class="text-center">Login Now</h2>
                        
                        <form onSubmit={this.handleSubmit.bind(this)} class="login-form">
                        
                              <div class="form-group">
                                    <label for="email" class="text-uppercase">Email</label>
                                    <input onChange={(e) => {this.handleEmail(e)}} type="text" class="form-control" placeholder="" required/>
                                    
                              </div>
                              
                                    <div class="form-group">
                                          <label for="password" class="text-uppercase">Password</label>
                                          <input onChange={(e) => {this.handlePassword(e)}} type="password" class="form-control" placeholder="" required/>
                                    </div>

                  
                              <div class="form-check">
                                    <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" />
                                    <small>Remember Me</small>
                                    </label>
                                    <button type="submit" class="btn btn-login float-right">Submit</button>
                              </div>
            
                        </form>
                        
                        
                        <div class="copy-text">Created with <i class="fa fa-heart"></i> by <a href="http://grafreez.com">Grafreez.com</a></div>                        
                        
                        </div>
                        <div class="col-md-8 banner-sec">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                     
                     <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                      </ol>
                      
                    <div class="carousel-inner" role="listbox">
                        
                        <div class="carousel-item active">
                          <img class="d-block img-fluid" src="https://static.pexels.com/photos/33972/pexels-photo.jpg" alt="First slide" />
                          <div class="carousel-caption d-none d-md-block">
                            <div class="banner-text">
                                <h2>This is Heaven</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                            </div>	
                         </div>
                        </div>
                   
                    
                        <div class="carousel-item">
                          <img class="d-block img-fluid" src="https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg" alt="First slide" />
                          <div class="carousel-caption d-none d-md-block">
                            <div class="banner-text">
                                <h2>This is Heaven</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                            </div>	
                        </div>
                        </div>
                        
                        <div class="carousel-item">
                          <img class="d-block img-fluid" src="https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg" alt="First slide" />
                          <div class="carousel-caption d-none d-md-block">
                            <div class="banner-text">
                                <h2>This is Heaven</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                            </div>	
                        </div>
                      </div>
                              
                    </div>	   
		    
	        </div>
	   </div>
                  </div>
            </div>
      </section>
      );
   }
}

export default Header;