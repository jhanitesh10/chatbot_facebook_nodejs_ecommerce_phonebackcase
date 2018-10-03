import React, { Component } from "react";
import axios from "axios";
import Moment from "moment";
import Pagination from "../pagination/Pagination.js";

class User extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userDetail: [],
      totalDataCount: 0,
      offset: 0,
      limit: 2
    }
  }


  componentDidMount(){
        
    let offset = this.state.offset,
        limit = this.state.limit;

    axios.get(`http://localhost:1234/dashboard/facebookUser/Count`)
      .then( (userCountResponse) => {
        let userDetailCount = userCountResponse.data;

        axios.get(`http://localhost:1234/dashboard/facebookUser?offset=${offset}&limit=${limit}`)
          .then((response) => {
                let userDetailArray = response.data;
                let totalDataCount = userDetailCount.length;
                
    
                this.setState({ userDetail: userDetailArray, totalDataCount: totalDataCount });
          })
            .catch((e) => {
                console.log("error while sending data to node platform at Usercomponent inside componentDidMount", e);
          });

    })
    .catch((e) => {
        console.log("error while getting user coun at usercomponent inside componentDidMount", e);
    });


  }


  hanldePagination(key) {
    let totalDataCount = this.state.totalDataCount;
    let limit = this.state.limit;
    let totalPage = Math.ceil(totalDataCount / limit);
    let offset = (limit) * (key - 1);

    axios.get(`http://localhost:1234/dashboard/facebookUser?offset=${offset}&limit=${limit}`)
      .then((response) => {
        let userDetailArray = response.data;
        this.setState({ userDetail: userDetailArray });
      })
      .catch((e) => {
        console.log("error while sending data to node platform at usercomponent inside handlePagination method", e);
      });


  }


  render() {
    let userDetail = this.state.userDetail;
    let currentDateTime = Moment().unix();
    let paginationDetail = this.state.paginationDetail;

    return (
      <div className="card">
        <div className="card-body">
         Order.
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="d-md-flex align-items-center">
                    <div>
                      <h4 className="card-title">List of all Order</h4>
                      <h5 className="card-subtitle">Overview of Top Selling Items</h5>
                    </div>
                    <div className="ml-auto">
                      <div className="dl">
                        <select className="custom-select">
                          <option value="0" selected>Monthly</option>
                          <option value="1">Daily</option>
                          <option value="2">Weekly</option>
                          <option value="3">Yearly</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table-responsive m-t-20">
                  <table className="table table-bordered  v-middle">
                    <thead>
                      <tr className="bg-light">
                        <th className="border-top-0">Id</th>
                        <th className="border-top-0">Name</th>
                        <th className="border-top-0">Picture</th>
                        <th className="border-top-0">Gender</th>
                        <th className="border-top-0">Locale</th>
                        <th className="border-top-0">Timezone</th>
                        <th className="border-top-0">Last Active</th>
                      </tr>
                    </thead>

                    {userDetail.map((data, index) =>

                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div><a className="btn btn-circle btn-info text-white">{data.id}</a></div>
                          </div>
                        </td>
                        <td>
                          <div className="">
                            <h4 className="m-b-0 font-16">{data.name}</h4>
                          </div>
                        </td>
                        <td width="40px">
                          <img className="img-thumbnail" src={data.profile_picture} />
                        </td>
                        <td>
                          {data.gender}
                        </td>
                        <td>
                        {data.locale}
                        </td>
                        <td>
                          {data.timezone}
                        </td>
                        <td>
                          <label className="label label-primary">{Math.ceil((currentDateTime - data.updated_on) / (3600 * 24))} Days ago</label>
                        </td>
                      </tr>

                    </tbody>

                    )}
                  </table>

                  <Pagination data={this.state} handlePagination={this.hanldePagination.bind(this)} />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;