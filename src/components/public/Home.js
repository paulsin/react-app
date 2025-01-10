import React, { useState, useEffect } from "react";
import background from "../../images/background.jpg";
import Navbar from "../common/NavbarPublic";
import NavbarPublic from "../common/NavbarPublic";
import { FaSearch } from "react-icons/fa";
import { MultiSelect } from "react-multi-select-component";
// import Multiselect from 'multiselect-react-dropdown';
import axios from "axios";
import { Url } from "../../constants/global";
import Select from 'react-select';


function Home() {
  const [selectedpropertytype, setSelectedPropertyType] = useState([]);
  const [selectedstatetype, setSelectedStateType] = useState([]);
  const [selecteddistricttype, setSelectedDistrictType] = useState([]);
  const [selectedtowntype, setSelectedTownType] = useState([]);
  const [selectedstateonchangevalue, setSelectedstateOnchangevalue] = useState();

  const propertytype_options = [
    { label: "Flat", value: "flat" },
    { label: "House", value: "house" },
    { label: "House Plot", value: "houseplot"},
    { label: "Villa", value: "villa" },
  ];
  let state_options = []
  let district_options = []
  let town_options = []

  const StateType = (event) => {
   
    // var optionss = event.target.options;
    alert(event)
    let statevalues=[]
    // alert(event._id)
  
    statevalues.push(event)
    // alert(statevalues)
    setSelectedstateOnchangevalue(event)
    statevalues.map(state=>{
       alert(state._id)
    })


  }


  function getStates() {
    // alert("anu");
    axios
      .get(Url+"location/states",
    )
    .then((res) => {
      // alert("haiii")
      res.data.map(data1 => {
          // alert(data1.stateName);
          // alert(data1._id)    
          state_options.push({ value: data1._id, label: data1.stateName });
      });
      // alert(state_options)
      setSelectedStateType(state_options);
    })
  }
  function getDistricts() {
    //alert("anu");
    axios
      .get("http://localhost:3000/backend/location/districts",
    )
    .then((res1) => {
      res1.data.map(data2 => {
          // alert(data.stateID);
        district_options.push({ value: data2._id, label: data2.districtName });
      });
      setSelectedDistrictType(district_options);
    })
  }
  function getTowns() {
    //alert("anu");
    axios
      .get("http://localhost:3000/backend/location/towns",
    )
    .then((res2) => {
      res2.data.map(data3 => {
        town_options.push({ value: data3._id, label: data3.townName });
      });
      setSelectedTownType(town_options);
    })
  }
  useEffect(() => {
    getStates();
    getDistricts();
    getTowns()   
  }, []);
  
  return(
    <div>
      <NavbarPublic />
        <header class="page-header header container-fluid-full mx-auto p-3">
        
          <div className='container .d-block' id="searchpropclass" >
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
                <div className="col-md-3"> 
                  <label htmlFor=""><b>Property Type</b></label>
                </div>
                <div className="col-md-3">
                  <MultiSelect
                    options={propertytype_options}
                    value={ selectedpropertytype}
                    onChange={setSelectedPropertyType}
                    labelledBy="Select"
                  /> 
                    {/* <select className="form-control">
                      <option>Villa</option>
                      <option>House</option>
                    </select>  */}
                </div>
                <div className="col-md-3">
                  <label htmlFor=""><b>Sale/rent</b></label>
                </div>
                <div className="col-md-3">
                  <select className="form-control">
                    <option>Sale</option>
                    <option>Rent</option>
                  </select> 
                </div>
              </div> 
              <br/>
              <div className="row" >
                <div className="col-md-3"> 
                  <label htmlFor=""><b>State</b></label>
                </div>
                <div className="col-md-3 app-select">
                  {/* <MultiSelect
                    options={selectedstatetype}
                    // value={selectedstatetype}
                    onChange={StateType}
                    labelledBy="Select"
                  /> */}
                 
                    <Select  id="selectboxcolor" isMulti={true} options={selectedstatetype}  value={selectedstateonchangevalue} onChange={StateType}> 
                    </Select>   
                    
                </div>
                <div className="col-md-3">
                  <label htmlFor=""><b>Sort By</b></label>
                </div>
                <div className="col-md-3">
                  <select className="form-control">
                    <option>Latest</option>
                    <option>Price Low to High</option>
                    <option>Price High to Low</option>
                  </select> 
                </div>
              </div> 
              <br/>
              <div className="row">
                <div className="col-md-3"> 
                  <label htmlFor=""><b>District</b></label>
                </div>
                <div className="col-md-3">
                  <MultiSelect
                    options={selecteddistricttype}
                    // value={selecteddistricttype}
                    onChange={setSelectedDistrictType}
                    labelledBy="Select"
                  />
                    {/* <select className="form-control">
                      <option>Ernakulam</option>
                      <option>Thrissur</option>
                    </select>  */}
                </div>
                <div className="col-md-3">
                  <label htmlFor=""><b>Town</b></label>
                </div>
                <div className="col-md-3">
                  <MultiSelect
                    options={selectedtowntype}
                    // value={selectedtowntype}
                    onChange={setSelectedTownType}
                    labelledBy="Select"
                  />
    
                    {/* <select className="form-control" data-mdb-select-init multiple>
                      <option>Angamaly</option>
                      <option>Kalady</option>
                    </select>  */}
                </div>
              </div>  
              <br/>
              <div className="row" >
                <div className="col-md"> 
                  <label htmlFor=""><b>Property Price</b></label>
                </div>
                <div className="col-md">
                  <label htmlFor=""> <b>Price From</b></label>
                </div>
                <div className="col-md">
                  <select className="form-control">
                    <option>40 lakhs</option>
                    <option>20 lakhs</option>
                  </select> 
                </div>
                <div className="col-md">
                  <label htmlFor=""><b>Price To</b></label>
                </div>
                <div className="col-md">
                  <select className="form-control">
                    <option>1 crore</option>
                    <option>1 crore 10 lakhs</option>
                  </select> 
                </div>
              </div>
              <br/>
              <div className="row" >
                <div className="col-md-3"> 
                  <label htmlFor=""><b>New/Old</b></label>
                </div>
                <div className="col-md-3">
                  <select className="form-control">
                    <option>New</option>
                    <option>Old</option>
                  </select> 
                </div>
                <div className="col-md-3">    
                </div>
                <div className="col-md-3">      
                </div>
              </div> 
              <br/>
          
              <div className="row mx-auto p-3 text-center" >
                <div className="col-md"> 
                </div>
                <div className="col-md"> 
                  <button className='btn' id="searchbuttoninhome" >Search properties</button>   
                </div>
                <div className="col-md"> 
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
     
      
      <div class="container features" >
        <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12">
                <h3 class="feature-title">Lorem ipsum</h3>
                <img src={background} class="img-fluid" />
                <div class="container mx-auto p-3 text-center" id="properties_container">
                  <div class="row row-cols-2" >
                    <div class="col" id="properties1">Column1</div>
                    <div class="col" id="properties2">Column2</div>
                    <div class="col" id="properties2">Column3</div>
                    <div class="col" id="properties1">Column4</div>
                    <div class="col" id="properties1">Column5</div>
                    <div class="col" id="properties2">Column6</div>
                  </div>
              
                </div>
                <button className='btn' id="searchbuttoninhome">More Details</button>
            </div>
            
            <div class="col-lg-4 col-md-4 col-sm-12">
                <h3 class="feature-title">Lorem ipsum</h3>
                <img src={background} class="img-fluid" />
                <div class="container mx-auto p-3 text-center" id="properties_container">
                  <div class="row row-cols-2" >
                    <div class="col" id="properties1">Column1</div>
                    <div class="col" id="properties2">Column2</div>
                    <div class="col" id="properties2">Column3</div>
                    <div class="col" id="properties1">Column4</div>
                    <div class="col" id="properties1">Column5</div>
                    <div class="col" id="properties2">Column6</div>
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