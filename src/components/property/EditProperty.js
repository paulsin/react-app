
import React from "react";
import { useState, useEffect } from "react";
import { json, useNavigate, useParams } from "react-router-dom";
import Navbar from "../common/Navbar";
import Select from "react-select";
import axios from "axios";
import { Url } from "../../constants/global";
import { propertyTypes } from "../../constants/global";
import { transactionType } from "../../constants/global";
const EditProperty = (props) => {
    const [alertClass, setAlertClass] = useState("alert alert-info");
    const [alertContent, setAlertContent] = useState("Edit the property details");
    const [propertyTypeSelected, setPropertyTypeSelected] = useState("");

    const [stateOptionsNew,setStateoptionsnew]=useState("");            //state
    const [stateSelectedLabel,setStateSelectedLabel]=useState("");
    const [stateSelectedValue,setStateSelectedValue]=useState("");
    
    const [districtOptionsNew,setDistrictoptionsnew]=useState("");            //district
    const [districtSelectedLabel,setDistrictSelectedLabel]=useState("");
    const [districtSelectedValue,setDistrictSelectedValue]=useState(""); 

    const [townOptionsNew,setTownoptionsnew]=useState("");            //town
    const [townSelectedLabel,setTownSelectedLabel]=useState("");
    const [townSelectedValue,setTownSelectedValue]=useState(""); 

    const [localityName, setLocalityName] = useState("");
    const [cost, setCost] = useState("");
    const [property_Type, setPropertyType] = useState("");
    const [transactiontype, setTransactionType] = useState("");

    const {operation} =useParams();
    const {uniqueID}=useParams();
    var editPropertyURL = Url + 'property/editProperty';
    let state_options=[];
    let district_options=[];
    let town_options=[];
    function getPropertyData(){
        //  alert(uniqueID)
        axios.get(Url+"property/individualProperty/"+uniqueID)
        .then((res)=>{
            setTransactionType(res.data.transactionType)
            setPropertyType(res.data.propertyType)
            setSelectedStateFunction(res.data.stateID)
            setSelectedDistrictFunction(res.data.districtID)
            setSelectedTownFunction(res.data.townID)
        })
    }

    function setSelectedStateFunction(selectedStateFunParam) {
        //  alert(selectedStateFunParam);
        axios
          .get(Url+"location/states",
        )
          .then((res) => {
            // let batchNumberOptionsInitial = "";
            // alert("anu")
            res.data.map(data => {
                if(data._id === selectedStateFunParam) {
                    // alert("hjjj")
                setStateSelectedLabel(data.stateName);
                setStateSelectedValue(data._id);
                }
          });
      
        });
    }

    function  setSelectedDistrictFunction(selectedDistrictFunParam){
        axios
        .get(Url+"location/districts",
        )
        .then((res) => {
          // let batchNumberOptionsInitial = "";
          // alert("anu")
          res.data.map(data => {
              if(data._id === selectedDistrictFunParam) {
                  // alert("hjjj")
              setDistrictSelectedLabel(data.districtName);
              setDistrictSelectedValue(data._id);
              }
        });
    
      });
    }

    function  setSelectedTownFunction(selectedTownFunParam){
        // alert(selectedTownFunParam)
        axios
        .get(Url+"location/towns",
        )
        .then((res) => {
          // let batchNumberOptionsInitial = "";
          // alert("anu")
          res.data.map(data => {
              if(data._id === selectedTownFunParam) {
                  // alert("hjjj")
              setTownSelectedLabel(data.townName);
              setTownSelectedValue(data._id);
              }
        });
    
      });
    }
    function getStates() {
        // alert("anu");
        axios
          .get(Url+"location/states",
        )
        .then((res) => {
          // alert("haiii")
          res.data.map(data1 => {
              // alert(data1.stateName);
              // alert(data1._id)    
              state_options.push({ value: data1._id, label: data1.stateName });
          });
             // setSelectedstateOnchangevalue(district_values) // alert(state_options)
             setStateoptionsnew(state_options);
        })
    }
    function getDistricts() {
        //alert("anu");
        axios
          .get(Url+"location/districts",
        )
        .then((res1) => {
          res1.data.map(data2 => {
              // alert(data.stateID);
            district_options.push({ value: data2._id, label: data2.districtName});
          });
          setDistrictoptionsnew(district_options);
        })
    }
    function getTowns() {
        //alert("anu");
        axios
          .get(Url+"location/towns",
        )
        .then((res2) => {
         
          res2.data.map(data3 => {
            // alert(data3.stateID)
            town_options.push({ value: data3._id, label: data3.townName});
          });
          setTownoptionsnew(town_options);
        })
      }
    const editProperty= async (e) => {
       // alert(uniqueID)
        axios.post(Url+"property/editproperty",
            {
                "propertyID":uniqueID,
                "propertyType":property_Type,
                "transactionType":transactiontype,
                "stateID":stateSelectedValue,
                "districtID":districtSelectedValue,
                "townID":townSelectedValue


            }
        )
        .then((res)=>{
            alert('haiiii')
        })
    }

    useEffect(() => {
        if(operation === 'edit') {
          getPropertyData();
        }
        getStates();
        getDistricts();
        getTowns();
    }, []);

    const handleStateSelection = (event) => {
        setStateSelectedLabel(event.label)
        setStateSelectedValue(event.value)
    }
    const handleDistrictSelection = (event) => {
        setDistrictSelectedLabel(event.label)
        setDistrictSelectedValue(event.value)
    }
    const handleTownSelection =(event) =>{
        setTownSelectedLabel(event.label)
        setTownSelectedValue(event.value)
    }
    const handlePropertySelection =(event) =>{
        // alert(event.value)
        setPropertyType(event.value)
        // setPropertyType(event.label)
    }
    const handleTransactionTypeSelection = (event) =>{
        // alert(event.value)
        setTransactionType(event.value)
    }
return (
    <div>

    <Navbar />
<div class="row">
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
</div>

    <div class="container mt-3 ">

        <h3>Edit Property details</h3>
        <br/>
    
        <div class={alertClass} role="alert">
          {alertContent}
        </div>

        <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label">Property type</label>

            <div class="col-sm-5">
              <Select
                options={propertyTypes}
                onChange={handlePropertySelection}
                value={{ value: property_Type, label: property_Type }}
              />
            </div>

        </div>


        <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label">Sale / Rent</label>

            <div class="col-sm-5">
              <Select
                options={transactionType}
                 onChange={handleTransactionTypeSelection}
                value={{ value: transactiontype, label: transactiontype }}
              />
            </div>
        </div>

        <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label">State</label>

            <div class="col-sm-5">
              <Select
                //defaultValue={{ value: 'Rent', label: 'Rent' }}
                 onChange={handleStateSelection}
                options={stateOptionsNew} value={{label:stateSelectedLabel, value:stateSelectedValue}}
              />
            </div>
        </div>


        <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label">District</label>

            <div class="col-sm-5">
              <Select
                //defaultValue={{ value: 'Rent', label: 'Rent' }}
                //onChange={handleSubmit}
                value={{label:districtSelectedLabel, value:districtSelectedValue}}
                 onChange={handleDistrictSelection}
                options={districtOptionsNew}
              />
            </div>
        </div>

       

        <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label">Town</label>

            <div class="col-sm-5">
              <Select
                //defaultValue={{ value: 'Rent', label: 'Rent' }}
                //onChange={handleSubmit}
                onChange={handleTownSelection}
                value={{label:townSelectedLabel, value:townSelectedValue}}
                 options={townOptionsNew}
              />
            </div>
        </div>

        

        <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label">Add a locality</label>

            <div class="col-sm-5">
              <input type="text" class="form-control" placeholder="Enter locality name" value={localityName} required onChange={(e) => setLocalityName(e.target.value)}/>
            </div>
        </div>

        <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label">Cost</label>

            <div class="col-sm-5">
              <input type="text" class="form-control" placeholder="Enter cost" value={cost} required onChange={(e) => setCost(e.target.value)}/>
            </div>
        </div>

        <button type="submit" class="btn btn-primary" onClick={editProperty}>Edit property</button>
      
    </div>


</div>

)
}

export default EditProperty