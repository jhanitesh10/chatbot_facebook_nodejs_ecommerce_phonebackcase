import React, { Component } from "react";

class Pagination extends Component {

   constructor() {
      super();
   }

   handleClickList(e, data) {
      e.preventDefault();
      this.props.handlePagination(data);
   }

   render() {

      let paginationData = this.props.data;

      let offset = paginationData.offset,
         limit = paginationData.limit,
         totalDataCount = paginationData.totalDataCount,
         totalPage = Math.ceil(totalDataCount / limit);
      let pageArray = [];

      for(let i=1; i<=totalPage; i++){
         pageArray.push(i);
      }

      return (

         <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
               <li className="page-item disabled">
                  <a className="page-link" href="#" tabindex="-1">Previous</a>
               </li>

               {
                  pageArray.map((data, index) =>
                     <li key={data} onClick={(e) => { this.handleClickList(e, data) }} className="page-item"><a className="page-link" href="#">{data}</a></li>
                  )
               }

               <li className="page-item">
                  <a className="page-link" href="#">Next</a>
               </li>
            </ul>
         </nav>


      );
   }
}

export default Pagination;



