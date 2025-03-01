//import logo from './logo.svg';
import './App.css';
import './custom/custom.css';
import './custom/anju.css';
import './custom/paulsin.css';
import background from './images/background.jpg';
import React from 'react';
import {
  Route,
  BrowserRouter,
  Routes
} from 'react-router-dom';
 import Test from './components/accounts/Test';
 import Test2 from './components/accounts/Test2';
 import Home from './components/public/Home';
 import SignUp from './components/accounts/SignUp';
 import ListUsersDataGrid from './components/accounts/ListUsersDataGrid';
 import ListUsersCustomTable from './components/accounts/ListUsersCustomTable';
 import Login from './components/accounts/Login';
 import { ConfirmProvider } from "material-ui-confirm";
 import ProfileCheck from './components/accounts/ProfileCheck';
import SignUpCheck from './components/accounts/SignUpCheck';
  import ListUsersCustomTableCheck from './components/accounts/ListUsersCustomTableCheck';
  import AddPropertyCheck from './components/property/AddPropertyCheck';
  import Location from './components/property/Location';
import LocationCheck from './components/property/LocationCheck';
import Test3 from './components/accounts/Test3';
import Properties from './components/property/Properties';
import PropertiesCheck from './components/property/PropertiesCheck';
import AddImages from './components/property/AddImages';
import AddImagesCheck from './components/property/AddImagesCheck';
import IndividualProperty from './components/public/IndividualProperty';
import AboutAs from './components/public/AboutAs';
import ContactAs from './components/public/ContactAs';
import PropertyCustomerRequestForOwnerCheck from './components/property/PropertyCustomerRequestForOwnerCheck';

function App() {
  return (
    <ConfirmProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/test" element={<Test />} />
          <Route path="/test2" element={<Test2 />} />
          <Route path="/test3" element={<Test3 />} />
          <Route path="/frontend/signupCheck" element={<SignUpCheck />} />
          <Route path="/frontend/signupCheck/:newID" element={<SignUpCheck />} />
          <Route path="/frontend/login" element={<Login />} />
          <Route path='/frontend/listusers' element={<ListUsersDataGrid />} />
          <Route path='/frontend/listusersowntable' element={<ListUsersCustomTableCheck />} />
          <Route path='/frontend/profile' element={<ProfileCheck />} />
          <Route path='/frontend/addProperty/:operation/:uniqueID' element={<AddPropertyCheck />} />
          <Route path='/frontend/location/:locationType/:countryName' element={<LocationCheck />} />
          <Route path='/frontend/location/:locationType/:countryName/:stateID' element={<LocationCheck />} />
          <Route path='/frontend/location/:locationType/:countryName/:stateID/:districtID' element={<LocationCheck />} />
          <Route path='/frontend/properties' element={<PropertiesCheck />} />
          <Route path='/frontend/addimages/:propertyID' element={<AddImagesCheck />} />
          <Route path="/frontend/individualProperty/:propertyID" element={<IndividualProperty />} />
          <Route path="/frontend/aboutas" element={<AboutAs />} />
          <Route path="/frontend/contactas" element={<ContactAs />} />
          <Route path='/frontend/propertyCustomerRequestForOwner/:param1/:param2' element={<PropertyCustomerRequestForOwnerCheck />} />

        </Routes>
      </BrowserRouter>
    </ConfirmProvider>
  );
}

export default App;
