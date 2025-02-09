
import React, { useState, useEffect } from "react";
import { facingPolarity } from "../../constants/global";
import Select from 'react-select';

const AddPropertyAttributesAsComponent = ({setPropertyTypeSelected, propertyTypeSelected, operation}) => {
   // const [propertyTypeSelected, setPropertyTypeSelected] = useState("");

    const handlePropertySelection = (e) => {
        setPropertyTypeSelected(e.value);
    }
    if(operation==="new"){
        var facingPolarityWidget=<Select
          options={facingPolarity}
          //onChange={handlePropertySelection}
        />

        var totalNumberOfFloors = <input type="text" class="form-control" required />;
    }
    else if(operation==="edit"){
        var facingPolarityWidget=<Select
        options={facingPolarity}
        //onChange={handlePropertySelection}
        //value={{ value: propertyTypeSelected, label: propertyTypeSelected}}
      />

      var totalNumberOfFloors = <input type="text" class="form-control"  required />;
    }
  return (

    <div class="row mb-3">
      
      <label for="inputPassword3" class="col-sm-2 col-form-label">Facing</label>

      <div class="col-sm-3">
        {facingPolarityWidget}
      </div>

      <label for="inputPassword3" class="col-sm-2 col-form-label">Number of floors</label>

      <div class="col-sm-3">
        {totalNumberOfFloors}
      </div>

    </div>
  )
}

export default AddPropertyAttributesAsComponent;