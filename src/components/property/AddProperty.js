
import React from "react";
import background from "../../images/background.jpg";
import Navbar from "../common/Navbar";
import { Url } from "../../constants/global";
import axios from "axios";
import { useState, useEffect } from "react";
import { json, useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import { propertyTypes } from "../../constants/global";
import { transactionType } from "../../constants/global";
import data from "../../json/places.json"
import { ProgressBar } from "react-bootstrap";
import Compressor from 'compressorjs';

var newUrl = Url + 'location/state';
var addDistrictUrl = Url + 'location/district';
var addTownUrl = Url + 'location/town';

var getStateUrl = Url + 'location/states';
var getDistrictUrl = Url + 'location/districts';
var getTownUrl = Url + 'location/towns';

var addPropertyURL = Url + 'property/addProperty';
var addPropertyImagesURL = Url + 'addPropertyImages';

const AddProperty = (props) => {

    const [stateName, setStateName] = useState("");
    const [stateCode, setStateCode] = useState("");

    const [propertyTypeSelected, setPropertyTypeSelected] = useState("");
    const [transactionTypeSelected, setTransactionTypeSelected] = useState("");

    const [stateNameSelectedID, setStateNameSelectedID] = useState("");
    const [districtNameSelectedID, setDistrictNameSelectedID] = useState("");
    const [townNameSelectedID, setTownNameSelectedID] = useState("");

    const [districtName, setDistrictName] = useState("");
    const [districtCode, setDistrictCode] = useState("");

    const [townName, setTownName] = useState("");
    const [townCode, setTownCode] = useState("");

    const [localityName, setLocalityName] = useState("");
    const [cost, setCost] = useState("");

    const [stateOptions, setStateOptions] = useState([]);
    const [districtOptions, setDistrictOptions] = useState([]);
    const [districtOptionsOriginal, setDistrictOptionsOriginal] = useState([]);
    const [townOptions, setTownOptions] = useState([]);
    const [townOptionsOriginal, setTownOptionsOriginal] = useState([]);

    const [addStateButtonStatus, setAddStateButtonStatus] = useState("Add state");
    const [addDistrictButtonStatus, setAddDistrictButtonStatus] = useState("Add district");
    const [addTownButtonStatus, setAddTownButtonStatus] = useState("Add town");

    const [alertClass, setAlertClass] = useState("alert alert-info");
    const [alertContent, setAlertContent] = useState("Enter the property details");
    const [compressedFile, setCompressedFile] = useState(null);

    const [uploadProgressValue, setUploadProgressValue] = useState(0);
    const [imageUrl, setImageUrl] = useState();
    const [progressBar, setProgressBar] = useState(0);
    const presetKey = "";
    const [files, setFiles] = useState([]);

    const stateOptionsArray = [];
    const districtOptionsArray = [];
    const townOptionsArray = [];

    const navigate = useNavigate();

    //const now = 80;

    //const data = JSON.parse(fs.readFileSync("../../json/places.json"));


    const addState = async (e) => {
      //ssalert("Paulsin");

      setAddStateButtonStatus("Adding state");

      if(stateName && stateCode) {
        try {
          //alert("Paulsin");
          const response = await axios.post(
            newUrl,
            {
              "stateName": stateName,    
              "stateCode": stateCode
            }     
          );  

          //alert(response.data);

          if(response.data == "both_exists") {
            setAlertContent("State name and code exist");
            setAlertClass("alert alert-danger");
          }
          else if(response.data == "name_exists") {
            setAlertContent("State name exists");
            setAlertClass("alert alert-danger");
          }
          else if(response.data == "code_exists") {
            setAlertContent("State code exists");
            setAlertClass("alert alert-danger");
          }
          else if(response.status == 200) {
            setAddStateButtonStatus("Add state");
            setStateName("");
            setStateCode("");
          }

          fetchStates();
          
        } catch(error) {
          console.error("Error posting data:", error);
        }
      }
      else if (!stateName){
        setAlertContent("Enter state name");
        setAlertClass("alert alert-danger");
      }
      else if(!stateCode) {
        setAlertContent("Enter state code");
        setAlertClass("alert alert-danger");
      }
    };

    const fetchStates =  async (e) => {
      //alert(getStateUrl);
      try {
        const response = await axios.get(getStateUrl,   
            { withCredentials: true }
          )
          .then(function (response) {
            //alert(response.data[0].stateName);

            response.data.map(key => {
                stateOptionsArray.push({ value: key._id, label: key.stateName });           
            });

            stateOptionsArray.sort((a, b) => (a.label > b.label) ? 1 : -1)
            
            setStateOptions(stateOptionsArray);
          })
          .catch(function (error) {
            console.log(error);
          }); 

        
      } catch(error) {
        console.error("Error posting data:", error);
      }
    };

    const handleStateSelection = (e) => {

      setStateNameSelectedID(e.value);
      
      var districtOptionsArrayTemp = [];

      //alert(stateNameSelectedID);

      districtOptionsOriginal.map(key => {
        if(key.stateID == e.value) {
          //alert(key.label);
          districtOptionsArrayTemp.push({ value: key.value, label: key.label });
        }
        //stateOptionsArray.push({ value: key._id, label: key.stateName });           
      });

      setDistrictOptions(districtOptionsArrayTemp);

    }

    const handleDistrictSelection = (e) => {

      var townOptionsArrayTemp = [];

      setDistrictNameSelectedID(e.value);

      townOptionsOriginal.map(key => {
        if(key.stateID == stateNameSelectedID && key.districtID == e.value) {
          //alert(key.label);
          townOptionsArrayTemp.push({ value: key.value, label: key.label });
        }
        //stateOptionsArray.push({ value: key._id, label: key.stateName });           
      });

      setTownOptions(townOptionsArrayTemp);
    }

    const handleTownSelection = (e) => {
      setTownNameSelectedID(e.value);
    }

    const addDistrict = async (e) => {
      //alert("Paulsin");
      
      if(stateNameSelectedID) {
        if(districtName && districtCode) {
          try {
            //alert("Paulsin");
            const response = await axios.post(
              addDistrictUrl,
              {
                "stateID": stateNameSelectedID,
                "districtName": districtName,    
                "districtCode": districtCode
              }     
            );  

            //alert(response.data);

            if(response.data == "both_exists") {
              setAlertContent("District name and code exist");
              setAlertClass("alert alert-danger");
            }
            else if(response.data == "name_exists") {
              setAlertContent("District name exists");
              setAlertClass("alert alert-danger");
            }
            else if(response.data == "code_exists") {
              setAlertContent("District code exists");
              setAlertClass("alert alert-danger");
            }
            else if(response.status == 200) {
              setAddTownButtonStatus("Add district");
              setAlertContent("District added succesffully");
              setAlertClass("alert alert-success");
              setDistrictName("");
              setDistrictCode("");
            }

            fetchDistricts();
            
          } catch(error) {
            console.error("Error posting data:", error);
          }
        }
        else if (!districtName){
          setAlertContent("Enter district name");
          setAlertClass("alert alert-danger");
        }
        else if(!districtCode) {
          setAlertContent("Enter district code");
          setAlertClass("alert alert-danger");
        }
      }
      else {
        setAlertContent("Select state");
        setAlertClass("alert alert-danger");
      }
    };

    const addTown = async (e) => {
      alert(districtNameSelectedID);
      
      if(stateNameSelectedID && districtNameSelectedID) {
        if(townName && townCode) {
          try {
            alert("Paulsin");
            const response = await axios.post(
              addTownUrl,
              {
                "stateID": stateNameSelectedID,
                "districtID": districtNameSelectedID,
                "townName": townName,    
                "townCode": townCode
              }     
            );  

            //alert(response.data);

            if(response.data == "both_exists") {
              setAlertContent("Town name and code exist");
              setAlertClass("alert alert-danger");
            }
            else if(response.data == "name_exists") {
              setAlertContent("Town name exists");
              setAlertClass("alert alert-danger");
            }
            else if(response.data == "code_exists") {
              setAlertContent("Town code exists");
              setAlertClass("alert alert-danger");
            }
            else if(response.status == 200) {
              setAddDistrictButtonStatus("Add town");
              setAlertContent("Town added succesffully");
              setAlertClass("alert alert-success");
              setDistrictName("");
              setDistrictCode("");
            }

            fetchTowns();
            
          } catch(error) {
            console.error("Error posting data:", error);
          }
        }
        else if (!townName){
          setAlertContent("Enter town name");
          setAlertClass("alert alert-danger");
        }
        else if(!townCode) {
          setAlertContent("Enter town code");
          setAlertClass("alert alert-danger");
        }
      }
      else if (!stateName) {
        setAlertContent("Select state");
        setAlertClass("alert alert-danger");
      }
      else if (!districtName) {
        setAlertContent("Select district");
        setAlertClass("alert alert-danger");
      }
    };

    const fetchDistricts =  async (e) => {
      try {
        const response = await axios.get(getDistrictUrl,   
            { withCredentials: true }
          )
          .then(function (response) {
            //alert(response.data[1].districtName);

            response.data.map(key => {
                districtOptionsArray.push({ value: key._id, label: key.districtName, stateID : key.stateID });           
            });
            
            setDistrictOptions(districtOptionsArray);
            setDistrictOptionsOriginal(districtOptionsArray);
          })
          .catch(function (error) {
            console.log(error);
          }); 
        
      } catch(error) {
        console.error("Error posting data:", error);
      }
    };

    const fetchTowns =  async (e) => {
      try {
        const response = await axios.get(getTownUrl,   
            { withCredentials: true }
          )
          .then(function (response) {
            //alert(response.data[1].districtName);

            response.data.map(key => {
                townOptionsArray.push({ value: key._id, label: key.townName, stateID : key.stateID, districtID : key.districtID });           
            });
            
            setTownOptions(townOptionsArray);
            setTownOptionsOriginal(townOptionsArray);
          })
          .catch(function (error) {
            console.log(error);
          }); 

        
      } catch(error) {
        console.error("Error posting data:", error);
      }
    };

    const handlePropertySelection = (e) => {
      setPropertyTypeSelected(e.value);
    }

    const handleTransactionTypeSelection = (e) => {
      setTransactionTypeSelected(e.value);
    }

    const submitProperty = async (e) => {
      //alert("Paulsin");
      //alert(stateNameSelectedID);
      //alert(districtNameSelectedID);
      //alert(townNameSelectedID);
      //alert();

      if(!propertyTypeSelected) {
        setAlertContent("Select property type");
        setAlertClass("alert alert-danger");
      }

      else if(!transactionTypeSelected) {
        setAlertContent("Select transaction type");
        setAlertClass("alert alert-danger");
      }

      else if(!stateNameSelectedID) {
        setAlertContent("Select state");
        setAlertClass("alert alert-danger");
      }
      else if(!districtNameSelectedID) {
        setAlertContent("Select district");
        setAlertClass("alert alert-danger");
      }
      else if(!townNameSelectedID) {
        setAlertContent("Select town");
        setAlertClass("alert alert-danger");
      }
      
      else {
        try {
          //alert("Paulsin");
          const response = await axios.post(
            addPropertyURL,
            {
              "propertyType": propertyTypeSelected,    
              "transactionType": transactionTypeSelected,
              "stateID": stateNameSelectedID,
              "districtID": districtNameSelectedID,
              "townID": townNameSelectedID
            }     
          );  
        
        } catch(error) {
          console.error("Error posting data:", error);
        }

      }


    };

    const handleImageChange = async (event) => {
      //alert("Paulsin");
      //alert(event.target.files);
      //setFiles(event.target.files);

      let fileTemp = [];

      alert(event.target.files.length);

      for(let i=0;i<event.target.files.length;i++) {

        new Compressor(event.target.files[i], {
          quality: 0.8, // 0.6 can also be used, but its not recommended to go below.
          width: 640,
          success: (compressedResult) => {
            // compressedResult has the compressed file.
            // Use the compressed file to upload the images to your server.        
            //setCompressedFile(compressedResult);
            //alert(compressedResult);
            fileTemp.push(compressedResult);
          },
        });

        setFiles(fileTemp);
      }

      /*
      const formData = new FormData();
      formData.append("file", file);

      await axios
      .post(addPropertyImagesURL, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
      })
      .then((response) => {
		// handle the response
        console.log(response);
      })
      .catch((error) => {
        // handle errors
        console.log(error);
      });
*/
      /*

      const file = e.target.files[0];
      alert(file);
      const formData = new FormData();
      formData.append('file', file);
      formData.append("upload_preset", presetKey);
      axios.post(addPropertyImagesURL,
        formData, {
        headers : {
          "enctype":"multipart/form-data"
        },
        onUploadProgress: e => {
          alert(Math.round((e.loaded/e.total)*100));
          setUploadProgressValue(Math.round((e.loaded/e.total)*100));
        }
      }
      ).then(res => setImageUrl(res.data.secure_url))
      .catch(err => console.log(err));
*/
    }

    const uploadImageSubmit =  async (e) => {
      const formData = new FormData();

      //alert(files.length);
      for (let i = 0; i < files.length; i++) {
        formData.append('image', files[i], files[i].name);
      }
      
      //formData.append('image', compressedFile , compressedFile.name);

      //formData.append('image', files);

      await axios.post(addPropertyImagesURL,
        formData, {
        headers : {
          "Content-Type":"multipart/form-data"
        },
        onUploadProgress: e => {
          //alert(Math.round((e.loaded/e.total)*100));
          setUploadProgressValue(Math.round((e.loaded/e.total)*100));
        }
      }
      ).then(res => setImageUrl(res.data.secure_url))
      .catch(err => console.log(err));
    }

    const test =  async (e) => {
      try {
        const response = await axios.get('https://haberoceanstock.com/backend/location',   
            { withCredentials: true }
          )
          .then(function (response) {
            alert(response.data);
          })
          .catch(function (error) {
            console.log(error);
          }); 
        
      } catch(error) {
        console.error("Error posting data:", error);
      }
    };

    useEffect(() => {
      //console.log('i fire once');
      //setItems(data);
      fetchStates();
      fetchDistricts();
      fetchTowns();

      //test();

    }, []);


    return(

    <div>

        <Navbar />


        <div class="container mt-3">

            <h3>Property details</h3>
            <br/>

            <div class={alertClass} role="alert">
              {alertContent}
            </div>

            <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Property type</label>

                <div class="col-sm-5">
                  <Select
                    options={propertyTypes}
                    onChange={handlePropertySelection}
                  />
                </div>

            </div>


            <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Sale / Rent</label>

                <div class="col-sm-5">
                  <Select
                    options={transactionType}
                    onChange={handleTransactionTypeSelection}
                  />
                </div>
            </div>

            <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label">State</label>

                <div class="col-sm-5">
                  <Select
                    //defaultValue={{ value: 'Rent', label: 'Rent' }}
                    onChange={handleStateSelection}
                    options={stateOptions}
                  />
                </div>
            </div>

            <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Add a state</label>

                <div class="col-sm-5">
                  <input type="name" class="form-control" id="name" placeholder="Enter state name" name="name" value={stateName} required onChange={(e) => setStateName(e.target.value)}/>
                </div>

                <div class="col-sm-3">
                  <input type="name" class="form-control" id="name" placeholder="Enter state code" name="name" value={stateCode} required onChange={(e) => setStateCode(e.target.value)}/>
                </div>

                <div class="col-sm-2">
                  <button type="submit" class="btn btn-primary" onClick={addState}>{addStateButtonStatus}</button>
                </div>
            </div>


            <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label">District</label>

                <div class="col-sm-5">
                  <Select
                    //defaultValue={{ value: 'Rent', label: 'Rent' }}
                    //onChange={handleSubmit}
                    onChange={handleDistrictSelection}
                    options={districtOptions}
                  />
                </div>
            </div>

            <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Add a district</label>

                <div class="col-sm-5">
                  <input type="name" class="form-control" value={districtName} placeholder="Enter district name" name="name" required onChange={(e) => setDistrictName(e.target.value)}/>
                </div>

                <div class="col-sm-3">
                  <input type="name" class="form-control" value={districtCode} placeholder="Enter district code" name="name" required onChange={(e) => setDistrictCode(e.target.value)}/>
                </div>

                <div class="col-sm-2">
                  <button type="submit" class="btn btn-primary" onClick={addDistrict}>{addDistrictButtonStatus}</button>
                </div>
            </div>

            <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Town</label>

                <div class="col-sm-5">
                  <Select
                    //defaultValue={{ value: 'Rent', label: 'Rent' }}
                    //onChange={handleSubmit}
                    onChange={handleTownSelection}
                    options={townOptions}
                  />
                </div>
            </div>

            <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Add a town</label>

                <div class="col-sm-5">
                  <input type="text" class="form-control" value={townName} placeholder="Enter town name" required onChange={(e) => setTownName(e.target.value)}/>
                </div>

                <div class="col-sm-3">
                  <input type="text" class="form-control" value={townCode} placeholder="Enter town code" required onChange={(e) => setTownCode(e.target.value)}/>
                </div>

                <div class="col-sm-2">
                  <button type="submit" class="btn btn-primary" onClick={addTown}>{addTownButtonStatus}</button>
                </div>
            </div>

            <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Add a locality</label>

                <div class="col-sm-5">
                  <input type="text" class="form-control" placeholder="Enter locality name" value={localityName} required onChange={(e) => setLocalityName(e.target.value)}/>
                </div>
            </div>

            <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Cost</label>

                <div class="col-sm-5">
                  <input type="text" class="form-control" placeholder="Enter cost" value={cost} required onChange={(e) => setCost(e.target.value)}/>
                </div>
            </div>

            <button type="submit" class="btn btn-primary" onClick={submitProperty}>Submit property</button>
          
        </div>


    </div>

    )
};

export default AddProperty;