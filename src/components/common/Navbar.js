
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
              <a class="nav-link" href="/test">Test1</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/test2">Test2</a>
            </li>
          </ul>
        </div>
      </nav>



    )
}

export default Navbar;