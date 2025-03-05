import React, { useState, useEffect } from "react";

import Select from 'react-select';
import { Url } from "../../constants/global";
import axios from "axios";
import { FaHeart } from "react-icons/fa";

const IndividualPropertyDetailsComponent = (props) => {
    const[propertydetails,setPropertydetails]=useState([]);
    var propertyID=props.propertyID
    // alert(propertyID)
    
    function createrows(row,statedata,districtdata,towndata){
   
        //  alert(row.location)
        let temparrayfornames=[]
      
          statedata.map(statetemp=>{
            if(statetemp['_id']===row.stateID){
              districtdata.map(districttemp=>{
                if(districttemp['_id']===row.districtID){
                  towndata.map(towntemp=>{
                    if(towntemp['_id']===row.townID){
                      temparrayfornames.push({
                       
                        'propertyType':row.propertyType,
                        'transactionType':row.transactionType,
                        'state':statetemp['stateName'],
                        'district':districttemp['districtName'],
                        'town':towntemp['townName'],
                        'location':row.locality,
                        'plotarea':row.plotArea,
                        'builtArea':row.builtArea,
                        'price':row.cost,
                        'bedrooms':row.bedrooms
                      })
                    }
                  })
                }
              }) 
            }
          });
        //  });
     setPropertydetails(temparrayfornames)
      
      }
      function fetchProperties () {

        // alert("anu");
        let temparrayfornames=[];
        let statename=[]
        let districtname=[]
        axios
        .get(Url+"property/individualProperty/"+propertyID,
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
    
    useEffect(() => {
        fetchProperties();
    }, []);
  
  return (

    <div class="container  text-center p-1" id="properties_container ">
      {propertydetails.map(key=>  
        <div class="table-responsive">
          <table class="table">
          
            <thead class="thead-dark">
              <tr>
                <th scope="col">Property ID</th>
                <th scope="col">{propertyID}</th>
                <th scope="col">Date</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Property Type</th>
                <td>{key.propertyType}</td>
                <th>Plot Area</th>
                <td>{key.plotarea} cents</td>
              </tr>
              <tr class="table-secondary">
                <th scope="row">State</th>
                <td>{key.state}</td>
                <th>Coverage Area</th>
                <td>{key.builtArea} sq ft</td>
              </tr>
              <tr>
                <th scope="row">Sale/Rent</th>
                <td>{key.transactionType}</td>
                <th>Price</th>
                <td>{key.price}</td>
              </tr>
              <tr class="table-secondary">
                <th scope="row">District</th>
                <td>{key.district}</td>
                <th>BedRooms</th>
                <td>{key.bedrooms}</td>
              </tr>
              <tr>
                <th scope="row">Location</th>
                <td>{key.location}</td>
                <th>Town</th>
                <td>{key.town}</td>
              </tr>
            </tbody>

          </table>
        </div>
      )}  
    </div>
  )
}

export default IndividualPropertyDetailsComponent