
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { facingPolarity } from "../../constants/global";
import Select from 'react-select';

const AddPropertyAttributesAsComponent = ({setPropertyTypeSelected, propertyTypeSelected, operation}) => {
   // const [propertyTypeSelected, setPropertyTypeSelected] = useState("");
   
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



    const handleFacingSelection = (e) => {
      // alert(e.value)
      setFacingPolarity(e.value);
      
    }
    const handleCarporchChange = (e) => {
      // alert(e.target.checked)
      setCarPorch(e.target.checked);
      
    }
    useMemo(() => {
      // alert("haiii")
      // alert(propertyTypeSelected)
      if(propertyTypeSelected === "Villa") {
        setIsFloorNumberDisabled(true);
      }
      else if(propertyTypeSelected === "House") {
        setIsTotalVillasDisabled(true);
        setIsFloorNumberDisabled(true);
      }
      else if(propertyTypeSelected === "Apartment") {
        setIsTotalVillasDisabled(true);
        setIsPlotAreaDisabled(true);
        setIsCarPorchDisabled(true);
        setIsWaterWellDisabled(true)
        setIsWaterConnectionDisabled(true);

      }
      else if(propertyTypeSelected === "Flat") {
        setIsTotalVillasDisabled(true);
        setIsPlotAreaDisabled(true);
        setIsCarPorchDisabled(true);
        setIsWaterWellDisabled(true)
        setIsWaterConnectionDisabled(true);
      }
      else if(propertyTypeSelected === "Plot") {
        setIsTotalNumberOfFloorsDisabled(true);
        setIsBuiltAreaDisabled(true);
        setIsTotalVillasDisabled(true);
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
      }
      else if(propertyTypeSelected === "Land") {
        setIsTotalNumberOfFloorsDisabled(true);
        setIsBuiltAreaDisabled(true);
        setIsTotalVillasDisabled(true);
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
      }
    }, [propertyTypeSelected])


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
        var sitOutWidget=<input type="checkbox" class="form-check-input" required disabled={isSitOutDisabled} />;
        var livingAreaWidget=<input type="checkbox"class="form-check-input" required disabled={isLivingAreaDisabled}/>;
        var diningHallWidget=<input type="checkbox"class="form-check-input" required disabled={isDiningHallDisabled}/>;
        var kitchenWidget=<input type="checkbox" class="form-check-input" required disabled={isKitchenDisabled}/>;
        var workAreaWidget=<input type="checkbox" class="form-check-input" required disabled={isWorkAreaDisabled}/>;
        var upperLivingAreaWidget=<input type="checkbox" class="form-check-input" required disabled={isUpperLivingAreaDisabled}/>;
        var balconyWidget=<input type="checkbox" class="form-check-input" required disabled={isBalconyDisabled}/>;
        var openTerraceWidget=<input type="checkbox" class="form-check-input" required disabled={isOpenTerraceDisabled}/>;
        var waterWellWidget=<input type="checkbox"class="form-check-input" required disabled={isWaterWellDisabled}/>;
        var waterConnectionWidget=<input type="checkbox" class="form-check-input" required disabled={isWaterConnectionDisabled}/>;
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
 

  </>
    
  )
}

export default AddPropertyAttributesAsComponent;