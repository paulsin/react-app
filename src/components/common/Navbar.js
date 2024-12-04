
import React from "react";
import background from "../../images/background.jpg";
import axios from "axios";
import { Url } from "../../constants/global";
import { json, useNavigate, useParams } from "react-router-dom";

var newUrl = Url + 'accounts/logInFunction';
var logoutUrl = Url + 'accounts/logoutUser';

function Navbar(props) {

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

  return(

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
              <a class="nav-link" href="/frontend/signup">Sign Up</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/frontend/listusers">Users</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/frontend/listusersowntable">Users new</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/frontend/profile">Profile</a>
            </li>

            <li>
            <div class="dropdown">
              <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
                {props.loggedBy}
              </button>
              <ul class="dropdown-menu">
                <li><h5 class="dropdown-header">Dropdown header 1</h5></li>
                <li><a class="dropdown-item" href="#">Link 1</a></li>
                <li><a class="dropdown-item" href="#">Link 2</a></li>
                <li><a class="dropdown-item" href="#">Link 3</a></li>
                <li><h5 class="dropdown-header">Dropdown header 2</h5></li>
                <li><a class="dropdown-item" href="#" onClick={logOut}>Log out</a></li>
              </ul>
            </div>
            </li>
          </ul>
        </div>
      </nav>



    )
}

export default Navbar;