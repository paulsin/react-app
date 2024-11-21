
import React from "react";
import background from "../../images/background.jpg";
import Navbar from "../common/Navbar";
import { Url } from "../../constants/global";
import axios from "axios";
import { useState, useEffect } from "react";
import { json, useNavigate } from "react-router-dom";
import { Component } from "react";

import { useConfirm } from "material-ui-confirm";

var newUrl = Url + 'accounts/person';
var deleteUrl = Url + 'accounts/person/delete/';


const myArray = ['Hardik', 'Paresh', 'Rakesh', 'Mahesh', 'Kiran'];

const ListUsersCustomTable = () => {

  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const confirm = useConfirm();

  const fetchData = async () => {
    try {
      const response = await axios.get(newUrl);
      setData(response.data);
      setOriginalData(response.data);
      //alert(response.data[10].email  );
    } catch (error) {
      if (!error.response) {
        // Network error occurred
        console.error('Network error:', error);
      } else {
        // The server responded with a status other than 200 range
        console.error('Error response:', error.response);
      }
    }
  };


  const handleDelete = async (_id) => {
    confirm({ description: "This action is permanent!" })
      .then(() => {
        var deleteUrlTemp = deleteUrl + _id;
        //alert(link);
        
        const response = axios.get(deleteUrlTemp);
          //setData(response.data);
          //alert("Deletion successful");
        window.location.reload();
          //DataGrid.refresh();

      })
      .catch(() => {
        /* ... */
      });
  };


  const testClick = () => {

  } 

  const handleSearchBoxChange = (event) => {

    var searchBoxValue = event.target.value;
    var tempArray = [];
    setSearchText(searchBoxValue);
    //alert(searchBoxValue);

    originalData.map(key => {
      var keyNameUpperCase = key.name.toUpperCase();
      var searchBoxValueUpperCase = searchBoxValue.toUpperCase();

      var searchInText = key.name.toUpperCase() + key.email.toUpperCase() + key.mobile;



      if (searchInText.includes(searchBoxValueUpperCase)) {
        tempArray.push(key);
        setData(tempArray);
      }
      else if (searchBoxValue == " ") {
        //setData(data);
      }
      else {
        setData(tempArray);
      }

    });


    ////  Highlight selected text after search

    //const selectedTable = document.getElementById('selectedTable');
    //const regex = new RegExp(searchText, 'gi');
    //let text = selectedTable.innerHTML;
    
    //alert(textTemp);
    
    //text = text.replace(/(<mark class="highlight">|<\/mark>)/gim, '');
    //const newText = text.replace(regex, '<mark class="highlight">$&</mark>');
    //selectedTable.innerHTML = newText;
    
  };

  useEffect(() => {
    //console.log('i fire once');
    fetchData();
    //alert("Paulsin");
  }, []);

    
  var slno =1;

  return(

    <div>
      <Navbar />

      <div class="input-group p-2">
        <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" 
          value={searchText} onChange={handleSearchBoxChange}/>
      </div>

      <table className="table table-striped" id="selectedTable">
        <thead>
          <tr>
            <th>
              Index
            </th>
            <th>
              ID
            </th>
            <th>
              Name
            </th>
            <th>
              Email
            </th>
            <th>
              Mobile
            </th>
            <th>
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(key =>  (
            <tr>
              <td>
                {slno++}
              </td>
              <td>
                {key._id}
              </td>
              <td>
                {key.name}
              </td>
              <td>
                {key.email}
              </td>
              <td>
                {key.mobile}
              </td> 
              <td>
                <button className="btn btn-danger" onClick={()=>handleDelete(key._id)}>Delete</button>
              </td> 
            </tr>
          ))} 

          <td>

          </td>
        </tbody>
      </table>
      
      <button className="btn btn-danger" onClick={testClick}>Delete</button>

    </div>

  )
};

export default ListUsersCustomTable;