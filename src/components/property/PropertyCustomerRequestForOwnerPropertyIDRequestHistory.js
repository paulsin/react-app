import React from 'react';
import { useState, useEffect } from "react";
import { Url } from "../../constants/global";
import axios from "axios";

const PropertyCustomerRequestForOwnerPropertyIDRequestHistory = (props) => {
  const [requestsTable, setRequestsTable] = useState([]);
  var param2=props.param2;
  var param1State = props.param1State;
  var setParam1State = props.setParam1State;
  var propertyIdorMobileno=props.propertyIdorMobileno;
  var setPropertyidorMobileno=props.setPropertyidorMobileno;
  // alert(param1State)
  // alert(propertyIdormobileno)
  function createdata(data){
    var slno=1;
    let temparrayfornames=[]
    data.map((data1)=>{
      // alert(data1.propertyID)
      if(data1.propertyID===propertyIdorMobileno){
        temparrayfornames.push({
          'slno':slno++,
          'propertyID':data1.propertyID,
          'requestTime':data1.requestTime,
          'requesterMobile':data1.requesterMobile,
          'requesterName':data1.requesterName,
          'requesterMessage':data1.requesterMessage,
        })
      }
      
      
    })
    setRequestsTable(temparrayfornames);
  }

  function fetchRequests(){
    axios
    .get(Url+"property/propertyCustomerRequestForOwnerAllRequests",
    )
    .then((res) => {
      createdata(res.data)
    })
  }

  useEffect(() => {  
    fetchRequests();
  }, []);
  function backtoTable() {
    setParam1State("table");
  }

  return (

          <div>
            <h2>History of {propertyIdorMobileno}</h2>
            <br/>
            <table className="table table-striped" id="selectedTable">
              <thead>
                <tr>
                  <th>
                  Index
                  </th>
                  <th>
                  Property Id
                  </th>
                  <th>
                 Request Time
                  </th>
                  <th>
                   Requester Mobile
                  </th>

                  <th>
                    Requester Name
                  </th>

                  <th>
                   Requester Message
                  </th>
                   {/* <th>
                  Actions
                  </th> */}
                </tr>
              </thead>
              <tbody>
              
                {requestsTable.map(key =>  (
                  <tr>
                    <td>
                      {key.slno}
                    </td>
                    <td> 
                      {key.propertyID}
                    </td>
                    <td>
                      {key.requestTime}
                    </td>
                    <td>
                      {key.requesterMobile}
                    </td>
                    <td>
                      {key.requesterName}
                    </td>
                    <td>
                      {key.requesterMessage}
                    </td>
                    {/* <td>
                      <button className="btn btn-danger" >Actions</button> 
                    </td> */}  
                  </tr>
                ))} 
                <td>
                </td>
              </tbody>
              <button class = "btn btn-primary" onClick={backtoTable}> Back </button>
            </table>
            
          </div>

  )
}

export default PropertyCustomerRequestForOwnerPropertyIDRequestHistory