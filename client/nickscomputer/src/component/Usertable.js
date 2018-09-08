import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Moment from "moment";
import {
  faCoffee,
  faCheckSquare,
  faTimesCircle,
  faTrashAlt,
  faSearch,
  faBell,
  faBars,
  faUserCircle,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pagination from './Pagination.js';

class userTable extends Component{

    constructor(props){
        super(props);
        this.state = {
            userDetail : [],
            totalDataCount: 0,
            offset : 0,
            limit : 2
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
                    console.log("error while sending data to node platform", e);
                });

        })
        .catch((e) => {
            console.log("error while getting user count", e);
        });


    }

    hanldePagination(key){
        let totalDataCount = this.state.totalDataCount;
        let limit = this.state.limit;
        let totalPage = Math.ceil(totalDataCount / limit);
        let offset = (limit)*(key-1);


        axios.get(`http://localhost:1234/dashboard/facebookUser?offset=${offset}&limit=${limit}`)
            .then((response) => {
                let userDetailArray = response.data;
                this.setState({ userDetail: userDetailArray });
            })
            .catch((e) => {
                console.log("error while sending data to node platform", e);
            });


        // alert(key);
    }

    render(){
        let userDetail = this.state.userDetail;
        let currentDateTime = Moment().unix();
        let url = "http://quizplay.esy.es/quiz/images/Logomakr_0ukOms.png";
        let paginationDetail = this.state.paginationDetail;
        return (
            <div>
            <div className="card-header">
                <i className="fas fa-table"></i>
                Data Table Example
            </div>
            <div className="card-body">
                <div className="table-responsive">

                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Picture</th>
                                <th>Gender</th>
                                <th>Locale</th>
                                <th>Timezone</th>
                                <th>Last active</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Picture</th>
                                <th>Gender</th>
                                <th>Locale</th>
                                <th>Timezone</th>
                                <th>Last active</th>
                            </tr>
                        </tfoot>
                        {userDetail.map((data, index) =>

                            <tbody>

                                <tr>
                                    <td>{data.user_id}</td>
                                    <td>{data.name}</td>
                                    <td><img src={url} /></td>
                                    <td>{data.gender}</td>
                                    <td>{data.locale}</td>
                                    <td>{data.timezone}</td>
                                    <td>{Math.ceil((currentDateTime - data.updated_on) / (3600 * 24))}Days Ago</td>
                                </tr>

                            </tbody>

                        )}
                    </table>

                </div>
            </div>
            <Pagination data={this.state} handlePagination={this.hanldePagination.bind(this)} />
            <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>

            </div>
            
                 
    

        );
    }
}

export default userTable;
// { "data": 
// { "height": 50, 
//     "is_silhouette": true, 
//     "url": "https://platform-lookaside.fbsbx.com/platform/profilepic/?psid=1229755263793213&height=50&width=50&ext=1529770326&hash=AeRAQaHa31DqWwhO", 
//     "width": 50 
// } 
// }