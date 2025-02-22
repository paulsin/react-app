import React, { useState, useEffect } from "react";

import Select from 'react-select';

const AddPropertyOwnerDetails = (setOwnerselectedValue,setOwnerselectedLabel,owneroptions,ownerSelectedLabel,ownerSelectedValue) => {
    const  handleOwnerorDeveloperSelection = (e) => {
        setOwnerselectedValue(e.value)
        setOwnerselectedLabel(e.label)
     
      }
    //   alert(operation)
    // if(operation==="new"){
      
              
        var ownernameswidget=  <Select
        
                // value={{label:districtSelectedLabel, value:districtSelectedValue}}
                onChange={handleOwnerorDeveloperSelection}
                options={owneroptions}
              />
    // }
    // else if(operation==="edit"){
    
        var ownernameswidget=  <Select
        
                 value={{label:ownerSelectedLabel, value:ownerSelectedValue}}
                onChange={handleOwnerorDeveloperSelection}
                options={owneroptions}
              />
    // }
  return (
    <div>{ownernameswidget}</div>
  )
}

export default AddPropertyOwnerDetails