import React, { useState, useEffect } from "react";
import { OwnerorBuilderorDeveloper } from "../../constants/global";
import Select from 'react-select';
import { Url } from "../../constants/global";
import axios from "axios";
import PhoneInput from 'react-phone-number-input'



const IndividualPropertymessageComponent = (props) => {
  
    const[owneroptions,setOwneroptions]=useState("");
    const[ownerSelectedValue,setOwnerselectedValue]=useState("");
    const[ownerSelectedLabel,setOwnerselectedLabel]=useState("");
    const[ownername,setOwnername]=useState("");
    const[phonenumber,setPhonenumber]=useState("");
    const[message,setMessage]=useState("");
    
    

    const submitOwnerdata = async (e) => {

    }


    var propertyID=props.propertyID
    var headingwidget=<h3><b>Send Message</b></h3>       
    var ownercontactwidget=  <PhoneInput className="number"  value={phonenumber} onChange={setPhonenumber}/>
    var namewidget=<input type="text" class="form-control" required onChange={(e) =>  setOwnername(e.target.value)}/> 
    var messagewidget=<textarea class="form-control" onChange={(e) =>  setMessage(e.target.value)} /> 
    var ownerdatasavebuttonwidget=<button type="submit" class="btn btn-danger" onClick={submitOwnerdata}>Send Owner Details</button>  
   
  return (
    <>
   
   <div class="container pt-3 pb-4 col-sm-8" id="sendmessagecontainer">
   {headingwidget}
    <div class="row mb-3">
        <label for="inputPassword3" class="col-sm-2 col-form-label ">Owner or Builder or Developer</label>
        <div class="col-sm-6">
        {ownercontactwidget}
        </div>
    </div>
    <div class="row mb-3">
        <label for="inputPassword3" class="col-sm-2 col-form-label">Name Of Owner or Builder or Developer</label>
        <div class="col-sm-6">
        {namewidget}
        </div>
    </div>
    <div class="row mb-3">
        <label for="inputPassword3" class="col-sm-2 col-form-label">Message</label>
        <div class="col-sm-6">
        {messagewidget}
        </div>
    </div>
    {ownerdatasavebuttonwidget}
   
    </div>
   <br/><br/>

   
  </>
  )
}

export default IndividualPropertymessageComponent