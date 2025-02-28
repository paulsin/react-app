
import React from "react";
import background from "../../images/background.jpg";
import Navbar from "../common/Navbar";
import { Url } from "../../constants/global";
import axios from "axios";
import { useState, useEffect } from "react";
import { json, useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import { propertyTypes } from "../../constants/global";
import { transactionType } from "../../constants/global";
import data from "../../json/places.json"
import { useConfirm } from "material-ui-confirm";
import StatesList from "./StatesList";
import DistrictsList from "./DistrictsList";
import PaginationforProperties from "./PaginationforProperties";
import { NoImage } from "../../constants/global";

var newUrl = Url + 'location/state';
var addDistrictUrl = Url + 'location/district';

var getPropertiesUrl = Url + 'property/properties';
var getDistrictUrl = Url + 'location/districts';


var deleteStateUrl = Url + 'location/deleteState/';
var updateStateUrl = Url + 'location/updateState/';

var  deletePropertyUrl = Url + 'property/deleteProperty/';

const PropertyCustomerRequestForOwner = (props) => {
 const [requestsTable, setRequestsTable] = useState([]);

  function createdata(data){
    var slno=1;
    let temparrayfornames=[]
    data.map((data1)=>{
      temparrayfornames.push({
        'slno':slno++,
        'propertyID':data1.propertyID,
        'requestTime':data1.requestTime,
        'requesterMobile':data1.requesterMobile,
        'requesterName':data1.requesterName,
        'requesterMessage':data1.requesterMessage,
      })
      
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
    
    return(
      <div>

        <Navbar />
          <div>
            <h2>Requests</h2>
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
            </table>  

          </div>
      </div>
    )
};

export default PropertyCustomerRequestForOwner;