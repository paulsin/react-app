import React, { useState, useEffect } from "react";
import background from "../../images/background.jpg";
import housebackground from "../../images/housebackground.jpg";
import sunrise from "../../images/sunrise.jpg";

import Navbar from "../common/NavbarPublic";
import Footer from "../common/Footer"
import NavbarPublic from "../common/NavbarPublic";
import { FaSearch } from "react-icons/fa";
import { MultiSelect } from "react-multi-select-component";
// import Multiselect from 'multiselect-react-dropdown';
import axios from "axios";
import { Url } from "../../constants/global";
import Select from 'react-select';
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import Pagination from "./Pagination";
import { propertyTypes } from "../../constants/global";
import { transactionType } from "../../constants/global";
import { NoImage } from "../../constants/global";
import { json, useNavigate, useParams } from "react-router-dom";
import QRCode from 'react-qr-code';


var propertyImagesurl=Url+'propertyImages/'
  
const IndividualPropertyImagesasComponent = (props) => {
    var individualurl=Url+"individualProperty/"+props.propertyID
  let temparrayfornames=[]
   
  const [propertyimages, setPropertyImages] = useState([]);
  var propertyID=props.propertyID


  function createdata(data){
    // alert(data)
 
     
          data.map(row=>{
          //  alert(row.propertyID)
              temparrayfornames.push({
                'propertyID':row.propertyID,
                'imageName':row.imageName,
                'imageurl':Url+"assets/"+ propertyID + "/" + row.imageName
              })
       
            })
        setPropertyImages(temparrayfornames)
  }

function fetchPropertyImages(){
  axios
  .get(Url+"propertyImages/"+propertyID,
  )
  .then((res)=>{
    createdata(res.data)
  })
}

  let temparray=[background,housebackground,sunrise]
  
  useEffect(() => {
    fetchPropertyImages();
  }, []);
  var qrcodewidget= <QRCode
  title="GeeksForGeeks"
  value={individualurl}
  size={150}
  />

  return (
    <div>
      <div class="container p-3">
        <div class="row mb-3">
          <div class="col-10 p-2">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">  
              <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="img-fluid" src={background}  alt="Second slide" id="individualpropertyimages"/>
                </div>
                {propertyimages.map((key,index) => 
                  //  {if (index!==0)
                    <div class="carousel-item">
                      <img class="d-block img-fluid w-100" src={key.imageurl} alt="First slide" id="individualpropertyimages" />
                    </div>
                    // }
                )} 
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>  
            </div> 
          </div>
          <div class="col-2 p-5">
            {qrcodewidget}
          </div>
        </div>
      </div>   
    </div>
  )
}

export default IndividualPropertyImagesasComponent