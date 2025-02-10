
import React, { useState, useEffect } from "react";
import { facingPolarity } from "../../constants/global";
import Select from 'react-select';

const AddPropertyAttributesAsComponent = ({setPropertyTypeSelected, propertyTypeSelected, operation}) => {
   // const [propertyTypeSelected, setPropertyTypeSelected] = useState("");
   const [isDisabled, setIsDisabled] = useState(false);
    const handlePropertySelection = (e) => {
      // alert(e.value)
        setPropertyTypeSelected(e.value);
        // if(e.value=="Villa"){
        //   setIsDisabled(!isDisabled)
        // }
    }
    //disabled={isDisabled} 
    // alert(propertyTypeSelected)
    if(propertyTypeSelected==="Villa"){
      // alert("haiii")
      setIsDisabled(!isDisabled)
      // return;
      
    }
    if(operation==="new"){
   
        var facingPolarityWidget=<Select
          options={facingPolarity}
          //onChange={handlePropertySelection}
        />

        var totalNumberOfFloorsWidget = <input type="text" class="form-control" required />;
        var builtAreaWidget=<input type="text" class="form-control" required />;
        var plotAreaWidget=<input type="text" class="form-control" required />;
        var totalVillasWidget=<input type="text" class="form-control" required />;
        var floorNumberWidget=<input type="text" class="form-control" required />;
        var bedRoomsWidget=<input type="text" class="form-control" required />;
        var bedRoomsWithToiletWidget=<input type="text" class="form-control" required />;
        var toiletsWidget=<input type="text" class="form-control" required />;
        
        var carPorchWidget=<input type="checkbox" class="form-check-input" />;
        var carParkingWidget=<input type="text" class="form-control" disabled={isDisabled} />;
        var sitOutWidget=<input type="checkbox" class="form-check-input" required  />;
        var livingAreaWidget=<input type="checkbox"class="form-check-input" required/>;
        var diningHallWidget=<input type="checkbox"class="form-check-input" required/>;
        var kitchenWidget=<input type="checkbox" class="form-check-input" required/>;
        var workAreaWidget=<input type="checkbox" class="form-check-input" required/>;
        var upperLivingAreaWidget=<input type="checkbox" class="form-check-input" required/>;
        var balconyWidget=<input type="checkbox" class="form-check-input" required/>;
        var openTerraceWidget=<input type="checkbox" class="form-check-input" required/>;
        var waterWellWidget=<input type="checkbox"class="form-check-input" required/>;
        var waterConnectionWidget=<input type="checkbox" class="form-check-input" required/>;
    }
    else if(operation==="edit"){
        var facingPolarityWidget=<Select
        options={facingPolarity}
        //onChange={handlePropertySelection}
        //value={{ value: propertyTypeSelected, label: propertyTypeSelected}}
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
      <div class="col-sm-3">
        {carPorchWidget}
      </div>
      <label for="inputPassword3" class="col-sm-2 col-form-label">Sitout</label>
      <div class="col-sm-3">
        {sitOutWidget}
      </div>
    </div>

    <div class="row mb-3">
      <label for="inputPassword3" class="col-sm-2 col-form-label">Living Area</label>
      <div class="col-sm-3">
        {livingAreaWidget}
      </div>
      <label for="inputPassword3" class="col-sm-2 col-form-label">Dining Hall</label>
      <div class="col-sm-3">
        {diningHallWidget}
      </div>
    </div>

    <div class="row mb-3">
      <label for="inputPassword3" class="col-sm-2 col-form-label">Kitchen</label>
      <div class="col-sm-3">
        {kitchenWidget}
      </div>
      <label for="inputPassword3" class="col-sm-2 col-form-label">Workarea</label>
      <div class="col-sm-3">
        {workAreaWidget}
      </div>
    </div>

    <div class="row mb-3">
      <label for="inputPassword3" class="col-sm-2 col-form-label">Upper Living Area</label>
      <div class="col-sm-3">
        {upperLivingAreaWidget}
      </div>
      <label for="inputPassword3" class="col-sm-2 col-form-label">Balcony</label>
      <div class="col-sm-3">
        {balconyWidget}
      </div>
    </div>

    <div class="row mb-3">
      <label for="inputPassword3" class="col-sm-2 col-form-label">Open Terrace</label>
      <div class="col-sm-3">
        {openTerraceWidget}
      </div>
      <label for="inputPassword3" class="col-sm-2 col-form-label">Water Well</label>
      <div class="col-sm-3">
        {waterWellWidget}
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputPassword3" class="col-sm-2 col-form-label">Water Connection</label>
      <div class="col-sm-3">
        {waterConnectionWidget}
      </div>
      <label for="inputPassword3" class="col-sm-2 col-form-label">Google Map</label>
      <div class="col-sm-3">
    
      </div>
    </div>

  </>
    
  )
}

export default AddPropertyAttributesAsComponent;