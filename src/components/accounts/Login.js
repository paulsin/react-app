
import React from "react";
import background from "../../images/background.jpg";
import Navbar from "../common/Navbar";
import { Url } from "../../constants/global";
import axios from "axios";
import { useState, useEffect } from "react";
import { json, useNavigate, useParams } from "react-router-dom";

var newUrl = Url + 'accounts/person/login';


const Login = () => {

    const [mailOrMobile, setMailOrMobile] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [alertClass, setAlertClass] = useState("alert alert-secondary");
    const [alertContent, setAlertContent] = useState("Enter the following details for registration");
    const [userRole, setUserRole] = useState("");
    const [data, setData] = useState([]);
    const [buttonLabel, setButtonLabel] = useState("Submit");
//    const [dataCheckFlag, setDataCheckFlag] = useState(0);

    ///   For navigate function
    const navigate = useNavigate();

    const {newID} = useParams();

    //alert(newID);


    const dataCheckFunction = (e) => {

      if(mailOrMobile == "") {
        setAlertContent("Enter the Email ID or Mobile number");
        setAlertClass("alert alert-danger");
      }
      else if(password == "") {
        setAlertContent("Enter the password");
        setAlertClass("alert alert-danger");
      }
      else {
        //alert("setting here");
        return(1);
      }

      return 0;
    }


    const handleSubmit = async (e) => {
      //alert("Paulsin");
      
      //e.preventDefault(); 

      console.log("Clicked");

      let dataCheckFlag = await dataCheckFunction(); 

      //alert(dataCheckFlag);

      if(dataCheckFlag == 1) {
        setAlertContent("Logging in");
        setAlertClass("alert alert-warning");
      
        //alert(userRole);

        try {
          alert(newUrl);
          const response = await axios.post(
            newUrl,
            {
              "mailOrMobile": mailOrMobile,    
              "password": password
            }     
          );  

          //console.log(response.data);
          //alert(response.status);
          //alert(response.status);
          if(response.data === "OK" || response.status === 200) {
            setAlertContent("Registration completed");
            setAlertClass("alert alert-success");
            //alert("Paulsin");
          }
        } catch(error) {
          console.error("Error posting data:", error);
        }
          
      }

      //setDataCheckFlag(0);
    };




    useEffect(() => {
      //fetchDataByID();
    }, []);


    const buttonClickFunction = async (e) => {
      e.preventDefault(); 
      handleSubmit();
    }


    return(

    <div>

      <Navbar />


        <div class="container mt-3">
          <h2>Registration form</h2>
          
            <div class={alertClass} role="alert">
              {alertContent}
            </div>

            <div class="mb-3 mt-3">
              <label for="mailOrMobile">Mail / Mobile:</label>
              <input type="mailOrMobile" class="form-control" id="mailOrMobile" placeholder="Enter mobile number" name="name" required onChange={(e) => setMailOrMobile(e.target.value)}
              value={mailOrMobile}/>
            </div>

            <div class="mb-3 mt-3">
              <label for="password">Password:</label>
              <input type="password" class="form-control" id="password" placeholder="Enter password" name="password" 
              required onChange={(e) => setPassword(e.target.value)} value={password}/>
            </div>
            
            <button type="submit" class="btn btn-primary" onClick={buttonClickFunction}>{buttonLabel}</button>
          
        </div>

        


    </div>

    )
};

export default Login;