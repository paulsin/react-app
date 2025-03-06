import React, { useState, useEffect } from "react";

import Select from 'react-select';
import { Url } from "../../constants/global";
import axios from "axios";
import { FaHeart } from "react-icons/fa";
import { ToWords } from 'to-words';

const IndividualPropertyDetailsComponent = (props) => {
    const[propertydetails,setPropertydetails]=useState([]);
    var propertyID=props.propertyID
    // alert(propertyID)
    
    function createrows(row,statedata,districtdata,towndata){
   
        //  alert(row.cost)
        let temparrayfornames=[]
         const toWords = new ToWords();
        //  var cost=row.cost;
        // var costinwords = toWords.convert(cost);
      
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
                        'price':row.cost===undefined?row.cost:toWords.convert(row.cost),
                        'bedrooms':row.bedrooms,
                        'carporch':row.carPorch ===false ?"No":"Yes",
                        'carParking':row.carParking ==="" ?"":row.carParking,
                        'sitout':row.sitout ===false ?"No":"Yes",
                        'livingArea':row.livingArea ===false?"No":"Yes",
                        'diningHall':row.diningHall ===false ?"No":"Yes",
                        'kitchen':row.kitchen ===false ?"No":"Yes",
                        'workArea':row.workArea ===false ?"No":"Yes",
                        'upperLivingArea':row.upperLivingArea ===true ?"No":"Yes",
                        'balcony':row.balcony===true ?"No":"Yes",
                        'openTerrace':row.openTerrace ===true ?"No":"Yes",
                        'waterWell':row.waterWell ===true ?"No":"Yes",
                        'waterConnection':row.waterConnection ===true ?"No":"Yes",
                        'feature1': row.propertyFeature1==="" ?"":row.propertyFeature1,
                        'feature2':row.propertyFeature2==="" ?"":row.propertyFeature2,
                        'feature3':row.propertyFeature3==="" ?"":row.propertyFeature3,
                        'feature4':row.propertyFeature4==="" ?"":row.propertyFeature4,
                    


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
             
              <tr class="table-secondary">
                <th scope="row">Carporch</th>
                <td>{key.carporch}</td>
                <th>Car Parking</th>
                <td>{key.carParking}</td>
              </tr>
              <tr>
                <th scope="row">Sitout</th>
                <td>{key.sitout}</td>
                <th>LivingArea</th>
                <td>{key.livingArea}</td>
              </tr>
              <tr class="table-secondary">
                <th scope="row">DiningHall</th>
                <td>{key.diningHall}</td>
                <th>kitchen</th>
                <td>{key.kitchen}</td>
              </tr>
              <tr>
                <th scope="row">workArea</th>
                <td>{key.workArea}</td>
                <th>upperLivingArea</th>
                <td>{key.upperLivingArea}</td>
              </tr>
              <tr class="table-secondary">
                <th scope="row">balcony</th>
                <td>{key.balcony}</td>
                <th>openTerrace</th>
                <td>{key.openTerrace}</td>
              </tr>
              <tr>
                <th scope="row">waterWell</th>
                <td>{key.waterWell}</td>
                <th>waterConnection</th>
                <td>{key.waterConnection}</td>
              </tr>

              <tr>
                <th scope="row">Features</th>
                <td><textarea disabled={true} class="textareainindividualpage">{key.feature1}</textarea></td>
              
                <td><textarea disabled={true} class="textareainindividualpage">{key.feature2}</textarea></td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td><textarea disabled={true} class="textareainindividualpage">{key.feature3}</textarea></td>
                
                <td><textarea disabled={true} class="textareainindividualpage">{key.feature4}</textarea></td>
              </tr>
             
            </tbody>

          </table>
        </div>
      )}  
    </div>




    // <div class="container  text-center p-1" id="properties_container ">
    //   {propertydetails.map(key=>  
    //     <div class="table-responsive">
    //       <table class="table">
          
    //         <thead class="thead-dark">
    //           <tr>
    //             <th scope="col">Property ID</th>
    //             <th scope="col">{propertyID}</th>
    //             <th scope="col">Date</th>
    //             <th scope="col"></th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           <tr>
    //             <th scope="row">Property Type</th>
    //             <td>{key.propertyType}</td>
    //             <th>Plot Area</th>
    //             <td>{key.plotarea} cents</td>
    //           </tr>
    //           <tr class="table-secondary">
    //             <th scope="row">State</th>
    //             <td>{key.state}</td>
    //             <th>Coverage Area</th>
    //             <td>{key.builtArea} sq ft</td>
    //           </tr>
    //           <tr>
    //             <th scope="row">Sale/Rent</th>
    //             <td>{key.transactionType}</td>
    //             <th>Price</th>
    //             <td>{key.price}</td>
    //           </tr>
    //           <tr class="table-secondary">
    //             <th scope="row">District</th>
    //             <td>{key.district}</td>
    //             <th>BedRooms</th>
    //             <td>{key.bedrooms}</td>
    //           </tr>
    //           <tr>
    //             <th scope="row">Location</th>
    //             <td>{key.location}</td>
    //             <th>Town</th>
    //             <td>{key.town}</td>
    //           </tr>
    //           <tr class="table-secondary">
    //             <th scope="row">Feature</th>
    //             <td>{key.feature1}</td>
    //             <th>Feature2</th>
    //             <td>{key.feature2}</td>
    //           </tr>
    //         </tbody>

    //       </table>
    //     </div>
    //   )}  
    // </div>
  )
}

export default IndividualPropertyDetailsComponent