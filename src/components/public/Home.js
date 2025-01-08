
import React, { useState } from "react";
import background from "../../images/background.jpg";
import Navbar from "../common/NavbarPublic";
import NavbarPublic from "../common/NavbarPublic";
import { FaSearch } from "react-icons/fa";
import { MultiSelect } from "react-multi-select-component";


function Home() {
  const [selectedpropertytype, setSelectedPropertyType] = useState([]);
  const [selectedstatetype, setSelectedStateType] = useState([]);
  const [selecteddistricttype, setSelectedDistrictType] = useState([]);
  const [selectedtowntype, setSelectedTownType] = useState([]);

  const propertytype_options = [
    { label: "Flat", value: "flat" },
    { label: "House", value: "house" },
    { label: "House Plot", value: "houseplot"},
    { label: "Villa", value: "villa" },
  ];
  const state_options = [
    { label: "Kerala", value: "kerala" },
    { label: "Tamilnadu", value: "tamilnadu" },
  ]
  const district_options = [
    { label: "Ernakulam", value: "ernakulam" },
    { label: "Thrissur", value: "thrissur" },
  ]
  const town_options = [
    { label: "Angamaly", value: "angamaly" },
    { label: "Kalady", value: "kalady" },
  ]

  return(
    <div>
      <NavbarPublic />
        <header class="page-header header container-fluid mx-auto p-3">
          <br/>
          <div className='container' id="searchpropclass" >
                {/* <div className='w-50 bg-white rounded p-3'> */}
            <form>
              <div className="row mx-auto p-3" id="searchpropclass">
                <div className="col-sm-4">  
                  <h5><b>Search Property By ID</b></h5>
                </div>
                <div className="col-sm-4"> 
                  <input type="text" placeholder="Search.." className="form-control"/>
                </div>
                <div className="col-sm-4"></div>
              </div>
              <br/>
              <div className="row" >
                <div className="col-3"> 
                  <label htmlFor=""><b>Property Type</b></label>
                </div>
                <div className="col-3">
                  <MultiSelect
                    options={propertytype_options }
                    value={selectedpropertytype}
                    onChange={setSelectedPropertyType}
                    labelledBy="Select"
                  /> 
                    {/* <select className="form-control">
                      <option>Villa</option>
                      <option>House</option>
                    </select>  */}
                </div>
                <div className="col-3">
                  <label htmlFor=""><b>Sale/rent</b></label>
                </div>
                <div className="col-3">
                  <select className="form-control">
                    <option>Sale</option>
                    <option>Rent</option>
                  </select> 
                </div>
              </div> 
              <br/>
              <div className="row" >
                <div className="col-3"> 
                  <label htmlFor=""><b>State</b></label>
                </div>
                <div className="col-3">
                  <MultiSelect
                    options={state_options }
                    value={selectedstatetype}
                    onChange={setSelectedStateType}
                    labelledBy="Select"
                  />
                    {/* <select className="form-control">
                      <option>Kerala</option>
                      <option>Tamilnadu</option>
                    </select>  */}
                </div>
                <div className="col-3">
                  <label htmlFor=""><b>Sort By</b></label>
                </div>
                <div className="col-3">
                  <select className="form-control">
                    <option>Latest</option>
                    <option>Price Low to High</option>
                    <option>Price High to Low</option>
                  </select> 
                </div>
              </div> 
              <br/>
              <div className="row">
                <div className="col-3"> 
                  <label htmlFor=""><b>District</b></label>
                </div>
                <div className="col-3">
                  <MultiSelect
                    options={district_options }
                    value={selecteddistricttype}
                    onChange={setSelectedDistrictType}
                    labelledBy="Select"
                  />
                    {/* <select className="form-control">
                      <option>Ernakulam</option>
                      <option>Thrissur</option>
                    </select>  */}
                </div>
                <div className="col-3">
                  <label htmlFor=""><b>Town</b></label>
                </div>
                <div className="col-3">
                  <MultiSelect
                    options={town_options }
                    value={selectedtowntype}
                    onChange={setSelectedTownType}
                    labelledBy="Select"
                  />
                    {/* <select className="form-control">
                      <option>Angamaly</option>
                      <option>Kalady</option>
                    </select>  */}
                </div>
              </div>  
              <br/>
              <div className="row" >
                <div className="col"> 
                  <label htmlFor=""><b>Property Price</b></label>
                </div>
                <div className="col">
                  <label htmlFor=""> <b>Price From</b></label>
                </div>
                <div className="col">
                  <select className="form-control">
                    <option>40 lakhs</option>
                    <option>20 lakhs</option>
                  </select> 
                </div>
                <div className="col">
                  <label htmlFor=""><b>Price To</b></label>
                </div>
                <div className="col">
                  <select className="form-control">
                    <option>1 crore</option>
                    <option>1 crore 10 lakhs</option>
                  </select> 
                </div>
              </div>
              <br/>
              <div className="row" >
                <div className="col-3"> 
                  <label htmlFor=""><b>New/Old</b></label>
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
          
              <div className="row mx-auto p-3 text-center" >
                <div className="col"> 
                </div>
                <div className="col"> 
                  <button className='btn' id="searchbuttoninhome" >Search properties</button>   
                </div>
                <div className="col"> 
                </div>
              </div> 
                      
            </form>
          </div>
        </header>



	          {/* <h1>Welcome to the Home</h1>
	          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum quam odio, quis placerat ante luctus eu. Sed aliquet dolor id sapien rutrum, id vulputate quam iaculis. Suspendisse consectetur mi id libero fringilla, in pharetra sem ullamcorper.</p>

            <button class="btn btn-outline-secondary btn-lg">Tell Me More!</button> */}

          {/* </div>
        </div> */}
     
      
      <div class="container features">
        <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12">
                <h3 class="feature-title">Lorem ipsum</h3>
                <img src={background} class="img-fluid" />
                <div class="container mx-auto p-3 text-center">
                  <div class="row row-cols-2">
                    <div class="col">Column1</div>
                    <div class="col">Column2</div>
                    <div class="col">Column3</div>
                    <div class="col">Column4</div>
                    <div class="col">Column5</div>
                    <div class="col">Column6</div>
                  </div>
              
                </div>
                <button className='btn' id="searchbuttoninhome">More Details</button>
            </div>
            
            <div class="col-lg-4 col-md-4 col-sm-12">
                <h3 class="feature-title">Lorem ipsum</h3>
                <img src={background} class="img-fluid" />
                <div class="container mx-auto p-3 text-center">
                  <div class="row row-cols-2">
                    <div class="col">Column1</div>
                    <div class="col">Column2</div>
                    <div class="col">Column3</div>
                    <div class="col">Column4</div>
                    <div class="col">Column5</div>
                    <div class="col">Column6</div>
                  </div>
              
                </div>
                <button className='btn' id="searchbuttoninhome">More Details</button>
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