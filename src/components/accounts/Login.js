
import React from "react";
import background from "../../images/background.jpg";
import Navbar from "../common/Navbar";
import { Url } from "../../constants/global";
import axios from "axios";
import { useState, useEffect } from "react";
import { json, useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import Loading from "../common/Loading";
import LoginDIV from "./LoginDIV";

var newUrl = Url + 'accounts/logInFunction';
var loggedCheckUrl = Url + 'accounts/loggedInUser';

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
    const [selectedDIV, setSelectedDIV] = useState(<Loading/>);

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
      
        newUrl = newUrl + "?username="+mailOrMobile+"&password="+password;
        //alert(newUrl);
        const response = axios.get( newUrl,   
          { withCredentials: true }
        )
        .then(function (response) {
          //console.log(response);
          alert(response.data);

          if(response.data == 'bad_credentials') {
            setAlertContent("Invalid credentials");
            setAlertClass("alert alert-danger");
          }
          else if (response.data == 'logged_in') {
            //alert("Logged In");
            navigate('/frontend/profile');
          }
        })
        .catch(function (error) {
          console.log(error);
        }); 
      }
      //setDataCheckFlag(0);
    };

    /*
    function logInDIV() {   

      return (
        <>                
        <div class="container mt-3">
                              <h2>Log in</h2>
                              
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
        </>
      );
    }
*/
    const fetchLoggedData = (e) => {

      const response = axios.get(loggedCheckUrl,   
        { withCredentials: true }
      )
      .then(function (response) {
        //console.log(response);
        //alert(response.data);
        if(response.data.username && response.data.password) {
          //alert("Logged In");
          navigate('/frontend/profile');
          //setSelectedDIV(loginDIV);
        }
        else {
          setSelectedDIV(<LoginDIV />);
        }
        //setUsername(response.data.username);
      })
      .catch(function (error) {
        console.log(error);
      }); 

    }

    useEffect(() => {
      //fetchDataByID();
      fetchLoggedData();
    }, []);


    const buttonClickFunction = async (e) => {
      e.preventDefault(); 
      handleSubmit();
    }




    return(

    <div>

      <Navbar />


      {selectedDIV}



        
    </div>

    )
};

export default Login;