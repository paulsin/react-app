
import React from "react";
import background from "../../images/background.jpg";
import Navbar from "../common/Navbar";
import { Url } from "../../constants/global";
import axios from "axios";
import { useState, useEffect } from "react";
import { json, useNavigate, useParams } from "react-router-dom";

var newUrl = Url + 'accounts/person';


const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [alertClass, setAlertClass] = useState("alert alert-secondary");
    const [alertContent, setAlertContent] = useState("Enter the following details for registration");
    const [userRole, setUserRole] = useState("");

    ///   For navigate function
    const navigate = useNavigate();

    const {newID} = useParams();

    //alert(newID);

    const handleSubmit = async (e) => {
      //alert("Paulsin");
      
      e.preventDefault(); 

      console.log("Clicked");

      if(name == "") {
        setAlertContent("Enter the name");
        setAlertClass("alert alert-danger");
      }
      else if(mobile == "") {
        setAlertContent("Enter the mobile number");
        setAlertClass("alert alert-danger");
      }
      else if(email == "") {
        setAlertContent("Enter the email ID");
        setAlertClass("alert alert-danger");
      }
      else if(password == "") {
        setAlertContent("Enter the password");
        setAlertClass("alert alert-danger");
      }
      else if(confirmPassword == "") {
        setAlertContent("Retype password");
        setAlertClass("alert alert-danger");
      }
      else if(userRole == "") {
        setAlertContent("Select user role");
        setAlertClass("alert alert-danger");
      }
      else {
        setAlertContent("Registration in progress");
        setAlertClass("alert alert-warning");
      
        //alert(userRole);

        try {
          const response = await axios.post(
            newUrl,
            {
              "name": name,    
              "email": email, 
              "mobile" : mobile, 
              "password": password,
              "userRole": userRole,
            }
          );
          //console.log(response.data);
          //alert(response.data);
          if(response.data == "OK") {
            setAlertContent("Registration completed");
            setAlertClass("alert alert-success");
            //alert("Paulsin");
          }
        } catch(error) {
          console.error("Error posting data:", error);
        }

      }
    };

    const fetchDataByID = async () => {
      try {
        const response = await axios.get(newUrl);
        //setData(response.data);
        //setOriginalData(response.data);
        //alert(response.data[10].email  );
      } catch (error) {
        if (!error.response) {
          // Network error occurred
          console.error('Network error:', error);
        } else {
          // The server responded with a status other than 200 range
          console.error('Error response:', error.response);
        }
      }
    };

    var userRoleWidget =           
      <select value={userRole} class="form-control"  aria-label="Default select example" onChange={(e) => setUserRole(e.target.value)}>
        <option value="">Select</option>
        <option value="developer">Developer</option>
        <option value="admin">Admin</option>
        <option value="owner">Owner</option>

      </select>


    useEffect(() => {
      //console.log('i fire once');
      //fetchData();
      if(newID) {
        alert(newID);
        fetchDataByID();
      }
    }, []);



    return(

    <div>

      <Navbar />


        <div class="container mt-3">
          <h2>Registration form</h2>
          
            <div class={alertClass} role="alert">
              {alertContent}
            </div>

            <div class="mb-3 mt-3">
              <label for="name">Name:</label>
              <input type="name" class="form-control" id="name" placeholder="Enter name" name="name" required onChange={(e) => setName(e.target.value)}/>
            </div>

            <div class="mb-3 mt-3">
              <label for="mobile">Mobile:</label>
              <input type="number" pattern="[0-9]*" class="form-control" id="mobile" placeholder="Enter mobile number" name="mobile" required onChange={(e) => setMobile(e.target.value)}/>
            </div>

            <div class="mb-3 mt-3"> 
              <label for="email">Email:</label>
              <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" required onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div class="mb-3 mt-3">
              <label for="password">Password:</label>
              <input type="password" class="form-control" id="password" placeholder="Enter password" name="password" required onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <div class="mb-3 mt-3">
              <label for="confirmPassword">Confirm password:</label>
              <input type="password" class="form-control" id="confirmPassword" placeholder="Repeat password" name="confirmPassword" required onChange={(e) => setConfirmPassword(e.target.value)}/>
            </div>

            <div class="mb-3 mt-3"> 
              <label class="form-check-label">Select user role</label>
              {userRoleWidget}
            </div>

            <div class="form-check mb-3">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox" name="remember" /> Remember me
              </label>
            </div>

            <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
          
        </div>


    </div>

    )
};

export default SignUp;