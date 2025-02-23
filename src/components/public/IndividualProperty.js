import React, { useState, useEffect } from "react";
import background from "../../images/background.jpg";

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

function IndividualProperty() {


 


  useEffect(() => {
 
  }, []);
  

  return(
      <div>
        <NavbarPublic />

            <br/>
            <br/>
            <br/>
                I am individual property
            <br/>
            <br/>
            <br/>
        <Footer/>
    
      </div>
    )
}

export default IndividualProperty;