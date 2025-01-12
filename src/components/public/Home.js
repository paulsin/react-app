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
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { CgMail } from "react-icons/cg";

function Home() {
  const [selectedpropertytype, setSelectedPropertyType] = useState([]);
  const [selectedstatetype, setSelectedStateType] = useState([]);
  const [selecteddistricttype, setSelectedDistrictType] = useState([]);
  const [selectedtowntype, setSelectedTownType] = useState([]);
  const [selectedstateonchangevalue, setSelectedstateOnchangevalue] = useState([]);
  const [selecteddistrictonchangevalue, setSelecteddistrictOnchangevalue] = useState([]);

  const propertytype_options = [
    { label: "Flat", value: "flat" },
    { label: "House", value: "house" },
    { label: "House Plot", value: "houseplot"},
    { label: "Villa", value: "villa" },
  ];
  let state_options = []
  let district_options = []
  let town_options = []
  let district_values=[]
  let town_values=[]
  const StateType = (event) => {
    // alert(event)
    selecteddistricttype.map(key1=>{
      // alert(key1.value);
      // alert(key1.label)
      event.map(key=>{
        // alert(key.value)
        if(key1.stateID===key.value)
        {
          //alert("haiiii")
          district_values.push({ value: key1.value, label: key1.label });
        }
      })
    })
    // alert(district_values)
    setSelectedstateOnchangevalue(district_values);
  }

  const DistrictType = (event1) => {
    selectedtowntype.map(key2=>{
      // alert(key2.value);
      // alert(key2.label)
      event1.map(key3=>{
        //  alert(key3.value)
        if(key2.districtID===key3.value)
        {
          // alert("haiiii")
          town_values.push({ value: key2.value, label: key2.label });
        }
      })
    })
    // alert(district_values)
    setSelecteddistrictOnchangevalue(town_values);
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
         // setSelectedstateOnchangevalue(district_values) // alert(state_options)
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
        district_options.push({ value: data2._id, label: data2.districtName, stateID: data2.stateID});
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
        town_options.push({ value: data3._id, label: data3.townName, districtID: data3.districtID });
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
                 
                    <Select  id="selectboxcolor" isMulti={true} options={selectedstatetype}  onChange={StateType}> 
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

                  <Select  id="selectboxcolor" isMulti={true} options={selectedstateonchangevalue} onChange={DistrictType} > 
                  </Select>  
                  {/* <MultiSelect
                    options={selectedstateonchangevalue}
                    
                    // value={selecteddistricttype}
                    onChange={setSelectedDistrictType}
                    labelledBy="Select"
                  /> */}
                    {/* <select className="form-control">
                      <option>Ernakulam</option>
                      <option>Thrissur</option>
                    </select>  */}
                </div>
                <div className="col-md-3">
                  <label htmlFor=""><b>Town</b></label>
                </div>
                <div className="col-md-3">
                <Select  id="selectboxcolor" isMulti={true} options={selecteddistrictonchangevalue} onChange={DistrictType} > 
                </Select>
                  {/* <MultiSelect
                    options={selecteddistrictonchangevalue}
                    // value={selectedtowntype}
                    onChange={setSelectedTownType}
                    labelledBy="Select"
                  /> */}
    
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

      
        <div class="container features" >
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-12 mx-auto p-4">
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
              
              <div class="col-lg-4 col-md-4 col-sm-12 mx-auto p-4">
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
              <div class="col-lg-4 col-md-4 col-sm-12 mx-auto p-4">
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
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-12 mx-auto p-4">
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
              <div class="col-lg-4 col-md-4 col-sm-12 mx-auto p-4">
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
              <div class="col-lg-4 col-md-4 col-sm-12 mx-auto p-4">
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
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-12 mx-auto p-4">
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
              <div class="col-lg-4 col-md-4 col-sm-12 mx-auto p-4">
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
              <div class="col-lg-4 col-md-4 col-sm-12 mx-auto p-4">
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
            </div>
        </div>
    
        <div class="footer">  
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-3 col-sm-12 mx-auto p-3">
                <h4>VirtuneRealtors</h4> <br/>
                <p>A realestate company with more than 10 years of experience and satisfied customers from all over the world, which will help you to find your dream home in an easy way</p>
              </div> 
              <div class="col-lg-3 col-md-3 col-sm-12 mx-auto p-3">
                  <h4>Mapsite</h4><br/>
                  <a id="linktagsinfooter" href="">Home</a><br/>
                  <a id="linktagsinfooter" href="">About us</a><br/>
                  <a id="linktagsinfooter" href="">Ernakulam</a><br/>
                  <a id="linktagsinfooter" href="">Thrissur</a><br/>
                  <a id="linktagsinfooter" href="">Advertise</a><br/>
                  <a id="linktagsinfooter" href="">Become Our Franchisee</a><br/>
                  <a id="linktagsinfooter" href="">Contact us</a>
              </div> 
              <div class="col-lg-3 col-md-3 col-sm-12 mx-auto p-3">
                  <h4>Contact</h4><br/>
                  <a id="linktagsinfooter" href=""><FaPhoneAlt />&nbsp;&nbsp;&nbsp;+91 - 9497 811 259</a><br/>
                  <a id="linktagsinfooter" href=""><FaPhoneAlt />&nbsp;&nbsp;&nbsp;+91 - 9048 224 630</a><br/>
                  <a id="linktagsinfooter" href=""><IoLogoWhatsapp />&nbsp;&nbsp;&nbsp;+91 - 8289 844 344</a><br/>
                  <a id="linktagsinfooter" href=""><CgMail />&nbsp;&nbsp;&nbsp;virtunerealtors@gmail.com</a><br/>
                  <a id="linktagsinfooter" href=""><IoLocation />&nbsp;&nbsp;&nbsp;Kochi, Kerala, India</a><br/> 
              </div> 
              <div class="col-lg-3 col-md-3 col-sm-12 mx-auto p-3">
                <h4 class="feature-touch">Subscribe</h4>
                <br/>
                <h6>Get our newsletter</h6>
                <div class="form-group">
                  <input type="email" class="form-control" placeholder="Enter Email Address" name="email" />
                </div>
                <input type="submit" class="btn btn-secondary btn-block" value="Submit" name=""></input>
              </div>
            </div>
          </div>
          <div className="row mx-auto p-3 text-center" >
            <div className="col-md"> 
            </div>
            <div className="col-md"> 
              <h6 id="copyrightid">© Copyright 2025 VirtuneRealtors - All rights reserved.</h6>   
            </div>
            <div className="col-md"> 
            </div>
          </div> 
        </div>
      </div>

    )
}

export default Home;
