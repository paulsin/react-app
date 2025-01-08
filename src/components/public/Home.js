
import React from "react";
import background from "../../images/background.jpg";
import Navbar from "../common/NavbarPublic";
import NavbarPublic from "../common/NavbarPublic";
import { FaSearch } from "react-icons/fa";

function Home() {
    return(

 <div>

      <NavbarPublic />
<br/>
      <header class="page-header header container-fluid">
        <br/>
        {/* <div class="overlay">
          <div class="description"> */}



            <div className='container text-center' id="searchpropclass" >
              {/* <div className='w-50 bg-white rounded p-3'> */}
                <form>
                  <div className="row" id="searchpropclass">
                    <div className="col-sm-4">  <h5>Search Property By ID</h5></div>
                    <div className="col-sm-4"> <input type="text" placeholder="Search.." className="form-control"/></div>
                    <div className="col-sm-4"></div>
                  </div>
                  <br/>

                  <div className="row" >
                    <div className="col-3"> 
                      <label htmlFor="">Property Type</label>
                    </div>
                    <div className="col-3">
                      <select className="form-control">
                        <option>Villa</option>
                        <option>House</option>
                      </select> 
                    </div>
                    <div className="col-3">
                      <label htmlFor="">Sale/rent</label>
                    </div>
                    <div className="col-3">
                      <select className="form-control">
                        <option>Sale</option>
                        <option>Rent</option></select> 
                    </div>
                  </div> 
            
                  <br/>
                   <div className="row" >
                    <div className="col-3"> 
                      <label htmlFor="">State</label>
                    </div>
                    <div className="col-3">
                      <select className="form-control">
                        <option>Kerala</option>
                        <option>Tamilnadu</option>
                      </select> 
                    </div>
                    <div className="col-3">
                      <label htmlFor="">Sort By</label>
                    </div>
                    <div className="col-3">
                      <select className="form-control">
                      <option>Latest</option>
                        <option>Price Low to High</option>
                        <option>Price High to Low</option></select> 
                    </div>
                  </div> 
                  <br/>
                  <div className="row">
                    <div className="col-3"> 
                      <label htmlFor="">District</label>
                    </div>
                    <div className="col-3">
                      <select className="form-control">
                        <option>Ernakulam</option>
                        <option>Thrissur</option>
                      </select> 
                    </div>
                    <div className="col-3">
                      <label htmlFor="">Town</label>
                    </div>
                    <div className="col-3">
                      <select className="form-control">
                        <option>Angamaly</option>
                        <option>Kalady</option>
                      </select> 
                    </div>
                  </div>  
                  <br/>
                  <div className="row" >
                    <div className="col-3"> 
                      <label htmlFor="">Property Price</label>
                    </div>
                    <div className="col-2">
                    <label htmlFor=""> Price From</label>
                    </div>
                    <div className="col-2">
                    <select className="form-control">
                        <option>40 lakhs</option>
                        <option>20 lakhs</option>
                      </select> 
                    </div>
                    <div className="col-2">
                    <label htmlFor="">Price To</label>
                    </div>
                    <div className="col-2">
                    <select className="form-control">
                        <option>1 crore</option>
                        <option>1 crore 10 lakhs</option>
                      </select> 
                      </div>
                  </div>
                  <br/>
                  <div className="row" >
                    <div className="col-3"> 
                      <label htmlFor="">New/Old</label>
                    </div>
                    <div className="col-3">
                      <select className="form-control">
                        <option>New</option>
                        <option>Old</option>
                      </select> 
                    </div>
                    <div className="col-3">
                    
                    </div>
                    <div className="col-3">
                      
                    </div>
                  </div> 
               
                  <br/>
                  <div className="row" >
                    <div className="col-4"> 
                    </div>
                    <div className="col-4"> 
                      <button className='btn btn-success' >Search properties</button>   
                    </div>
                    <div className="col-4"> 
                    </div>
                  </div>
                    
                </form>
              {/* </div> */}
            </div>

     



	          {/* <h1>Welcome to the Home</h1>
	          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum quam odio, quis placerat ante luctus eu. Sed aliquet dolor id sapien rutrum, id vulputate quam iaculis. Suspendisse consectetur mi id libero fringilla, in pharetra sem ullamcorper.</p>

            <button class="btn btn-outline-secondary btn-lg">Tell Me More!</button> */}

          {/* </div>
        </div> */}
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

export default Home;