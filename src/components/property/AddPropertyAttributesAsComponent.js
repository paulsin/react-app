
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { facingPolarity } from "../../constants/global";
import Select from 'react-select';
import axios from "axios";
import { Url } from "../../constants/global";
var addPropertyURL = Url + 'property/addProperty';
const AddPropertyAttributesAsComponent = ({setPropertyTypeSelected,propertyTypeSelected, operation,setAlertContent,setAlertClass,
  transactionTypeSelected,stateNameSelectedID,districtNameSelectedID,townNameSelectedID,localityName,cost,stateSelectedValue,districtSelectedValue,townSelectedValue,uniqueID,
  setFacingPolarity, setTotalNumberOfFloors,setPlotArea, setBuiltArea,setTotalVillas, setFloorNumber,setBedRooms, setBedRoomsWithToilet,
  setToilets,setCarPorch,setCarParking,setSitOut,setLivingArea,setDiningHall,setKitchen,setWorkArea,setUpperLivingArea,setBalcony,setOpenTerrace,setWaterWell,
  setWaterConnection,facing,totalNumberOfFloors,plotarea,builtArea,totalVillas,floorNumber,bedRooms,bedRoomsWithToilet,toilets,carPorch,carParking,
  sitOut,livingArea,diningHall,kitchen,workArea, upperLivingArea,balcony,openTerrace, waterWell,waterConnection,setCarporchStatusChecked,setSitoutStatusChecked,setLivingareaStatusChecked,setDininghallStatusChecked,
  setKitchenStatusChecked,setWorkareaStatusChecked,setUpperlivingareaStatusChecked,setBalconyStatusChecked,
  setOpenterraceStatusChecked, setWaterwellStatusChecked,setWaterconnectionStatusChecked,carporchStatusChecked,sitoutStatusChecked,livingareaStatusChecked, dininghallStatusChecked,
  kitchenStatusChecked,workareaStatusChecked,upperlivingareaStatusChecked,balconyStatusChecked,openterraceStatusChecked,waterwellStatusChecked,waterconnectionStatusChecked
}) => {
 

   
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
      var postflag=false

      var propertyAttrbutesFlag = true;
      var propertyTypeSelectedFlag = true;
      var stateNameSelectedIDFlag = true;
      var districtNameSelectedIDFlag = true;
      var townNameSelectedIDFlag = true;
      var transactionTypeSelectedFlag = true;
      var localityFlag =true;
      var costFlag=true;
      var facingPolarityFlag=true;

      var plotareaFlag = true;
      var builtAreaFlag = true;
      var totalNumberOfFloorsFlag = true;
      var totalVillasFlag = true;
      var bedroomFlag =true;
      var bedroomwithToiletFlag=true;
      var toiletsFlag=true;
      var carParkingFlag=true;
      var floorNumberFlag=true;
      

  
    if(propertyTypeSelected === "House") {
      if(carParking === "") {
        setAlertClass("alert alert-danger");
        setAlertContent("Enter CarParking");
        carParkingFlag = false;
      }


      if(toilets === "") {
        setAlertClass("alert alert-danger");
        setAlertContent("Enter Toilet Number");
        toiletsFlag = false;
      }

      
      if(bedRoomsWithToilet === "") {
        setAlertClass("alert alert-danger");
        setAlertContent("Enter Bedroom With Toilet Number");
        bedroomwithToiletFlag = false;
      }

      
      if(bedRooms === "") {
        setAlertClass("alert alert-danger");
        setAlertContent("Enter Bedroom Number");
        bedroomFlag = false;
      }

      if(plotarea === "") {
        setAlertClass("alert alert-danger");
        setAlertContent("Enter plot area");
        plotareaFlag = false;
      }

      if(builtArea === "") {
        setAlertClass("alert alert-danger");
        setAlertContent("Enter built area");
        builtAreaFlag = false;
      }

      if(totalNumberOfFloors === "") {
        setAlertClass("alert alert-danger");
        setAlertContent("Enter number of floors");
        totalNumberOfFloorsFlag = false;
      }

      if(!carParkingFlag || !toiletsFlag || !bedroomwithToiletFlag || !bedroomFlag || !plotareaFlag || !builtAreaFlag || !totalNumberOfFloorsFlag) {
        propertyAttrbutesFlag = false;
      }

    }
    else if(propertyTypeSelected === "Villa") {
      if(carParking === "") {
        setAlertClass("alert alert-danger");
        setAlertContent("Enter CarParking");
        carParkingFlag = false;
      }


      if(toilets === "") {
        setAlertClass("alert alert-danger");
        setAlertContent("Enter Toilet Number");
        toiletsFlag = false;
      }

      
      if(bedRoomsWithToilet === "") {
        setAlertClass("alert alert-danger");
        setAlertContent("Enter Bedroom With Toilet Number");
        bedroomwithToiletFlag = false;
      }

      
      if(bedRooms === "") {
        setAlertClass("alert alert-danger");
        setAlertContent("Enter Bedroom Number");
        bedroomFlag = false;
      }

      if(totalVillas === "") {
        setAlertClass("alert alert-danger");
        setAlertContent("Enter number of villas");
        totalVillasFlag = false;
      }
      if(plotarea === "") {
        setAlertClass("alert alert-danger");
        setAlertContent("Enter plot area");
        plotareaFlag = false;
      }

      if(builtArea === "") {
        setAlertClass("alert alert-danger");
        setAlertContent("Enter built area");
        builtAreaFlag = false;
      }

      if(totalNumberOfFloors === "") {
        setAlertClass("alert alert-danger");
        setAlertContent("Enter number of floors");
        totalNumberOfFloorsFlag = false;
      }

      

      if(!carParkingFlag || !toiletsFlag || !bedroomwithToiletFlag || !bedroomFlag ||!totalVillasFlag || !plotareaFlag || !builtAreaFlag || !totalNumberOfFloorsFlag ) {
        propertyAttrbutesFlag = false;
      }
    }
    else if(propertyTypeSelected === "Apartment") {
      if(carParking === "") {
        setAlertClass("alert alert-danger");
        setAlertContent("Enter CarParking");
        carParkingFlag = false;
      }


      if(toilets === "") {
        setAlertClass("alert alert-danger");
        setAlertContent("Enter Toilet Number");
        toiletsFlag = false;
      }

      
      if(bedRoomsWithToilet === "") {
        setAlertClass("alert alert-danger");
        setAlertContent("Enter Bedroom With Toilet Number");
        bedroomwithToiletFlag = false;
      }

      
      if(bedRooms === "") {
        setAlertClass("alert alert-danger");
        setAlertContent("Enter Bedroom Number");
        bedroomFlag = false;
      }

      if(floorNumber === "") {
        setAlertClass("alert alert-danger");
        setAlertContent("Enter Floor Number");
        floorNumberFlag = false;
      }

      
      if(builtArea === "") {
        setAlertClass("alert alert-danger");
        setAlertContent("Enter built area");
        builtAreaFlag = false;
      }

      if(totalNumberOfFloors === "") {
        setAlertClass("alert alert-danger");
        setAlertContent("Enter number of floors");
        totalNumberOfFloorsFlag = false;
      }

      if(!carParkingFlag || !toiletsFlag || !bedroomwithToiletFlag || !bedroomFlag || !floorNumberFlag ||  !builtAreaFlag || !totalNumberOfFloorsFlag ) {
        propertyAttrbutesFlag = false;
      }
    }
    else if(propertyTypeSelected === "Flat") {
      if(carParking === "") {
        setAlertClass("alert alert-danger");
        setAlertContent("Enter CarParking");
        carParkingFlag = false;
      }


      if(toilets === "") {
        setAlertClass("alert alert-danger");
        setAlertContent("Enter Toilet Number");
        toiletsFlag = false;
      }

      
      if(bedRoomsWithToilet === "") {
        setAlertClass("alert alert-danger");
        setAlertContent("Enter Bedroom With Toilet Number");
        bedroomwithToiletFlag = false;
      }

      
      if(bedRooms === "") {
        setAlertClass("alert alert-danger");
        setAlertContent("Enter Bedroom Number");
        bedroomFlag = false;
      }

      if(floorNumber === "") {
        setAlertClass("alert alert-danger");
        setAlertContent("Enter Floor Number");
        floorNumberFlag = false;
      }

      
      if(builtArea === "") {
        setAlertClass("alert alert-danger");
        setAlertContent("Enter built area");
        builtAreaFlag = false;
      }

      if(totalNumberOfFloors === "") {
        setAlertClass("alert alert-danger");
        setAlertContent("Enter number of floors");
        totalNumberOfFloorsFlag = false;
      }

      if(!carParkingFlag || !toiletsFlag || !bedroomwithToiletFlag || !bedroomFlag || !floorNumberFlag ||  !builtAreaFlag || !totalNumberOfFloorsFlag ) {
        propertyAttrbutesFlag = false;
      }
    }
    else if(propertyTypeSelected === "Plot") {
      if(plotarea === "") {
        setAlertClass("alert alert-danger");
        setAlertContent("Enter plot area");
        plotareaFlag = false;
      }
      if(!plotareaFlag ) {
        propertyAttrbutesFlag = false;
      }

    }
    else if(propertyTypeSelected === "Land") {
      if(plotarea === "") {
        setAlertClass("alert alert-danger");
        setAlertContent("Enter plot area");
        plotareaFlag = false;
      }
      if(!plotareaFlag ) {
        propertyAttrbutesFlag = false;
      }

    }
    if(facing === "") {
      //alert("Paulsi");
      setAlertClass("alert alert-danger");
      setAlertContent("Select Facing Polarity");
      facingPolarityFlag = false;
    }
    if(cost === "") {
      //alert("Paulsi");
      setAlertClass("alert alert-danger");
      setAlertContent("Enter Cost");
      costFlag = false;
    }
    if(localityName === "") {
      //alert("Paulsi");
      setAlertClass("alert alert-danger");
      setAlertContent("Enter Locality Name");
      localityFlag = false;
    }
    if(townNameSelectedID === "") {
      //alert("Paulsi");
      setAlertClass("alert alert-danger");
      setAlertContent("Select town");
      townNameSelectedIDFlag = false;
    }

    if(districtNameSelectedID === "") {
        //alert("Paulsi");
        setAlertClass("alert alert-danger");
        setAlertContent("Select district");
        districtNameSelectedIDFlag = false;
    }

    if(stateNameSelectedID === "") {
        //alert("Paulsi");
        setAlertClass("alert alert-danger");
        setAlertContent("Select state");
        stateNameSelectedIDFlag = false;
    }

    if(transactionTypeSelected === "") {
        setAlertClass("alert alert-danger");
        setAlertContent("Select transaction type");
        transactionTypeSelectedFlag = false;
    }

    if(propertyTypeSelected === "") {
      //alert("Paulsin");
      setAlertClass("alert alert-danger");
      setAlertContent("Select property type");
      propertyTypeSelectedFlag = false;
    }

    
  
   
     if(propertyAttrbutesFlag && townNameSelectedIDFlag && districtNameSelectedIDFlag && stateNameSelectedIDFlag && transactionTypeSelectedFlag && propertyTypeSelectedFlag
      && costFlag && localityFlag && facingPolarityFlag
     ){
      // alertarray=[];
      // setAlertContent(alertarray)
        alert(carporchStatusChecked)
      //  if(propertyTypeSelected=="Villa") {
          try {
        alert(bedRoomsWithToilet);
           const response = await axios.post(
             addPropertyURL,
             {
               "propertyType": propertyTypeSelected,    
               "transactionType": transactionTypeSelected,
               "stateID": stateNameSelectedID,
               "districtID": districtNameSelectedID,
               "townID": townNameSelectedID,
               "locality":localityName,
               "cost":cost,
               "facing":facing,
               "numberOfFloors":totalNumberOfFloors,
               "builtArea":builtArea,
               "plotArea":plotarea,
               "totalVillas":totalVillas,
                "floorNumber":floorNumber,
              "bedrooms":bedRooms,
               "bedroomsWithToilet":bedRoomsWithToilet,
               "toilets":toilets,
               "carPorch":carporchStatusChecked,
               "carParking":carParking,
               "sitout":sitoutStatusChecked,
               "livingArea":livingareaStatusChecked,
               "diningHall":dininghallStatusChecked,
               "kitchen":kitchenStatusChecked,
               "workArea":workareaStatusChecked,
               "upperLivingArea":upperlivingareaStatusChecked,
               "balcony":balconyStatusChecked,
               "openTerrace":openterraceStatusChecked,
               "waterWell":waterwellStatusChecked,
               "waterConnection":waterconnectionStatusChecked,
              



             }     
           );  
        
         } catch(error) {
           console.error("Error posting data:", error);
         }

      //  }
       
         setAlertClass("alert alert-success");
      setAlertContent("Data submitted Successfully");
        
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
               "townID":townSelectedValue,
               "locality":localityName,
               "cost":cost,
               "facing":facing,
               "numberOfFloors":totalNumberOfFloors,
               "builtArea":builtArea,
               "plotArea":plotarea,
               "totalVillas":totalVillas,
               "floorNumber":floorNumber,
               "bedrooms":bedRooms,
               "bedroomsWithToilet":bedRoomsWithToilet,
               "toilets":toilets,
               "carPorch":carporchStatusChecked,
               "carParking":carParking,
               "sitout":sitoutStatusChecked,
               "livingArea":livingareaStatusChecked,
               "diningHall":dininghallStatusChecked,
               "kitchen":kitchenStatusChecked,
               "workArea":workareaStatusChecked,
               "upperLivingArea":upperlivingareaStatusChecked,
               "balcony":balconyStatusChecked,
               "openTerrace":openterraceStatusChecked,
               "waterWell":waterwellStatusChecked,
               "waterConnection":waterconnectionStatusChecked,
               
    
    
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
        
        var carPorchWidget=<input type="checkbox" class="form-check-input" disabled={isCarPorchDisabled}  onChange={() => setCarporchStatusChecked(!carporchStatusChecked)} />;
        var carParkingWidget=<input type="text" class="form-control" onChange={(e) =>  setCarParking(e.target.value)} disabled={isCarParkingDisabled} />;
        var sitOutWidget=<input type="checkbox" class="form-check-input" required disabled={isSitOutDisabled} onChange={() => setSitoutStatusChecked(!sitoutStatusChecked)}   />;
        var livingAreaWidget=<input type="checkbox"class="form-check-input" required disabled={isLivingAreaDisabled} onChange={() => setLivingareaStatusChecked(!livingareaStatusChecked)}   />;
        var diningHallWidget=<input type="checkbox"class="form-check-input" required disabled={isDiningHallDisabled} onChange={() => setDininghallStatusChecked(!dininghallStatusChecked)}/>;
        var kitchenWidget=<input type="checkbox" class="form-check-input" required disabled={isKitchenDisabled}  onChange={() => setKitchenStatusChecked(!kitchenStatusChecked)}/>;
        var workAreaWidget=<input type="checkbox" class="form-check-input" required disabled={isWorkAreaDisabled} onChange={() => setWorkareaStatusChecked(!workareaStatusChecked)}/>;
        var upperLivingAreaWidget=<input type="checkbox" class="form-check-input" required disabled={isUpperLivingAreaDisabled} onChange={() => setUpperlivingareaStatusChecked(!upperlivingareaStatusChecked)}/>;
        var balconyWidget=<input type="checkbox" class="form-check-input" required disabled={isBalconyDisabled} onChange={() => setBalconyStatusChecked(!balconyStatusChecked)}/>;
        var openTerraceWidget=<input type="checkbox" class="form-check-input" required disabled={isOpenTerraceDisabled} onChange={() => setOpenterraceStatusChecked(!openterraceStatusChecked)} />;
        var waterWellWidget=<input type="checkbox"class="form-check-input" required disabled={isWaterWellDisabled} onChange={() => setWaterwellStatusChecked(!waterwellStatusChecked)}/>;
        var waterConnectionWidget=<input type="checkbox" class="form-check-input" required disabled={isWaterConnectionDisabled} onChange={() => setWaterconnectionStatusChecked(!waterconnectionStatusChecked)}   />;
        var savebuttonwidget=<button type="submit" class="btn btn-primary" onClick={submitProperty}>Submit property</button>
    }
    else if(operation==="edit"){
      // alert(carporchtrue)
        var facingPolarityWidget=<Select
        options={facingPolarity}
        onChange={handleFacingSelection}
        value={{ value: facing, label: facing }}
      />

      var totalNumberOfFloorsWidget = <input type="text" class="form-control" required onChange={(e) =>  setTotalNumberOfFloors(e.target.value)} disabled={isTotalNumberOfFloorsDisabled} value={totalNumberOfFloors}/>;
        var builtAreaWidget=<input type="text" class="form-control" required onChange={(e) =>  setBuiltArea(e.target.value)} disabled={isBuiltAreaDisabled} value={builtArea}/>;
        var plotAreaWidget=<input type="text" class="form-control" required onChange={(e) =>  setPlotArea(e.target.value)} disabled={isPlotAreaDisabled} value={plotarea}/>;
        var totalVillasWidget=<input type="text" class="form-control" required onChange={(e) =>  setTotalVillas(e.target.value)} disabled={isTotalVillasDisabled} value={totalVillas}/>;
        var floorNumberWidget=<input type="text" class="form-control" required onChange={(e) =>  setFloorNumber(e.target.value)} disabled={isFloorNumberDisabled} value={floorNumber}/>;
        var bedRoomsWidget=<input type="text" class="form-control" required onChange={(e) =>  setBedRooms(e.target.value)} disabled={isBedRoomsDisabled} value={bedRooms}/>;
        var bedRoomsWithToiletWidget=<input type="text" class="form-control" required onChange={(e) =>  setBedRoomsWithToilet(e.target.value)} disabled={isBedRoomsWithToiletDisabled} value={bedRoomsWithToilet}/>;
        var toiletsWidget=<input type="text" class="form-control" required onChange={(e) =>  setToilets(e.target.value)} disabled={isToiletsDisabled} value={toilets}/>;
        
        var carPorchWidget=<input type="checkbox" class="form-check-input" disabled={isCarPorchDisabled}  checked={carporchStatusChecked} onChange={() => setCarporchStatusChecked(!carporchStatusChecked)} />;
        var carParkingWidget=<input type="text" class="form-control" onChange={(e) =>  setCarParking(e.target.value)} disabled={isCarParkingDisabled} value={carParking}  />;
        var sitOutWidget=<input type="checkbox" class="form-check-input" required disabled={isSitOutDisabled} checked={sitoutStatusChecked}  onChange={() => setSitoutStatusChecked(!sitoutStatusChecked)}/>;
        var livingAreaWidget=<input type="checkbox"class="form-check-input" required disabled={isLivingAreaDisabled}  onChange={() => setLivingareaStatusChecked(!livingareaStatusChecked)} checked={livingareaStatusChecked}/>;
        var diningHallWidget=<input type="checkbox"class="form-check-input" required disabled={isDiningHallDisabled}  onChange={() => setDininghallStatusChecked(!dininghallStatusChecked)} checked={dininghallStatusChecked}/>;
        var kitchenWidget=<input type="checkbox" class="form-check-input" required disabled={isKitchenDisabled}  onChange={() => setKitchenStatusChecked(!kitchenStatusChecked)} checked={kitchenStatusChecked}/>;
        var workAreaWidget=<input type="checkbox" class="form-check-input" required disabled={isWorkAreaDisabled}  onChange={() => setWorkareaStatusChecked(!workareaStatusChecked)} checked={workareaStatusChecked}/>;
        var upperLivingAreaWidget=<input type="checkbox" class="form-check-input" required disabled={isUpperLivingAreaDisabled}  onChange={() => setUpperlivingareaStatusChecked(!upperlivingareaStatusChecked)} checked={upperlivingareaStatusChecked}/>;
        var balconyWidget=<input type="checkbox" class="form-check-input" required disabled={isBalconyDisabled}  onChange={() => setBalconyStatusChecked(!balconyStatusChecked)} checked={balconyStatusChecked}/>;
        var openTerraceWidget=<input type="checkbox" class="form-check-input" required disabled={isOpenTerraceDisabled}  onChange={() => setOpenterraceStatusChecked(!openterraceStatusChecked)} checked={openterraceStatusChecked}/>;
        var waterWellWidget=<input type="checkbox"class="form-check-input" required disabled={isWaterWellDisabled}  onChange={() => setWaterwellStatusChecked(!waterwellStatusChecked)} checked={waterwellStatusChecked}/>;
        var waterConnectionWidget=<input type="checkbox" class="form-check-input" required disabled={isWaterConnectionDisabled}  onChange={() => setWaterconnectionStatusChecked(!waterconnectionStatusChecked)} checked={waterconnectionStatusChecked}/>;
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


    <br/><br/>
  </>
    
  )
}

export default AddPropertyAttributesAsComponent;