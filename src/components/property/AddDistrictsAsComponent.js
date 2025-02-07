import React, { useState, useEffect } from "react";

import Select from 'react-select';
// import AddStatesAsComponent from "./AddStatesAsComponent";
const AddDistrictsAsComponent = ({districtOptions,setDistrictNameSelectedID,setDistrictSelectedLabel,setDistrictSelectedValue,
    townOptionsOriginal,setTownOptions,setStateNameSelectedID,stateNameSelectedID,operation,districtSelectedLabel,districtSelectedValue}) => {
        // alert(stateNameSelectedID)
    const handleDistrictSelection = (e) => {
// alert(e.value)
        var townOptionsArrayTemp = [];
        setDistrictSelectedLabel(e.label)
        setDistrictSelectedValue(e.value)
  
        setDistrictNameSelectedID(e.value);
  
        townOptionsOriginal.map(key => {
        //    alert(key.districtID)
        //    alert("evalue",e.value)
          if(key.stateID == stateNameSelectedID && key.districtID == e.value) {
            alert(key.label);
            townOptionsArrayTemp.push({ value: key.value, label: key.label });
          }
          //stateOptionsArray.push({ value: key._id, label: key.stateName });           
        });
  
        setTownOptions(townOptionsArrayTemp);
      }
  
    if(operation==="new"){
      
        var districtwidget= <Select

        onChange={handleDistrictSelection}
        options={districtOptions}
      />
    }
    else if(operation==="edit"){
    
        var districtwidget=  <Select
        
                value={{label:districtSelectedLabel, value:districtSelectedValue}}
                onChange={handleDistrictSelection}
                options={districtOptions}
              />
    }
  return (
    <div>{districtwidget}</div>
  )
}

export default AddDistrictsAsComponent