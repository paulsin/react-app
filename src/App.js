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
 import { ConfirmProvider } from "material-ui-confirm";


function App() {
  return (
    <ConfirmProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/test2" element={<Test2 />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup/:newID" element={<SignUp />} />
          <Route path='/listusers' element={<ListUsersDataGrid />} />
          <Route path='/listusersowntable' element={<ListUsersCustomTable />} />
        </Routes>
      </BrowserRouter>
    </ConfirmProvider>
  );
}

export default App;
