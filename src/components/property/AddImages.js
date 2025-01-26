
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

const AddImages = (props) => {

    const [uploadProgressValue, setUploadProgressValue] = useState(0);
    const [imageUrl, setImageUrl] = useState();
    const [progressBar, setProgressBar] = useState(0);
    const presetKey = "";
    const [files, setFiles] = useState([]);

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


    const fetchImages = async (e) => {
      //alert(propertyID);
      var tempArray = [];
      await axios
        .get(Url+"propertyImages/"+propertyID,
      )
      .then((res) => {
        //alert(res.data[0].imageName);
        //tempArray.push("dfdf");
        setPropertyImagesArray(tempArray);

        res.data.map(key => {
          //alert("Paulsin");
          tempArray.push({"imageName" : key.imageName});
        });
      })

      setPropertyImagesArray(tempArray);
    }

    useEffect(() => {

      //test();
      fetchImages();

    }, []);


    return(

    <div>

        <Navbar />



        <div>
          <input type="file" name="image" onChange={handleImageChange} multiple/>
          <br />
          <button onClick={uploadImageSubmit} >handleButton</button>
          <br/>
          <ProgressBar now={uploadProgressValue} label={`${uploadProgressValue}%`} />
        </div>


        <div>
          {propertyImagesArray.map(key => {
            <div>
              
              <br />
              hgh
            </div>
          })}
        </div>

        

{/*
        <form action={addPropertyImagesURL} method="POST" enctype="multipart/form-data">
            <input type="file" name="image" />
            <button type="submit">Upload</button>
        </form>
*/}


        

    </div>

    )
};

export default AddImages;