
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

var newUrl = Url + 'location/state';
var addDistrictUrl = Url + 'location/district';

var getPropertiesUrl = Url + 'property/properties';
var getDistrictUrl = Url + 'location/districts';


var deleteStateUrl = Url + 'location/deleteState/';
var updateStateUrl = Url + 'location/updateState/';

const Properties = (props) => {

    const [propertiesTable, setPropertiesTable] = useState([]);

    const fetchProperties =  async (e) => {
        try {
          const response = await axios.get(getPropertiesUrl,   
              { withCredentials: true }
            )
            .then(function (response) {
              //alert(response.data[0].stateName);
  
                setPropertiesTable(response.data);
            })
            .catch(function (error) {
              console.log(error);
            }); 
  
          
        } catch(error) {
          console.error("Error posting data:", error);
        }
      };

    useEffect(() => {

        fetchProperties();

    }, []);

    var slno =1;

    return(

    <div>

        <Navbar />


        <div>
            <h2>Properties</h2>
            <br/>

            

            <table className="table table-striped" id="selectedTable">
        <thead>
          <tr>
            <th>
              Index
            </th>
            <th>
              ID
            </th>
            <th>
              Property type
            </th>
            <th>
              state
            </th>

            <th>
              District
            </th>

            <th>
              Town
            </th>

            <th>
              Delete
            </th>
            <th>
              Show districts
            </th>
          </tr>
        </thead>
        <tbody>
          {propertiesTable.map(key =>  (
            <tr>
              <td>
                {slno++}
              </td>
              <td>
                {key._id}
              </td>
              <td>
                {key.propertyType}
              </td>
              <td>
                {key.stateID}
              </td>
              <td>
                {key.districtID}
              </td>
              <td>
                {key.townID}
              </td>
              <td>
                <button className="btn btn-danger"  data-toggle="modal" data-target="#myModal">kdghd</button>
              </td>
              <td>
                <button className="btn btn-secondary" >Delete</button>
              </td> 
              <td>
               
              </td> 
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

export default Properties;