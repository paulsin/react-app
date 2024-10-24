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


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/test2" element={<Test2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
