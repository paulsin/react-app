import React, { useState, useEffect } from "react";
import background from "../../images/background.jpg";
import Navbar from "../common/NavbarPublic";
import Footer from "../common/Footer"
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
import Pagination from "./Pagination";

function Home() {
  const [selectedpropertytype, setSelectedPropertyType] = useState([]);
  const [selectedstatetype, setSelectedStateType] = useState([]);
  const [selecteddistricttype, setSelectedDistrictType] = useState([]);
  const [selectedtowntype, setSelectedTownType] = useState([]);
  const [selectedstateonchangevalue, setSelectedstateOnchangevalue] = useState([]);
  const [selecteddistrictonchangevalue, setSelecteddistrictOnchangevalue] = useState([]);
  const [selectedStatesDisplayed, setSelectedStatesDisplayed] = useState([]);
  const [selectedDistrictsDisplayed, setSelectedDistrictsDisplayed] = useState([]);
  const [selectedTownsDisplayed, setSelectedTownsDisplayed] = useState([]);
  const [saleorrent, setSaleorrent] = useState("");
  const [pricerange, setPricerange] = useState("");
  const [newold, setNewold] = useState("");
  const [pricefrom, setPricefrom] = useState("");
  const [priceto, setPriceto] = useState("");
  let currentpageno=1;
  let recordperpageno=9;
  const [currentPage, setCurrentPage] = useState(currentpageno);
  const [recordsPerPage,setRecordsperpage]=useState(recordperpageno)

  const[propertydetails,setPropertydetails]=useState([])
  const [propertyWidget, setPropertyWidget] = useState("");

  // const[propertypages,setPropertypages]=useState("")
  // https://youtu.be/wAGIOCqS8tk?si=f-i1ayZt50pg0u04

  //alert(currentPage);

  const lastpostIndex=currentPage*recordsPerPage; 
  //const lastpostIndex=currentPage * recordsPerPage > propertydetails.length ? propertydetails.length + 1 : currentPage * recordsPerPage; 
  const firstpostIndex=lastpostIndex-recordsPerPage;
  //alert(firstpostIndex);
  //alert(lastpostIndex);
  const currentposts=propertydetails.slice(firstpostIndex,lastpostIndex);
  // const npage=Math.ceil(propertydetails.length/recordsPerPage);
  // const numbers=[...Array(npage+1).keys()].slice(1);

  const propertytype_options = [
    { label: "Flat", value: "flat" },
    { label: "House", value: "house" },
    { label: "House Plot", value: "houseplot"},
    { label: "Villa", value: "villa" },
  ];
//   let array1 = [
//     { label: "John", value: 0 },
//     { label: "Indiana", value: 1 },
//     { label: "Stark", value: 2 },
// ];
  let state_options = []
  let state_selected=[]
  let district_options = []
  let town_options = []
  let district_values=[]
  let town_values=[]
  let selecteddistrict=[]
  let townarray=[]
  let districttemp=[]
  let temparray=[1,2,3]
  let temparray1=[1,2,3]
  let temparray2=[]
  let rowlength
    // const totalPages = Math.ceil(data.length / itemsPerPage);
  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const currentItems = data.slice(startIndex, endIndex);
//   let proplength=propertydetails.length
//   //alert(proplength)
//   rowlength=proplength/3
// //alert(rowlength)

//   if(proplength%3!=0){
//     rowlength=Math.floor(rowlength+1)
//   }
//   else if(proplength%3==0){
//     rowlength=rowlength
//   }

//alert(rowlength)
  
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
          district_values.push({ value: key1.value, label: key1.label, stateID: key1.stateID });
        }
      })
    })
    setSelectedstateOnchangevalue(district_values);


    event.map(key=> {
      // alert(key.stateID)
      state_selected.push({value:key.value,label: key.label,stateID:key.stateID });
    });
    setSelectedStatesDisplayed(state_selected);


    district_values.map(districtkey=>{
      // alert(districtkey.label)
      selectedDistrictsDisplayed.map(selecteddiskey=>{
        // alert(selecteddiskey.label)
        if(districtkey.value===selecteddiskey.value){
           //alert("ghngnj")
           districttemp.push({ value: selecteddiskey.value, label: selecteddiskey.label, stateID : selecteddiskey.stateID});
        }
      })
    })
    //  alert(districttemp)
    setSelectedDistrictsDisplayed(districttemp);

    //alert(districttemp.length);
    //alert(selectedTownsDisplayed.length);

    districttemp.map(keys=>{
     //alert(keys.stateID)
      selectedTownsDisplayed.map(key4=>{
        if(keys.value === key4.districtID)
        {
          // alert("haiii")
          townarray.push({value:key4.value,label:key4.label, districtID : keys.value, stateID : keys.stateID})
        }

      })
    })

    setSelectedTownsDisplayed(townarray);
  }

  const DistrictType = (event1) => {
    //alert(event1[0].value);
    let selecteddistrictTemp = [];
    let towntemp=[];
  
    selectedtowntype.map(key2=>{
      // alert(key2.value);
      // alert(key2.label)
      event1.map(key3=>{
        // alert(key3.value)
        if(key2.districtID===key3.value)
        {
          // alert("haiiii")
          town_values.push({ value: key2.value, label: key2.label,stateID:key2.stateID, districtID: key2.districtID });
          //selecteddistrictTemp.push({value:key3.value,label: key3.label });
        }
      })
    });

    event1.map(key=> {
      // alert(key.stateID)
      selecteddistrictTemp.push({value:key.value,label: key.label,stateID:key.stateID });
    });

    // alert(district_values)
    setSelectedDistrictsDisplayed(selecteddistrictTemp);
    setSelecteddistrictOnchangevalue(town_values);


    town_values.map(townkey=>{
      // alert(townkey.label)
      selectedTownsDisplayed.map(selectedtownkey=>{
       //alert(selectedtownkey.label)
        if(townkey.value===selectedtownkey.value){
          //  alert("ghngnj")
           towntemp.push({ value: selectedtownkey.value, label: selectedtownkey.label , districtID : selectedtownkey.districtID, stateID : selectedtownkey.stateID });
        }
       })
    })
    //  alert(districttemp)
    setSelectedTownsDisplayed(towntemp);
  }


  
  const TownType = (event1) => {
    let selectedtowntemp=[];

    event1.map(key=> {
      //alert(key.districtID);
      selectedtowntemp.push({value:key.value,label: key.label, districtID : key.districtID ,stateID:key.stateID});
    });

    // alert(district_values)
    setSelectedTownsDisplayed(selectedtowntemp);
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
      .get(Url+"location/districts",
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
      .get(Url+"location/towns",
    )
    .then((res2) => {
     
      res2.data.map(data3 => {
        // alert(data3.stateID)
        town_options.push({ value: data3._id, label: data3.townName, districtID: data3.districtID,stateID: data3.stateID });
      });
      setSelectedTownType(town_options);
    })
  }
  function createdata(data,data1){
    let index=0
    let temparrayfornames=[]
      data.map(row => {
        data1.map(proptemp=>{
          if(proptemp['_id']===row.townID){
            temparrayfornames.push({
              'index':index++,

              'propertyType':row.propertyType,
              'transactiontype':row.transactionType,
              'town':proptemp['townName']
            })
          }
          })
      })
      setPropertydetails(temparrayfornames)
  }
  
  function getProperties() {
    axios
    .get(Url+"property/properties",
    )
    .then((res) => {
      axios
      .get(Url+"location/towns",
      )
      .then((res1) => { 
        createdata(res.data,res1.data)
      })

    })

  }



  useEffect(() => {
    getStates();
    getDistricts();
    getTowns(); 
    getProperties();  
  }, []);
  
// function prePage(){
//  if(currentPage!==firstpostIndex){
//   setCurrentPage(currentPage-1)
//  }
// }
// function changePage(id){
//   setCurrentPage(id)
// }
// function nextPage(){
//   if(currentPage!==lastpostIndex){
//     setCurrentPage(currentPage+1)
//    }
// }

  const searchfunction = (e) => {
    e.preventDefault();
    // alert(saleorrent)
    // alert(pricerange)
    // alert(pricefrom)
    // alert(priceto)
    // alert(newold)
    // alert(selectedStatesDisplayed)
    // alert(selectedpropertytype)
    // alert(selectedDistrictsDisplayed)
    //  alert(selectedTownsDisplayed)
   
  }
  return(
      <div>
        <NavbarPublic />
        <header class="page-header header container-fluid-full mx-auto p-3">
          <div className='container' id="searchpropclass" >
                {/* <div className='w-50 bg-white rounded p-3'> */}
            <form>
              <div className="row mx-auto p-3" id="searchpropclass">
                <div className="col-sm-4">  
                  <h5><b>Search Property By ID</b></h5>
                </div>
                <div className="col-sm-4"> 
                  <input type="text" placeholder="Search.." className="form-control" id="selectboxcolor"/>
                </div>
                <div className="col-sm-4"></div>
              </div>

              <br/>
              <div className="row" >
                <div className="col-md-3"> 
                  <label htmlFor=""><b>Property Type</b></label>
                </div>
                <div className="col-md-3">
                  {/* <MultiSelect
                    options={propertytype_options}
                    value={ selectedpropertytype}
                    onChange={setSelectedPropertyType}
                    labelledBy="Select"
                  />  */}
                    <Select  id="selectboxcolor" isMulti={true} options={propertytype_options} onChange={setSelectedPropertyType}  value={selectedpropertytype}> 
                    </Select>
                </div>
                <div className="col-md-3">
                  <label htmlFor=""><b>Sale/rent</b></label>
                </div>
                <div className="col-md-3">
                  <select className="form-control" onChange={(e) => setSaleorrent(e.target.value)} id="selectboxcolor">
                    <option value="">Select</option>
                    <option value="sale">Sale</option>
                    <option value="rent">Rent</option>
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
                  <select className="form-control" onChange={(e) => setPricerange(e.target.value)} id="selectboxcolor">
                    <option value="">Select</option>
                    <option value="latest">Latest</option>
                    <option value="price_lowtohigh">Price Low to High</option>
                    <option value="price_hightolow">Price High to Low</option>
                  </select> 
                </div>
              </div> 
              <br/>
              <div className="row">
                <div className="col-md-3"> 
                  <label htmlFor=""><b>District</b></label>
                </div>
                <div className="col-md-3">

                  <Select  id="selectboxcolor" isMulti={true} options={selectedstateonchangevalue} onChange={DistrictType}  
                   value={selectedDistrictsDisplayed} 
                  > 
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
                <Select  id="selectboxcolor" isMulti={true} options={selecteddistrictonchangevalue} onChange={TownType} value={selectedTownsDisplayed}> 
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
                  <select className="form-control" onChange={(e) => setPricefrom(e.target.value)} id="selectboxcolor">
                    <option value="">Select</option>
                    <option value="40lakhs">40 lakhs</option>
                    <option value="20lakhs">20 lakhs</option>
                  </select> 
                </div>
                <div className="col-md">
                  <label htmlFor=""><b>Price To</b></label>
                </div>
                <div className="col-md">
                  <select className="form-control" onChange={(e) => setPriceto(e.target.value)} id="selectboxcolor">
                    <option value="">Select</option>
                    <option value="1crore">1 crore</option>
                    <option value="1crore_10lakhs">1 crore 10 lakhs</option>
                  </select> 
                </div>
              </div>
              <br/>
              <div className="row" >
                <div className="col-md-3"> 
                  <label htmlFor=""><b>New/Old</b></label>
                </div>
                <div className="col-md-3">
                  <select className="form-control" onChange={(e) => setNewold(e.target.value)} id="selectboxcolor">
                    <option value="">Select</option>
                    <option value="new">New</option>
                    <option value="old">Old</option>
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
                  <button className='btn' id="searchbuttoninhome" onClick={searchfunction}>Search properties</button>   
                </div>
                <div className="col-md"> 
                </div>
              </div> 
                      
            </form>
          </div>
        </header>

        <div class="container pt-4 pb-4" >
          <Pagination totalPosts={propertydetails.length} recordsPerPage={recordsPerPage} setCurrentPage={setCurrentPage} 
          currentPage={currentPage} firstpostIndex={firstpostIndex} lastpostIndex={lastpostIndex}/>
        
           
            <div>
  
           {currentposts.map((key, index2) =>  (
            <>

              {index2 %3 == 0 && currentposts.length - index2 >= 3 ? 
                <>
                <div class="row">
                  <div class="col-lg-4 col-md-4 col-sm-12 mx-auto p-2">
                    <img src={background} class="img-fluid" />
                    <div class="container  text-center" id="properties_container">
                      <div class="row row-cols-2 pt-2" >
                    
                          <div class="col" id="properties1">column2</div>
                          <div class="col" id="properties2">{currentposts[index2].propertyType}</div>
                          <div class="col" id="properties2">{currentposts[index2].town}</div>
                          <div class="col" id="properties1">Column4</div>
                          <div class="col" id="properties1">Column5</div>
                          <div class="col" id="properties2">Column6</div>
                      </div>
                    </div>
                    <div class ="pt-2">
                      <button className='btn' id="searchbuttoninhome">More Details</button>
                    </div>
                  </div> 


                  <div class="col-lg-4 col-md-4 col-sm-12 mx-auto p-2">
                    <img src={background} class="img-fluid" />
                    <div class="container  text-center" id="properties_container">
                      <div class="row row-cols-2 pt-2" >
                    
                          <div class="col" id="properties1">column2</div>
                          <div class="col" id="properties2">{currentposts[index2 + 1].propertyType}</div>
                          <div class="col" id="properties2">{currentposts[index2 + 1].town}</div>
                          <div class="col" id="properties1">Column4</div>
                          <div class="col" id="properties1">Column5</div>
                          <div class="col" id="properties2">Column6</div>
                      </div>
                    </div>
                    <div class ="pt-2">
                      <button className='btn' id="searchbuttoninhome">More Details</button>
                    </div>
                  </div> 

                  <div class="col-lg-4 col-md-4 col-sm-12 mx-auto p-2">
                    <img src={background} class="img-fluid" />
                    <div class="container  text-center" id="properties_container">
                      <div class="row row-cols-2 pt-2" >
                    
                          <div class="col" id="properties1">column2</div>
                          <div class="col" id="properties2">{currentposts[index2 + 2].propertyType}</div>
                          <div class="col" id="properties2">{currentposts[index2 + 2].town}</div>
                          <div class="col" id="properties1">Column4</div>
                          <div class="col" id="properties1">Column5</div>
                          <div class="col" id="properties2">Column6</div>
                      </div>
                    </div>
                    <div class ="pt-2">
                      <button className='btn' id="searchbuttoninhome">More Details</button>
                    </div>
                  </div> 

                </div> 
                </> :                
                
                  <>
                      { index2 %3 == 0 && currentposts.length - index2 == 1 ?
                        <div class="row">
                          <div class="col-lg-4 col-md-4 col-sm-12 mx-auto p-2">
                            <img src={background} class="img-fluid" />
                            <div class="container  text-center" id="properties_container">
                              <div class="row row-cols-2 pt-2" >
                            
                                  <div class="col" id="properties1">column2</div>
                                  <div class="col" id="properties2">{currentposts[index2].propertyType}</div>
                                  <div class="col" id="properties2">{currentposts[index2].town}</div>
                                  <div class="col" id="properties1">Column4</div>
                                  <div class="col" id="properties1">Column5</div>
                                  <div class="col" id="properties2">Column6</div>
                              </div>
                            </div>
                            <div class ="pt-2">
                              <button className='btn' id="searchbuttoninhome">More Details</button>
                            </div>
                          </div> 
        
        
                          <div class="col-lg-4 col-md-4 col-sm-12 mx-auto p-2">
                          </div> 

                          <div class="col-lg-4 col-md-4 col-sm-12 mx-auto p-2">
                          </div>
            
                        </div>
                      :
                        <>
                          { index2 %3 == 0 && currentposts.length - index2 == 2 ?
                                                    <div class="row">
                                                      <div class="col-lg-4 col-md-4 col-sm-12 mx-auto p-2">
                                                        <img src={background} class="img-fluid" />
                                                        <div class="container  text-center" id="properties_container">
                                                          <div class="row row-cols-2 pt-2" >
                                                        
                                                              <div class="col" id="properties1">column2</div>
                                                              <div class="col" id="properties2">{currentposts[index2].propertyType}</div>
                                                              <div class="col" id="properties2">{currentposts[index2].town}</div>
                                                              <div class="col" id="properties1">Column4</div>
                                                              <div class="col" id="properties1">Column5</div>
                                                              <div class="col" id="properties2">Column6</div>
                                                          </div>
                                                        </div>
                                                        <div class ="pt-2">
                                                          <button className='btn' id="searchbuttoninhome">More Details</button>
                                                        </div>
                                                      </div> 
                                    
                                    
                                                      <div class="col-lg-4 col-md-4 col-sm-12 mx-auto p-2">
                                                        <img src={background} class="img-fluid" />
                                                          <div class="container  text-center" id="properties_container">
                                                            <div class="row row-cols-2 pt-2" >
                                                          
                                                                <div class="col" id="properties1">column2</div>
                                                                <div class="col" id="properties2">{currentposts[index2].propertyType}</div>
                                                                <div class="col" id="properties2">{currentposts[index2].town}</div>
                                                                <div class="col" id="properties1">Column4</div>
                                                                <div class="col" id="properties1">Column5</div>
                                                                <div class="col" id="properties2">Column6</div>
                                                            </div>
                                                          </div>
                                                          <div class ="pt-2">
                                                            <button className='btn' id="searchbuttoninhome">More Details</button>
                                                          </div>
                                                      </div> 
                            
                                                      <div class="col-lg-4 col-md-4 col-sm-12 mx-auto p-2">
                                                      </div>
                                        
                                                    </div>
                            :
                              <></>
                          }
                        </>
                      } 
                    
                  </> }

              </>
              ))}

            
            </div> 
            <div class ="pt-3 p-0">
            <Pagination totalPosts={propertydetails.length} recordsPerPage={recordsPerPage} setCurrentPage={setCurrentPage} 
          currentPage={currentPage} firstpostIndex={firstpostIndex} lastpostIndex={lastpostIndex}/>  </div>
        </div>
   
        <Footer/>
    
      </div>
    )
}

export default Home;
