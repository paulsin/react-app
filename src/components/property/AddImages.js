
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
import { Alert } from "bootstrap";

var newUrl = Url + 'location/state';
var addDistrictUrl = Url + 'location/district';
var addTownUrl = Url + 'location/town';

var getStateUrl = Url + 'location/states';
var getDistrictUrl = Url + 'location/districts';
var getTownUrl = Url + 'location/towns';

var addPropertyURL = Url + 'property/addProperty';
var addPropertyImagesURL = Url + 'addPropertyImages';
var deletePropertyImagesURL = Url + 'deletePropertyImages/';

const AddImages = (props) => {

    const [uploadProgressValue, setUploadProgressValue] = useState(0);
    const [imageUrl, setImageUrl] = useState();
    const [progressBar, setProgressBar] = useState(0);
    const presetKey = "";
    const [files, setFiles] = useState([]);
    const [originalData, setOriginalData] = useState([]);

    const [propertyImagesArray, setPropertyImagesArray] = useState([]);

    const stateOptionsArray = [];

    const navigate = useNavigate();


    const {propertyID} = useParams();

    //alert(propertyID);

    //const now = 80;

    //const data = JSON.parse(fs.readFileSync("../../json/places.json"));


    const handleImageChange = async (event) => {
      //alert("Paulsin");
      //alert(event.target.files);
      //setFiles(event.target.files);

      let fileTemp = [];

      //alert(event.target.files.length);

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

      formData.append('propertyID', propertyID);

      //formData.append('image', compressedFile, compressedFile.name);
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
    function createrows(row){
      var tempArray = [];
      let slno=1;
      row.map(row => {
        // alert(row.imageName)
        tempArray.push({
          'slno':slno++,
          '_id':row._id,
          'imageName':row.imageName,
          "updateTime" :row.updateTime,
          "index" : row.index,
          "imageUrl" : Url+"assets/"+ propertyID + "/" + row.imageName
        })

      })
      setPropertyImagesArray(tempArray);
      setOriginalData(tempArray);
    }

    const fetchImages = async (e) => {
      //alert(propertyID);
    
      await axios
        .get(Url+"propertyImages/"+propertyID,
      )
      .then((res) => {
         createrows(res.data)
       
      });
      
    }
    const handleDelete=(_id,imageName)=>{
      var dataimgaesafterdeleting=[];
      if(window.confirm("Do you want to delete this image?")){
        var deletetempurl=deletePropertyImagesURL+_id+"/"+propertyID+"/"+imageName;
        alert(deletetempurl)
        const response=axios.get(deletetempurl);
        originalData.map(key=>{
          if(key._id!=_id){
            dataimgaesafterdeleting.push(key)
          }
        })
        setOriginalData(dataimgaesafterdeleting);
        setPropertyImagesArray(dataimgaesafterdeleting);
        fetchImages();
      }
    }

    useEffect(() => {

      //test();
      fetchImages();

    }, []);


    var slno = 0;

    return(

    <div>

        <Navbar />
        <h2 className="text-center pt-4" id="addimagecaption">Add Images</h2>
        <div class="row pt-4 p-0">
        
          <div class="col"> </div>
          <div class="col"> <input type="file" name="image" onChange={handleImageChange} multiple/></div>
       
          <button onClick={uploadImageSubmit} class="btn btn-primary mr-2">handleButton</button>
        
          <div class="col"></div>
  
        </div>

        <div class="row pt-4 p-0">
          <div class="col-3"></div>
          <div class="col-6">
            <ProgressBar now={uploadProgressValue} label={`${uploadProgressValue}%`} />

          </div>
          <div class="col-3"></div>  
        </div>

        <div class="container pt-4 pb-4" >
          <div>
            {propertyImagesArray.map((key, index2) =>  (
              <>
                {index2 %3 == 0 && propertyImagesArray.length - index2 >= 3 ? 
                  <>
                    <div class="row">

                        <div class="col-lg-4 col-md-4 col-sm-12 mx-auto p-2">
                          <img src={key.imageUrl} class="img-fluid" />                        
                          <div class ="pt-2">
                            <button className='btn mr-2' id="thumbnailbutton">Set Image As Thumbnail</button>
                            <button className="btn" onClick={()=>handleDelete(key._id,key.imageName)} id="deletebuttoninimage">Delete</button>
                          </div>
                        </div> 

                        <div class="col-lg-4 col-md-4 col-sm-12 mx-auto p-2">
                          <img src={key.imageUrl} class="img-fluid" />               
                          <div class ="pt-2">
                            <button className='btn mr-2' id="thumbnailbutton">Set Image As Thumbnail</button>
                            <button className="btn" onClick={()=>handleDelete(key._id,key.imageName)} id="deletebuttoninimage">Delete</button>
                          </div>
                        </div> 

                        <div class="col-lg-4 col-md-4 col-sm-12 mx-auto p-2">
                          <img src={key.imageUrl} class="img-fluid" />               
                          <div class ="pt-2">
                            <button className='btn mr-2' id="thumbnailbutton">Set Image As Thumbnail</button>
                            <button className="btn" onClick={()=>handleDelete(key._id,key.imageName)} id="deletebuttoninimage">Delete</button>
                          </div>
                        </div> 

                    </div> 
                  </> :                
                  <>
                    {index2 %3 == 0 && propertyImagesArray.length - index2 == 1 ?
                      <div class="row">
                          <div class="col-lg-4 col-md-4 col-sm-12 mx-auto p-2">
                            <img src={key.imageUrl} class="img-fluid" />
                                          
                            <div class ="pt-2">
                              <button className='btn mr-2' id="thumbnailbutton">Set Image As Thumbnail</button>
                              <button className="btn" onClick={()=>handleDelete(key._id,key.imageName)} id="deletebuttoninimage">Delete</button>
                            </div>
                          </div> 
    
                          <div class="col-lg-4 col-md-4 col-sm-12 mx-auto p-2">
                          </div> 

                          <div class="col-lg-4 col-md-4 col-sm-12 mx-auto p-2">
                          </div>
            
                      </div>
                      :
                      <>
                        { index2 %3 == 0 && propertyImagesArray.length - index2 == 2 ?
                          <div class="row">
                              <div class="col-lg-4 col-md-4 col-sm-12 mx-auto p-2">
                                <img src={key.imageUrl} class="img-fluid" />          
                                <div class ="pt-2">
                                  <button className='btn mr-2' id="thumbnailbutton">Set Image As Thumbnail</button>
                                  <button className="btn" onClick={()=>handleDelete(key._id,key.imageName)} id="deletebuttoninimage">Delete</button>
                                </div>
                              </div> 
                                        
                                        
                              <div class="col-lg-4 col-md-4 col-sm-12 mx-auto p-2">
                                <img src={key.imageUrl} class="img-fluid" />               
                                <div class ="pt-2">
                                  <button className='btn mr-2' id="thumbnailbutton">Set Image As Thumbnail</button>
                                  <button className="btn" onClick={()=>handleDelete(key._id,key.imageName)} id="deletebuttoninimage">Delete</button>
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
                    
                  </> 
                }
              </>
            ))}   
          </div>      
        </div>   

        {/* <table className="table table-striped" id="selectedTable">
              <thead>
                <tr>
                  <th>
                  Index
                  </th>
                  <th>
                  ID
                  </th>
                  <th>
                  Image
                  </th>
                  <th>
                    Updated Time
                  </th>

                  <th>
                    Index
                  </th>
                  <th>
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
              
                {propertyImagesArray.map(key =>  (
                  <tr>
                    <td>
                      {key.slno}
                    </td>
                    <td>
                      {key._id}
                    </td>
                    <td>
                      <img src={key.imageUrl} />
                    </td>
                    <td>
                      {key.updateTime}
                    </td>
                    <td>
                      {key.index}
                    </td>
                    <td>
                    <button className="btn btn-danger" onClick={()=>handleDelete(key._id)}>Delete</button>
                    </td>
                  </tr>
                ))} 
                <td>
                </td>
              </tbody>
            </table>   */}  
    </div>

    )
};

export default AddImages;