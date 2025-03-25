import React, { useState, useEffect } from "react";

import Select from 'react-select';
import { Url } from "../../constants/global";
import axios from "axios";
import { FaHeart } from "react-icons/fa";
import { ToWords } from 'to-words';

const IndividualPropertyGooglemapLoc = (props) => { 
    const[mapUrl,setMapUrl]=useState([]);
    var propertyID=props.propertyID 
    function fetchProperties(){
            axios
            .get(Url+"property/individualProperty/"+propertyID,
            )
            .then((res)=>{
            //alert(res.data.googleMap)
              setMapUrl(res.data.googleMap);
            })
    } 
    useEffect(() => {
        fetchProperties(); 
    }, []);
   var googlemapwidget=
  
        <iframe
            src={mapUrl}
            width="850"
            height="400"
            style={{ border: 1 }}
            allowFullScreen
            loading="lazy"
        ></iframe>
  
  return (
    <>
    <div class="container text-center pb-2" >

        {googlemapwidget}
    </div>
    
    </>
)
//https://maps.app.goo.gl/HDRWnCH5HvLBTvyU7
}

export default IndividualPropertyGooglemapLoc