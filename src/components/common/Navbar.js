
import React from "react";
import background from "../../images/background.jpg";

function Navbar(props) {
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
      <li><a class="dropdown-item" href="#">Another link</a></li>
    </ul>
  </div>
            </li>
          </ul>
        </div>
      </nav>



    )
}

export default Navbar;