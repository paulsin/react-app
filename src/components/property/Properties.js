
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

        const navigate = useNavigate();

    function createrows(row,statedata,districtdata,towndata){
      let temparrayfornames=[]
      row.map(row => {
        statedata.map(statetemp=>{
          if(statetemp['_id']===row.stateID){
            districtdata.map(districttemp=>{
              if(districttemp['_id']===row.districtID){
                towndata.map(towntemp=>{
                  if(towntemp['_id']===row.townID){
                    temparrayfornames.push({
                      'slno':slno++,
                      '_id':row._id,
                      'propertyType':row.propertyType,
                      'state':statetemp['stateName'],
                      'district':districttemp['districtName'],
                      'town':towntemp['townName']
                    })
                  }
                })
              }
            }) 
          }
        });
      });
      setPropertiesTable(temparrayfornames);
    }
    function fetchProperties () {
      //alert("anu");
      axios
        .get(Url+"property/properties",
      )
      .then((res) => {
        axios
          .get(Url+"location/states",
        )
        .then((res2) => {
          axios
            .get(Url+"location/districts",
          )
          .then((res3) => {
            axios
            .get(Url+"location/towns",
            )
            .then((res4) => {
              createrows(res.data,res2.data,res3.data,res4.data);
            })
          })
       
        })
      })
    }

    function addImagesFunction(propertyID) {
      navigate('/frontend/addimages/'+propertyID);
    }

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
                    Edit
                  </th>
                  <th>
                    Add images
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
                      {key.state}
                    </td>
                    <td>
                      {key.district}
                    </td>
                    <td>
                      {key.town}
                    </td>
                    <td>
                      <button className="btn btn-danger"  data-toggle="modal" data-target="#myModal">Delete</button>
                    </td>
                    <td>
                      <button className="btn btn-secondary" >Edit</button>
                    </td> 
                    <td>
                      <button className="btn btn-primary" onClick={()=>addImagesFunction(key._id)}>Add images</button>
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