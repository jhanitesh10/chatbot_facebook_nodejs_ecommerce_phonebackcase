import React, { Component } from "react";
import axios from "axios";
import Moment from "moment";





class SortProductAttribute extends Component {

  constructor(props) {
    super(props);
     this.state = {
        brand: [],
        phone: [],
        price: [],
        category: [],
        brandId: 1,
        phoneId: 1,
        priceId: 1,
        categoryId: 1
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

    handleSubmit(e){
        e.preventDefault();
        console.log(e.target.value);
        let brandId = this.state.brandId,
            phoneId = this.state.phoneId,
            priceId = this.state.priceId,
            categoryId = this.state.categoryId;

        this.props.handleProductAttributeCount(brandId,phoneId, priceId, categoryId);

    }


  render() {
     let { brand, phone, price, category } = this.state;

    return (
       <div>
          <form onSubmit={(e) => { this.handleSubmit(e) }} className="form-inline">
             <div className="form-inline">
                
                <select onChange={(e) => { this.handleBrand(e) }} class="custom-select">
                   {
                      brand.map((data, index, arr) =>
                         <option value={data.id}>{data.title}</option>

                      )
                  }
                </select>

                <select onChange={(e) => { this.handlePhone(e) }} class="custom-select" id="inputGroupSelect02">
                   {
                      phone.map((data, index, arr) =>
                         <option value={data.id}>{data.title}</option>

                      )
                  }
                </select>
                
                
                <select onChange={(e) => { this.handlePrice(e) }} class="custom-select" id="inputGroupSelect03">
                   {
                      price.map((data, index, arr) =>
                         <option value={data.id}>{data.title}</option>

                      )
                  }
                </select>


                <select onChange={(e) => { this.handleCategory(e) }} class="custom-select" id="inputGroupSelect04">
                   {
                      category.map((data, index, arr) =>

                         <option value={data.id}>{data.title}</option>

                      )
                  }
                </select>
      
                <div className="input-group-prepend">
                   <button type="submit" className="btn btn-primary">
                      Submit
                      </button>
                </div>

             </div>
          </form>
       </div>
    );
   }
}


export default SortProductAttribute;