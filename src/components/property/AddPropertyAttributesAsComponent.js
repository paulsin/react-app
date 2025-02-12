
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { facingPolarity } from "../../constants/global";
import Select from 'react-select';
import axios from "axios";
import { Url } from "../../constants/global";
var addPropertyURL = Url + 'property/addProperty';
const AddPropertyAttributesAsComponent = ({setPropertyTypeSelected,propertyTypeSelected, operation,setAlertContent,setAlertClass,
  transactionTypeSelected,stateNameSelectedID,districtNameSelectedID,townNameSelectedID,localityName,cost,stateSelectedValue,districtSelectedValue,townSelectedValue,uniqueID

}) => {
 
   // const [propertyTypeSelected, setPropertyTypeSelected] = useState("");
   const [facing, setFacingPolarity] = useState("");
   const [totalNumberOfFloors, setTotalNumberOfFloors] = useState("");
   const [plotarea, setPlotArea] = useState("");
   const [builtArea, setBuiltArea] = useState("");
   const [totalVillas, setTotalVillas] = useState("");
   const [floorNumber, setFloorNumber] = useState("");
   const [bedRooms, setBedRooms] = useState("");
   const [bedRoomsWithToilet, setBedRoomsWithToilet] = useState("");
   const [toilets, setToilets] = useState("");

   const [carPorch, setCarPorch] = useState("");
   const [carParking, setCarParking] = useState("");
   const [sitOut, setSitOut] = useState("");
   const [livingArea, setLivingArea] = useState("");
   const [diningHall, setDiningHall] = useState("");
   const [kitchen, setKitchen] = useState("");
   const [workArea, setWorkArea] = useState("");
   const [upperLivingArea, setUpperLivingArea] = useState("");
   const [balcony, setBalcony] = useState("");
   const [openTerrace, setOpenTerrace] = useState("");
   const [waterWell, setWaterWell] = useState("");
   const [waterConnection, setWaterConnection] = useState("");
   
   const [isFacingPolarityDisabled, setIsFacingPolarityDisabled] = useState(false);
   const [isTotalNumberOfFloorsDisabled, setIsTotalNumberOfFloorsDisabled] = useState(false);
   const [isBuiltAreaDisabled, setIsBuiltAreaDisabled] = useState(false);
   const [isPlotAreaDisabled, setIsPlotAreaDisabled] = useState(false);
   const [isTotalVillasDisabled, setIsTotalVillasDisabled] = useState(false);
   const [isFloorNumberDisabled, setIsFloorNumberDisabled] = useState(false);
   const [isBedRoomsDisabled, setIsBedRoomsDisabled] = useState(false);
   const [isBedRoomsWithToiletDisabled, setIsBedRoomsWithToiletDisabled] = useState(false);
   const [isToiletsDisabled, setIsToiletsDisabled] = useState(false);

   const [isCarPorchDisabled, setIsCarPorchDisabled] = useState(false);
   const [isCarParkingDisabled, setIsCarParkingDisabled] = useState(false);
   const [isSitOutDisabled, setIsSitOutDisabled] = useState(false);
   const [isLivingAreaDisabled, setIsLivingAreaDisabled] = useState(false);
   const [isDiningHallDisabled, setIsDiningHallDisabled] = useState(false);
   const [isKitchenDisabled, setIsKitchenDisabled] = useState(false);
   const [isWorkAreaDisabled, setIsWorkAreaDisabled] = useState(false);
   const [isUpperLivingAreaDisabled, setIsUpperLivingAreaDisabled] = useState(false);
   const [isBalconyDisabled, setIsBalconyDisabled] = useState(false);
   const [isOpenTerraceDisabled, setIsOpenTerraceDisabled] = useState(false);
   const [isWaterWellDisabled, setIsWaterWellDisabled] = useState(false);
   const [isWaterConnectionDisabled, setIsWaterConnectionDisabled] = useState(false);



    const handleFacingSelection = (e) => {
      // alert(e.value)
      setFacingPolarity(e.value);
      
    }
    const handleCarporchChange = (e) => {
      // alert(e.target.checked)
      setCarPorch(e.target.checked);
      
    }
    const handleSitoutChange = (e) => {
      // alert(e.target.checked)
      setSitOut(e.target.checked);
      
    }
    const handleLivingareaChange = (e) => {
      // alert(e.target.checked)
      setLivingArea(e.target.checked);
      
    }
    const handleDininghallChange= (e) => {
      // alert(e.target.checked)
      setDiningHall(e.target.checked);
      
    }
    const handleKitchenChange= (e) => {
      // alert(e.target.checked)
      setKitchen(e.target.checked);
      
    }
    const handleWorkareaChange = (e) => {
      // alert(e.target.checked)
      setWorkArea(e.target.checked);
      
    }
    const handleUpperlivingAreaChange = (e) => {
      // alert(e.target.checked)
      setUpperLivingArea(e.target.checked);
      
    }
    const handleBalconyChange = (e) => {
      // alert(e.target.checked)
      setBalcony(e.target.checked);
      
    }
    const handleOpenterraceChange = (e) => {
      // alert(e.target.checked)
      setOpenTerrace(e.target.checked);
      
    }
    const handleWaterwellChange = (e) => {
      // alert(e.target.checked)
      setWaterWell(e.target.checked);
      
    }
    const handleWaterConnectionChange = (e) => {
      // alert(e.target.checked)
      setWaterConnection(e.target.checked);
      
    }


    useMemo(() => {
      // alert("haiii")
      // alert(propertyTypeSelected)
      if(propertyTypeSelected === "Villa") {
        setIsFloorNumberDisabled(true);
        setIsFacingPolarityDisabled(false);
        setIsTotalNumberOfFloorsDisabled(false);
        setIsBuiltAreaDisabled(false);
        setIsPlotAreaDisabled(false);
        setIsTotalVillasDisabled(false);
        setIsBedRoomsDisabled(false);
        setIsBedRoomsWithToiletDisabled(false);
        setIsToiletsDisabled(false);
        setIsCarPorchDisabled(false);
        setIsCarParkingDisabled(false);
        setIsSitOutDisabled(false);
        setIsLivingAreaDisabled(false);
        setIsDiningHallDisabled(false);
        setIsKitchenDisabled(false);
        setIsWorkAreaDisabled(false);
        setIsUpperLivingAreaDisabled(false);
        setIsBalconyDisabled(false);
        setIsOpenTerraceDisabled(false);
        setIsWaterWellDisabled(false);
        setIsWaterConnectionDisabled(false);

      }
      else if(propertyTypeSelected === "House") {
        setIsFloorNumberDisabled(true);
        setIsFacingPolarityDisabled(false);
        setIsTotalNumberOfFloorsDisabled(false);
        setIsBuiltAreaDisabled(false);
        setIsPlotAreaDisabled(false);
        setIsTotalVillasDisabled(true);
        setIsBedRoomsDisabled(false);
        setIsBedRoomsWithToiletDisabled(false);
        setIsToiletsDisabled(false);
        setIsCarPorchDisabled(false);
        setIsCarParkingDisabled(false);
        setIsSitOutDisabled(false);
        setIsLivingAreaDisabled(false);
        setIsDiningHallDisabled(false);
        setIsKitchenDisabled(false);
        setIsWorkAreaDisabled(false);
        setIsUpperLivingAreaDisabled(false);
        setIsBalconyDisabled(false);
        setIsOpenTerraceDisabled(false);
        setIsWaterWellDisabled(false);
        setIsWaterConnectionDisabled(false);
      }
      else if(propertyTypeSelected === "Apartment") {
      
        setIsFloorNumberDisabled(false);
        setIsFacingPolarityDisabled(false);
        setIsTotalNumberOfFloorsDisabled(false);
        setIsBuiltAreaDisabled(false);
        setIsPlotAreaDisabled(true);
        setIsTotalVillasDisabled(true);
        setIsBedRoomsDisabled(false);
        setIsBedRoomsWithToiletDisabled(false);
        setIsToiletsDisabled(false);
        setIsCarPorchDisabled(true);
        setIsCarParkingDisabled(false);
        setIsSitOutDisabled(false);
        setIsLivingAreaDisabled(false);
        setIsDiningHallDisabled(false);
        setIsKitchenDisabled(false);
        setIsWorkAreaDisabled(false);
        setIsUpperLivingAreaDisabled(false);
        setIsBalconyDisabled(false);
        setIsOpenTerraceDisabled(false);
        setIsWaterWellDisabled(true);
        setIsWaterConnectionDisabled(true);

      }
      else if(propertyTypeSelected === "Flat") {
        setIsFloorNumberDisabled(false);
        setIsFacingPolarityDisabled(false);
        setIsTotalNumberOfFloorsDisabled(false);
        setIsBuiltAreaDisabled(false);
        setIsPlotAreaDisabled(true);
        setIsTotalVillasDisabled(true);
        setIsBedRoomsDisabled(false);
        setIsBedRoomsWithToiletDisabled(false);
        setIsToiletsDisabled(false);
        setIsCarPorchDisabled(true);
        setIsCarParkingDisabled(false);
        setIsSitOutDisabled(false);
        setIsLivingAreaDisabled(false);
        setIsDiningHallDisabled(false);
        setIsKitchenDisabled(false);
        setIsWorkAreaDisabled(false);
        setIsUpperLivingAreaDisabled(false);
        setIsBalconyDisabled(false);
        setIsOpenTerraceDisabled(false);
        setIsWaterWellDisabled(true);
        setIsWaterConnectionDisabled(true);
      }
      else if(propertyTypeSelected === "Plot") {
        setIsFacingPolarityDisabled(false);
        setIsTotalNumberOfFloorsDisabled(true);
        setIsBuiltAreaDisabled(true);
        setIsTotalVillasDisabled(true);
        setIsPlotAreaDisabled(false);
        setIsFloorNumberDisabled(true);
        setIsBedRoomsDisabled(true);
        setIsBedRoomsWithToiletDisabled(true);
        setIsToiletsDisabled(true);
        setIsCarPorchDisabled(true);
        setIsCarParkingDisabled(true);
        setIsSitOutDisabled(true);
        setIsLivingAreaDisabled(true);
        setIsDiningHallDisabled(true);
        setIsKitchenDisabled(true);
        setIsWorkAreaDisabled(true);
        setIsUpperLivingAreaDisabled(true);
        setIsBalconyDisabled(true);
        setIsOpenTerraceDisabled(true);
        setIsWaterWellDisabled(false);
        setIsWaterConnectionDisabled(false);
      }
      else if(propertyTypeSelected === "Land") {
        setIsFacingPolarityDisabled(false);
        setIsTotalNumberOfFloorsDisabled(true);
        setIsBuiltAreaDisabled(true);
        setIsTotalVillasDisabled(true);
        setIsPlotAreaDisabled(false);
        setIsFloorNumberDisabled(true);
        setIsBedRoomsDisabled(true);
        setIsBedRoomsWithToiletDisabled(true);
        setIsToiletsDisabled(true);
        setIsCarPorchDisabled(true);
        setIsCarParkingDisabled(true);
        setIsSitOutDisabled(true);
        setIsLivingAreaDisabled(true);
        setIsDiningHallDisabled(true);
        setIsKitchenDisabled(true);
        setIsWorkAreaDisabled(true);
        setIsUpperLivingAreaDisabled(true);
        setIsBalconyDisabled(true);
        setIsOpenTerraceDisabled(true);
        setIsWaterWellDisabled(false);
        setIsWaterConnectionDisabled(false);
      }
    }, [propertyTypeSelected])

    const submitProperty = async (e) => {
      //alert("Paulsin");
      //alert(stateNameSelectedID);
      //alert(districtNameSelectedID);
      //alert(townNameSelectedID);
      //alert();

      if(!propertyTypeSelected) {
        setAlertContent("Select property type");
        setAlertClass("alert alert-danger");
      }

      else if(!transactionTypeSelected) {
        setAlertContent("Select transaction type");
        setAlertClass("alert alert-danger");
      }

      else if(!stateNameSelectedID) {
        setAlertContent("Select state");
        setAlertClass("alert alert-danger");
      }
      else if(!districtNameSelectedID) {
        setAlertContent("Select district");
        setAlertClass("alert alert-danger");
      }
      else if(!townNameSelectedID) {
        setAlertContent("Select town");
        setAlertClass("alert alert-danger");
      }
      else if(!localityName) {
        setAlertContent("Enter Locality");
        setAlertClass("alert alert-danger");
      }
      else if(!cost) {
        setAlertContent("Enter Cost");
        setAlertClass("alert alert-danger");
      }
      else if(!facing) {
        setAlertContent("Enter Facing Polarity");
        setAlertClass("alert alert-danger");
      }
     
      else if(!totalNumberOfFloors){
        if(propertyTypeSelected==="Villa"||propertyTypeSelected==="Apartment"||propertyTypeSelected==="Flat"||propertyTypeSelected==="House") 
        {
          setAlertContent("Enter Total Number Of Floors");
          setAlertClass("alert alert-danger")
        }   
      
      }
     
      else if(!builtArea) {
          if(propertyTypeSelected==="Villa"||propertyTypeSelected==="Apartment"||propertyTypeSelected==="Flat"||propertyTypeSelected==="House" )
          {
            setAlertContent("Enter Built Area of Property");
            setAlertClass("alert alert-danger")
          }
         
        }

     
        // alert("hhhhhh")
        // alert(propertyTypeSelected)
      else if(!plotarea) {
          // alert("hhhhhh")
          if(propertyTypeSelected==="Villa"||propertyTypeSelected==="House"|| propertyTypeSelected==="Land"||propertyTypeSelected==="Plot")
          {
            setAlertContent("Enter Plot Area of Property");
            setAlertClass("alert alert-danger")

          }
          
        }
    
      else if(!totalVillas){
        if(propertyTypeSelected==="Villa") {
          setAlertContent("Enter Total Number of Villas");
          setAlertClass("alert alert-danger")
        }

      }
       
     
      else if(!floorNumber){
       if(propertyTypeSelected==="Apartment" || propertyTypeSelected==="Flat" ){
        setAlertContent("Enter The Floor Number");
        setAlertClass("alert alert-danger")
       }
          
      }
   
      else {
        // try {
        //   //alert("Paulsin");
        //   const response = await axios.post(
        //     addPropertyURL,
        //     {
        //       "propertyType": propertyTypeSelected,    
        //       "transactionType": transactionTypeSelected,
        //       "stateID": stateNameSelectedID,
        //       "districtID": districtNameSelectedID,
        //       "townID": townNameSelectedID
        //     }     
        //   );  
        
        // } catch(error) {
        //   console.error("Error posting data:", error);
        // }

      }


    };

    const editProperty= async (e) => {
      // alert(uniqueID)
      // alert(propertyTypeSelected)
      // alert(transactionTypeSelected)
      // alert(stateSelectedValue)
      // alert(districtSelectedValue)
      // alert(townSelectedValue)
       axios.post(Url+"property/editproperty",
           {
               "propertyID":uniqueID,
               "propertyType":propertyTypeSelected,
               "transactionType":transactionTypeSelected,
               "stateID":stateSelectedValue,
               "districtID":districtSelectedValue,
               "townID":townSelectedValue
    
    
           }
       )
       .then((res)=>{
           //alert('haiiii')
       })
    }

    if(operation==="new"){
   
        var facingPolarityWidget=<Select
          options={facingPolarity}
          onChange={handleFacingSelection}
        />

        var totalNumberOfFloorsWidget = <input type="text" class="form-control" required onChange={(e) =>  setTotalNumberOfFloors(e.target.value)} disabled={isTotalNumberOfFloorsDisabled}/>;
        var builtAreaWidget=<input type="text" class="form-control" required onChange={(e) =>  setBuiltArea(e.target.value)} disabled={isBuiltAreaDisabled}/>;
        var plotAreaWidget=<input type="text" class="form-control" required onChange={(e) =>  setPlotArea(e.target.value)} disabled={isPlotAreaDisabled}/>;
        var totalVillasWidget=<input type="text" class="form-control" required onChange={(e) =>  setTotalVillas(e.target.value)} disabled={isTotalVillasDisabled}/>;
        var floorNumberWidget=<input type="text" class="form-control" required onChange={(e) =>  setFloorNumber(e.target.value)} disabled={isFloorNumberDisabled}/>;
        var bedRoomsWidget=<input type="text" class="form-control" required onChange={(e) =>  setBedRooms(e.target.value)} disabled={isBedRoomsDisabled}/>;
        var bedRoomsWithToiletWidget=<input type="text" class="form-control" required onChange={(e) =>  setBedRoomsWithToilet(e.target.value)} disabled={isBedRoomsWithToiletDisabled}/>;
        var toiletsWidget=<input type="text" class="form-control" required onChange={(e) =>  setToilets(e.target.value)} disabled={isToiletsDisabled}/>;
        
        var carPorchWidget=<input type="checkbox" class="form-check-input" disabled={isCarPorchDisabled}  onChange={handleCarporchChange}  />;
        var carParkingWidget=<input type="text" class="form-control" onChange={(e) =>  setCarParking(e.target.value)} disabled={isCarParkingDisabled} />;
        var sitOutWidget=<input type="checkbox" class="form-check-input" required disabled={isSitOutDisabled} onChange={handleSitoutChange} />;
        var livingAreaWidget=<input type="checkbox"class="form-check-input" required disabled={isLivingAreaDisabled} onChange={handleLivingareaChange}/>;
        var diningHallWidget=<input type="checkbox"class="form-check-input" required disabled={isDiningHallDisabled} onChange={handleDininghallChange}/>;
        var kitchenWidget=<input type="checkbox" class="form-check-input" required disabled={isKitchenDisabled} onChange={handleKitchenChange}/>;
        var workAreaWidget=<input type="checkbox" class="form-check-input" required disabled={isWorkAreaDisabled} onChange={handleWorkareaChange}/>;
        var upperLivingAreaWidget=<input type="checkbox" class="form-check-input" required disabled={isUpperLivingAreaDisabled} onChange={handleUpperlivingAreaChange}/>;
        var balconyWidget=<input type="checkbox" class="form-check-input" required disabled={isBalconyDisabled} onChange={handleBalconyChange}/>;
        var openTerraceWidget=<input type="checkbox" class="form-check-input" required disabled={isOpenTerraceDisabled} onChange={handleOpenterraceChange}/>;
        var waterWellWidget=<input type="checkbox"class="form-check-input" required disabled={isWaterWellDisabled} onChange={handleWaterwellChange}/>;
        var waterConnectionWidget=<input type="checkbox" class="form-check-input" required disabled={isWaterConnectionDisabled} onChange={handleWaterConnectionChange}/>;
        var savebuttonwidget=<button type="submit" class="btn btn-primary" onClick={submitProperty}>Submit property</button>
    }
    else if(operation==="edit"){
        var facingPolarityWidget=<Select
        options={facingPolarity}
        onChange={handleFacingSelection}
        value={{ value: facing, label: facing }}
      />

      var totalNumberOfFloorsWidget = <input type="text" class="form-control"  required />;
      var builtAreaWidget=<input type="text" class="form-control" required />;
      var plotAreaWidget=<input type="text" class="form-control" required />;
      var totalVillasWidget=<input type="text" class="form-control" required />;
      var floorNumberWidget=<input type="text" class="form-control" required />;
      var bedRoomsWidget=<input type="text" class="form-control" required />;
      var bedRoomsWithToiletWidget=<input type="text" class="form-control" required />;
      var toiletsWidget=<input type="text" class="form-control" required />;
      
      var carPorchWidget=<input type="checkbox" class="form-check-input"required/>;
      var carParkingWidget=<input type="text" class="form-control" required />;
      var sitOutWidget=<input type="checkbox" class="form-check-input" required/>;
      var livingAreaWidget=<input type="checkbox" class="form-check-input" required/>;
      var diningHallWidget=<input type="checkbox" class="form-check-input" required/>;
      var kitchenWidget=<input type="checkbox"class="form-check-input" required/>;
      var workAreaWidget=<input type="checkbox" class="form-check-input" required/>;
      var upperLivingAreaWidget=<input type="checkbox" class="form-check-input" required/>;
      var balconyWidget=<input type="checkbox" class="form-check-input" required/>;
      var openTerraceWidget=<input type="checkbox" class="form-check-input" required/>;
      var waterWellWidget=<input type="checkbox" class="form-check-input" required/>;
      var waterConnectionWidget=<input type="checkbox" class="form-check-input" required/>;
      var savebuttonwidget=<button type="submit" class="btn btn-primary" onClick={editProperty}>Edit property</button>

    }
  return (
  <>
    <div class="row mb-3">
      <label for="inputPassword3" class="col-sm-2 col-form-label">Facing</label>
      <div class="col-sm-3">
        {facingPolarityWidget}
      </div>
      <label for="inputPassword3" class="col-sm-2 col-form-label">Number of floors</label>
      <div class="col-sm-3">
        {totalNumberOfFloorsWidget}
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputPassword3" class="col-sm-2 col-form-label">Built Area</label>
      <div class="col-sm-3">
        {builtAreaWidget}
      </div>
      <label for="inputPassword3" class="col-sm-2 col-form-label">Plot Area</label>
      <div class="col-sm-3">
        {plotAreaWidget}
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputPassword3" class="col-sm-2 col-form-label">Total Villas</label>
      <div class="col-sm-3">
        {totalVillasWidget}
      </div>
      <label for="inputPassword3" class="col-sm-2 col-form-label">Floor Number</label>
      <div class="col-sm-3">
        {floorNumberWidget}
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputPassword3" class="col-sm-2 col-form-label">Bedrooms</label>
      <div class="col-sm-3">
        {bedRoomsWidget}
      </div>
      <label for="inputPassword3" class="col-sm-2 col-form-label">Bedrooms With Toilets</label>
      <div class="col-sm-3">
        {bedRoomsWithToiletWidget}
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputPassword3" class="col-sm-2 col-form-label">Toilets</label>
      <div class="col-sm-3">
        {toiletsWidget}
      </div>
      <label for="inputPassword3" class="col-sm-2 col-form-label">Car Parking</label>
      <div class="col-sm-3">
        {carParkingWidget}
      </div>  
    </div>

    <div class="row mb-3">
      <label for="inputPassword3" class="col-sm-2 col-form-label">Carporch</label>
      <div class="col-sm-2">
        {carPorchWidget}
      </div>
      <label for="inputPassword3" class="col-sm-2 col-form-label">Sitout</label>
      <div class="col-sm-2">
        {sitOutWidget}
      </div>
      <label for="inputPassword3" class="col-sm-2 col-form-label">Living Area</label>
      <div class="col-sm-2">
        {livingAreaWidget}
      </div>

    </div>

    <div class="row mb-3">
      
      <label for="inputPassword3" class="col-sm-2 col-form-label">Dining Hall</label>
      <div class="col-sm-2">
        {diningHallWidget}
      </div>
      <label for="inputPassword3" class="col-sm-2 col-form-label">Kitchen</label>
      <div class="col-sm-2">
        {kitchenWidget}
      </div>
      <label for="inputPassword3" class="col-sm-2 col-form-label">Workarea</label>
      <div class="col-sm-2">
        {workAreaWidget}
      </div>

    </div>

    <div class="row mb-3">
      <label for="inputPassword3" class="col-sm-2 col-form-label">Upper Living Area</label>
      <div class="col-sm-2">
        {upperLivingAreaWidget}
      </div>
      <label for="inputPassword3" class="col-sm-2 col-form-label">Balcony</label>
      <div class="col-sm-2">
        {balconyWidget}
      </div>
      <label for="inputPassword3" class="col-sm-2 col-form-label">Open Terrace</label>
      <div class="col-sm-2">
        {openTerraceWidget}
      </div>
    </div>

    <div class="row mb-3">
     
      <label for="inputPassword3" class="col-sm-2 col-form-label">Water Well</label>
      <div class="col-sm-2">
        {waterWellWidget}
      </div>
      <label for="inputPassword3" class="col-sm-2 col-form-label">Water Connection</label>
      <div class="col-sm-2">
        {waterConnectionWidget}
      </div>
      <label for="inputPassword3" class="col-sm-2 col-form-label">Google Map</label>
      <div class="col-sm-2">
    
      </div>
    </div>
    {savebuttonwidget}

  </>
    
  )
}

export default AddPropertyAttributesAsComponent;