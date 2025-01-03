
import React from "react";
import background from "../../images/background.jpg";
import Navbar from "../common/Navbar";
import { Url } from "../../constants/global";
import axios from "axios";
import { useState, useEffect } from "react";
import { json, useNavigate, useParams } from "react-router-dom";

import Select from "react-select";

var newUrl = Url + 'accounts/person';


const Test3 = () => {



    const algorithm = [
        {
          value: "Algorithm",
          label: "Algorithm"
        },
        {
          value: "Language",
          label: "Language"
        },
        {
          value: "Data Structure",
          label: "Data Structure"
        }
      ];
    
      const testing = [
        {
          value: "1",
          label: "1"
        },
        {
          value: "2",
          label: "2"
        },
        {
          value: "3",
          label: "3"
        }
      ];
      const language = [
        {
          value: "C++",
          label: "C++"
        },
        {
          value: "java",
          label: "java"
        },
        {
          value: "Python",
          label: "Python"
        },
        {
          value: "C#",
          label: "C#"
        }
      ];
      const dataStructure = [
        {
          value: "Arrays",
          label: "Arrays"
        },
        {
          value: "LinkedList",
          label: "LinkedList"
        },
        {
          value: "Stack",
          label: "Stack"
        },
        {
          value: "Queue",
          label: "Queue"
        }
      ];
    
      const [selected, setSelected] = useState("");
    
      let type = null;
    
      if (selected === "Algorithm") {
        type = testing;
      } else if (selected === "Language") {
        type = language;
      } else if (selected === "Data Structure") {
        type = dataStructure;
      }
    
      const changeSelectOptionHandler = (event) => {
        setSelected(event.value);
      };



    useEffect(() => {

        //alert(newID);
        //fetchDataByID();

    }, []);



    return(

    <div>

      <Navbar />


      <div>
      <Select options={algorithm} onChange={changeSelectOptionHandler}></Select>
      <Select options={type}></Select>
    </div>

        


    </div>

    )
};

export default Test3;