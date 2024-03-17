import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarComponent from './Components/Navbar/NavbarComponent';
import JobOneComponent from './Components/Job One/JobOneComponent';
import JobTwoComponent from './Components/JobTwo/JobTwoComponent';
import JobThreeComponent from './Components/Job Three/JobThreeComponent';
import JobFourComponent from './Components/Job Four/JobFourComponent';
import JobFiveComponent from './Components/Job Five/JobFiveComponent';

function App() {
  return (
    <BrowserRouter>
    <div className="App bg">
      <div className="back">
        <header>
          <h1 className="header">Epic Jobs that Ellie Likes</h1>
          <img src={logo} className="App-logo" alt="logo" /> 
          {/* I think this thing is cool  */}
        </header>

        <NavbarComponent></NavbarComponent>
        <hr></hr>
      </div>
        <Routes>
          <Route path='/' element={<JobOneComponent/>}></Route>
          <Route path='/free' element={<JobTwoComponent/>}></Route>
          <Route path='/riot' element={<JobThreeComponent/>}></Route>
          <Route path='/entr' element={<JobFourComponent/>}></Route>
          <Route path='/sjcoe' element={<JobFiveComponent/>}></Route>
          </Routes>
    </div>   
    </BrowserRouter>
  );
}

export default App;
