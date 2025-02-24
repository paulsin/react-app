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

    <div class="container  text-center" id="properties_container">
        
     {propertydetails.map(key=>   
    <div class="row row-cols-4 pt-1" >
  
        <div class="col" id="propertydetails">PropertyID</div>
        <div class="col"  id="propertydetails">{propertyID}</div>
        <div class="col"  id="propertydetails">Total Page Views</div>
        <div class="col"  id="propertydetails">Column4</div>
        <div class="col" id="propertydetailscomponents">Property Type</div>
        <div class="col" id="propertydetailscomponents" >{key.propertyType}</div>
        <div class="col" id="propertydetailscomponents">Plot Area</div>
        <div class="col" id="propertydetailscomponents">{key.plotarea}</div>
        <div class="col" id="propertydetailscomponents">State</div>
        <div class="col" id="propertydetailscomponents">{key.state}</div>
        <div class="col" id="propertydetailscomponents">Coverage Area</div>
        <div class="col" id="propertydetailscomponents">{key.builtArea}</div>
        <div class="col" id="propertydetailscomponents">Sale/Rent</div>
        <div class="col" id="propertydetailscomponents">{key.transactionType}</div>
        <div class="col" id="propertydetailscomponents">Price</div>
        <div class="col" id="propertydetailscomponents">{key.price}</div>
        <div class="col" id="propertydetailscomponents">District</div>
        <div class="col" id="propertydetailscomponents">{key.district}</div>
        <div class="col" id="propertydetailscomponents">BedRooms</div>
        <div class="col" id="propertydetailscomponents">{key.bedrooms}</div>
        <div class="col" id="propertydetailscomponents">Location</div>
        <div class="col" id="propertydetailscomponents">{key.location}</div>
        <div class="col" id="propertydetailscomponents">Town</div>
        <div class="col" id="propertydetailscomponents">{key.town}</div>
        
      
    </div>
    )}
        <div class="row p-3">
            <div calss="col-12">
                <button class="btn btn-success"><FaHeart size={25}/>&nbsp;&nbsp;Add to Favourites</button>
            </div>
         
        </div>
       
    
  </div>
  )
}

export default IndividualPropertyDetailsComponent