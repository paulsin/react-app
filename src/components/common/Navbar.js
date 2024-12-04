
import React, { useState } from "react";
import background from "../../images/background.jpg";
import axios from "axios";
import { Url } from "../../constants/global";
import { json, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

var newUrl = Url + 'accounts/logInFunction';
var logoutUrl = Url + 'accounts/logoutUser';
var loggedCheckUrl = Url + 'accounts/loggedInUser';

function Navbar(props) {
  const [loggedUserMenu, setLoggedUserMenu] = useState();
  ///   For navigate function
  const navigate = useNavigate();

  function logOut() {
    //alert("Paulsin");


      const response = axios.get(logoutUrl,   
        { withCredentials: true }
      )
      .then(function (response) {
        //console.log(response);
        //alert(response.data);
        if(response.data == "session_destroyed") {
          navigate('/frontend/login');
        }
      })
      .catch(function (error) {
        console.log(error);
      }); 
  }


  const fetchLoggedData = (e) => {

    //Functions();

    const response = axios.get(loggedCheckUrl,   
      { withCredentials: true }
    )
    .then(function (response) {
      //console.log(response);
      //alert(response.data);
      if(response.data.username && response.data.password) {
        //alert("Logged In");
        //navigate('/frontend/profile');
        //setSelectedDIV(loginDIV);
        setLoggedUserMenu(response.data.username);
      }
      else {
        //setSelectedDIV(<LoginDIV />);
        setLoggedUserMenu("");
      }
      //setUsername(response.data.username);
    })
    .catch(function (error) {
      console.log(error);
    }); 

  }

  useEffect(() => {
    //console.log('i fire once');
    //fetchData();
    fetchLoggedData();
  }, []);

  return(

    <>
      <nav class="navbar navbar-expand-md">
        <a class="navbar-brand" href="#">Logo</a>
        <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#main-navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="main-navigation">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/test">Test</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/frontend/login">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/frontend/signupCheck">Sign Up</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/frontend/listusersowntable">Users</a>
            </li>

            {
              loggedUserMenu ? 
              <li>
                <div class="dropdown">
                  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
                    {loggedUserMenu}
                  </button>
                  <ul class="dropdown-menu">
                    <li><h5 class="dropdown-header">Dropdown header 1</h5></li>
                    <li><a class="dropdown-item" href="/frontend/profile">Profile</a></li>
                    <li><a class="dropdown-item" href="#">Link 2</a></li>
                    <li><a class="dropdown-item" href="#">Link 3</a></li>
                    <li><h5 class="dropdown-header">Dropdown header 2</h5></li>
                    <li><a class="dropdown-item" href="#" onClick={logOut}>Log out</a></li>
                  </ul>
                </div>
              </li> : ""
            }

            
          </ul>
        </div>
      </nav>

    </>

    )
}

export default Navbar;