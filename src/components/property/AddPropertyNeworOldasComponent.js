import React, { useState, useEffect } from "react";
import { propertyTypes } from "../../constants/global";
import Select from 'react-select';
import { neworOldType } from "../../constants/global";

const AddPropertyNeworOldasComponent = ({setNeworOld,newOrOld,operation}) => {
    const handleNeworoldSelection = (e) => {
        setNeworOld(e.value);
      }
  
    if(operation==="new"){
        var neworoldwidget= <Select
        options={neworOldType}
        onChange={handleNeworoldSelection}
      />
    }
    else if(operation==="edit"){
        var neworoldwidget= <Select
        options={neworOldType}
        onChange={handleNeworoldSelection}
        value={{ value: newOrOld, label: newOrOld }}
      />  
    }

    
  return (
    <div>{neworoldwidget}</div>
  )
}

export default AddPropertyNeworOldasComponent