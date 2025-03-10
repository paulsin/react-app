
import React from "react";
import background from "../../images/background.jpg";
import Navbar from "../common/Navbar";

function Test2() {
    return(

 <div>

      <Navbar />

      <header class="page-header header container-fluid">
        <div class="overlay">
          <div class="description">
	          <h1>Welcome to the Test 2</h1>
	          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum quam odio, quis placerat ante luctus eu. Sed aliquet dolor id sapien rutrum, id vulputate quam iaculis. Suspendisse consectetur mi id libero fringilla, in pharetra sem ullamcorper.</p>

            <button class="btn btn-outline-secondary btn-lg">Tell Me More!</button>

          </div>
        </div>
      </header>
      
      <div class="container features">
        <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12">
                <h3 class="feature-title">Lorem ipsum</h3>
                <img src={background} class="img-fluid" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum quam odio, quis placerat ante luctus eu. Sed aliquet dolor id sapien rutrum, id vulputate quam iaculis.</p>
            </div>
            
            <div class="col-lg-4 col-md-4 col-sm-12">
                <h3 class="feature-title">Lorem ipsum</h3>
                <img src={background} class="img-fluid" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum quam odio, quis placerat ante luctus eu. Sed aliquet dolor id sapien rutrum, id vulputate quam iaculis.</p>
            </div>
            
            <div class="col-lg-4 col-md-4 col-sm-12">
              <h3 class="feature-title">Get in Touch!</h3>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Name" name="" />
              </div>
              <div class="form-group">
                  <input type="email" class="form-control" placeholder="Email Address" name="email" />
              </div>
              <div class="form-group">
                  <textarea class="form-control" rows="4"></textarea>
              </div>
              <input type="submit" class="btn btn-secondary btn-block" value="Send" name=""></input>
            </div>
        </div>
    </div>


    </div>

    )
}

export default Test2;