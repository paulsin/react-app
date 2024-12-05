//import logo from './logo.svg';
import './App.css';
import './custom/custom.css';
import background from './images/background.jpg';
import React from 'react';
import {
  Route,
  BrowserRouter,
  Routes
} from 'react-router-dom';
 import Test from './components/accounts/Test';
 import Test2 from './components/accounts/Test2';
 import Home from './components/accounts/Home';
 import SignUp from './components/accounts/SignUp';
 import ListUsersDataGrid from './components/accounts/ListUsersDataGrid';
 import ListUsersCustomTable from './components/accounts/ListUsersCustomTable';
 import Login from './components/accounts/Login';
 import { ConfirmProvider } from "material-ui-confirm";
 import ProfileCheck from './components/accounts/ProfileCheck';
import SignUpCheck from './components/accounts/SignUpCheck';
  import ListUsersCustomTableCheck from './components/accounts/ListUsersCustomTableCheck';

function App() {
  return (
    <ConfirmProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/test2" element={<Test2 />} />
          <Route path="/frontend/signupCheck" element={<SignUpCheck />} />
          <Route path="/frontend/signupCheck/:newID" element={<SignUpCheck />} />
          <Route path="/frontend/login" element={<Login />} />
          <Route path='/frontend/listusers' element={<ListUsersDataGrid />} />
          <Route path='/frontend/listusersowntable' element={<ListUsersCustomTableCheck />} />
          <Route path='/frontend/profile' element={<ProfileCheck />} />
        </Routes>
      </BrowserRouter>
    </ConfirmProvider>
  );
}

export default App;
