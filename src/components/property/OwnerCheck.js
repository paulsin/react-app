
import React from "react";
import background from "../../images/background.jpg";
import Navbar from "../common/Navbar";
import { Url } from "../../constants/global";
import axios from "axios";
import { useState, useEffect } from "react";
import { json, useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import Loading from "../common/Loading";
//import Functions from "../common/Functions";
import { fetchLoggedDataCommon } from "../common/Functions";
import AddProperty from "./AddProperty";
import Owners from "./Owners";


var newUrl = Url + 'accounts/logInFunction';
var loggedCheckUrl = Url + 'accounts/loggedInUser';

const OwnerCheck = () => {

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

    //const functionObj = Functions();

    //alert(newID);


    const fetchLoggedData = (e) => {

      //Functions();

      //alert(loggedCheckUrl);

      const response = axios.get(loggedCheckUrl,   
        { withCredentials: true }
      )
      .then(function (response) {
        //console.log(response);
        //alert(response.data);
        if(response.data.username && response.data.password) {
          //alert("Logged In");
          //navigate('/frontend/profile');
          setSelectedDIV(<Owners />);
        }
        else {
          navigate('/frontend/login');
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
      //alert(fetchLoggedDataCommon());
      //awaitFetchLoggedData();
      //const response = Functions();
      //alert(response);
    }, []);




    return(

    <div>

      {selectedDIV}

    </div>

    )
};

export default OwnerCheck;