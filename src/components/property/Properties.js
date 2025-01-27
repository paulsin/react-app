
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

var newUrl = Url + 'location/state';
var addDistrictUrl = Url + 'location/district';

var getPropertiesUrl = Url + 'property/properties';
var getDistrictUrl = Url + 'location/districts';


var deleteStateUrl = Url + 'location/deleteState/';
var updateStateUrl = Url + 'location/updateState/';

var  deletePropertyUrl = Url + 'property/deleteProperty/';

const Properties = (props) => {

    const [propertiesTable, setPropertiesTable] = useState([]);
    const [originalData, setOriginalData] = useState([]);
    let currentpageno=1;
    let recordsperpageno=20;
    const [currentPage, setCurrentPage] = useState(currentpageno);
    const [recordsPerPage,setRecordsperpage]=useState(recordsperpageno);
    const navigate = useNavigate();
    
    const lastpostIndex=currentPage*recordsPerPage; 
  //const lastpostIndex=currentPage * recordsPerPage > propertydetails.length ? propertydetails.length + 1 : currentPage * recordsPerPage; 
    const firstpostIndex=lastpostIndex-recordsPerPage;
  //alert(firstpostIndex);
  //alert(lastpostIndex);
    const currentposts=propertiesTable.slice(firstpostIndex,lastpostIndex);
  // const npage=Math.ceil(propertydetails.length/recordsPerPage);
    function createrows(row,statedata,districtdata,towndata){
      var slno =1;
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
      setOriginalData(temparrayfornames);
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
    const handleDelete =(_id)=>{
      var dataafterdeletetemp=[];
      if (window.confirm('Do you want to delete this Property?')) {
      var deletetempurl=deletePropertyUrl+_id; 
      // alert(deletetempurl)
      const response=axios.get(deletetempurl);
      originalData.map(key=>{
        // alert(key._id)
        // alert("id",_id)
        if(key._id!=_id){
          // alert("hhjj")
          dataafterdeletetemp.push(key);
        }
      });
      setOriginalData(dataafterdeletetemp)
      setPropertiesTable(dataafterdeletetemp)
      
      }
    }
    useEffect(() => {
        fetchProperties();
    }, []);
   
    
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
              
                {currentposts.map(key =>  (
                  <tr>
                    <td>
                      {key.slno}
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
                    <button className="btn btn-danger" onClick={()=>handleDelete(key._id)}>Delete</button>
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
            <PaginationforProperties totalPosts={propertiesTable.length} recordsPerPage={recordsPerPage} setCurrentPage={setCurrentPage} 
          currentPage={currentPage} firstpostIndex={firstpostIndex} lastpostIndex={lastpostIndex}/> 
          </div>
      </div>
    )
};

export default Properties;