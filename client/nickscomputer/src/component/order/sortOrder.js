import React, { Component } from 'react';
import axios from 'axios';

class Sortorder extends Component {
    constructor(props){
        super(props);
        this.state = {
            paymentStatus:1,
            deliveryStatus:1,
            processStatus:1,
            orderStatus:1
        }
    }

    componentDidMount(){
        let data = this.props.details;

        this.setState({
            paymentStatus : data.paymentStatus,
            deliveryStatus : data.deliveryStatus,
            processStatus : data.processStatus,
            orderStatus : data.orderStatus
        });

    }

    handlePaymentStatus(e){
        let paymentId = e.target.value;
        this.setState({ paymentStatus: paymentId});
    }
    handleDeliveryStatus(e){
        let deliveryId = e.target.value;
        this.setState({ deliveryStatus: deliveryId});
    }
  
    handleProcesssStatus(e){
        let processId = e.target.value;
        this.setState({processStatus: processId});
    }
    handleOrderTypeStatus(e){
        let orderId = e.target.value;
        this.setState({orderStatus:orderId});
    }
    handleSubmit(e){
        e.preventDefault();

        let paymentStatus = this.state.paymentStatus,
            deliveryStatus = this.state.deliveryStatus,
            processStatus = this.state.processStatus,
            orderStatus = this.state.orderStatus;

        this.props.handleOrderSort(paymentStatus,deliveryStatus,processStatus,orderStatus);

    }
  render() {
      let {
          paymentStatus,
          deliveryStatus,
          processStatus,
          orderStatus
      } = this.state;

      return (
            <div>
            

            <form onSubmit={(e) => {this.handleSubmit(e)}} class="form-inline">
         

                <div class="input-group mb-3">
                    <select onChange={(e) => { this.handlePaymentStatus(e)}} class="custom-select" id="inputGroupSelect01">
                            <option  value="0" selected={paymentStatus===0}>Un-paid</option>
                            <option  value="1" selected={paymentStatus===1}>Paid</option>
                    </select>
                    
                    <select onChange={(e) => { this.handleDeliveryStatus(e)}} class="custom-select" id="inputGroupSelect01">
                          <option value="0" selected={deliveryStatus === 0}>Delived</option>
                          <option value="1" selected={deliveryStatus === 1}>Undelivred</option>
                    </select>


                    <select onChange={(e) => { this.handleProcesssStatus(e)}} class="custom-select" id="inputGroupSelect01">
                          <option value="0" selected={processStatus === 0}>Processed</option>
                          <option value="1" selected={processStatus === 1}>un-processed</option>
                    </select>

                    <select onChange={(e) => { this.handleOrderTypeStatus(e) }} class="custom-select" id="inputGroupSelect01">
                        <option value="0" selected={orderStatus === 0}>Attached</option>
                        <option value="1" selected={orderStatus === 1}>Simple</option>
                    </select>

                    <div class="input-group-prepend">
                        <button type="submit" class="btn btn-default">Submit</button>
                    </div>

                </div>

    
            </form>
            </div>
         );
  }
}

export default Sortorder;
