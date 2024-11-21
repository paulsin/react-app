
import React from "react";
import background from "../../images/background.jpg";

function Navbar() {
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
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/signup">Sign Up</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/listusers">Users</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/listusersowntable">Users new</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/backend/hello">Backend</a>
            </li>
          </ul>
        </div>
      </nav>



    )
}

export default Navbar;