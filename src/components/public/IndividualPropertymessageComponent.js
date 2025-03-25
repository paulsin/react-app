import React, { useState, useEffect } from "react";
import { OwnerorBuilderorDeveloper } from "../../constants/global";
import Select from 'react-select';
import { Url } from "../../constants/global";
import axios from "axios";
import PhoneInput from 'react-phone-number-input'



const IndividualPropertymessageComponent = (props) => {
    var propertyID=props.propertyID;
    const[owneroptions,setOwneroptions]=useState("");
    const[ownerSelectedValue,setOwnerselectedValue]=useState("");
    const[ownerSelectedLabel,setOwnerselectedLabel]=useState("");
    const[ownername,setOwnername]=useState("");
    const[phonenumber,setPhonenumber]=useState("");
    const[message,setMessage]=useState("");
    const [alertrequestclass, setAlertRequestClass] = useState("alert alert-info");
    const [alertrequestContent, setAlertRequestContent] = useState("Enter the Whatsapp number and name to get contact details of owner");
     const[mapUrl,setMapUrl]=useState([]);

    const submitOwnerdata = async (e) => {
        var phoneFlag=true;
        if(phonenumber === "") {
            // alert("Paulsin");
            setAlertRequestClass("alert alert-danger");
            setAlertRequestContent("Enter the contact of owner,builder or developer");
            phoneFlag = false;
        }
        if(phoneFlag){
            // alert("dhjdjj")
            axios.post(Url+"property/propertyCustomerRequestForOwnerSaveRequest",
                {
                    "propertyID":propertyID,
                    "requesterMobile":phonenumber,
                    "requesterName":ownername,
                    "requesterMessage":message,
                    
                }
            )
            .then((res)=>{
                // alert('haiiii')
            })
            setAlertRequestClass("alert alert-success");
            setAlertRequestContent("Request sent successfully");
        }
    }

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
    var propertyID=props.propertyID
    var headingwidget=<h3><b>Send Message</b></h3>       
    var ownercontactwidget=  <PhoneInput className="number"  value={phonenumber} onChange={setPhonenumber}/>
    var namewidget=<input type="text" class="form-control" required onChange={(e) =>  setOwnername(e.target.value)}/> 
    var messagewidget=<textarea class="form-control" onChange={(e) =>  setMessage(e.target.value)} /> 
    var ownerdatasavebuttonwidget=<button type="submit" class="btn btn-danger" onClick={submitOwnerdata}>Request Owner Details</button>  
    var googlemapwidget=
  
    <iframe
        src={mapUrl}
        width="600"
        height="400"
        style={{ border: 1 }}
        allowFullScreen
        loading="lazy"
    ></iframe>
  return (
    <>

        <div class="container p-2 ">
            <div class="row mb-1">
                <div class="col-sm-5 p-2" id="sendmessagecontainer">
                    {headingwidget}
                    <br/>

                    <div class={alertrequestclass} role="alert">
                    {alertrequestContent}
                    </div>

                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label ">Enter Whatsapp number</label>
                        <div class="col-sm-8">
                        {ownercontactwidget}
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-8">
                        {namewidget}
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Message</label>
                        <div class="col-sm-8">
                        {messagewidget}
                        </div>
                    </div>
                    {ownerdatasavebuttonwidget}
                </div>

                <div class="col-sm-5 offset-1 p-0 pl-1 text-center" style={{margin: "auto"}}>
                    {googlemapwidget} 
                </div>
            </div>
        </div>   
  

   
  </>
  )
}

export default IndividualPropertymessageComponent