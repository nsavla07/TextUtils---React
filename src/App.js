import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
  const [mode,setmode]= useState('light')
  const [alert, setAlert] = useState(null);
  const showAlert =(message, type) => {
    setAlert({
      msg: message,
      type: type

    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);

  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success"); 
      document.title = "TextUtils - Dark Mode";
      // setInterval(()=>{
      //   document.title = "TextUtils is Amazing";
      // },2000);
      // setInterval(()=>{
      //   document.title = "Install TextUtils Now";
      // },1500);
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
     {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      {/* <About/> */}
      <Alert alert= {alert}/>
      <div className="container my-3">
      {/* <Routes>
          <Route exact path="/about" element={ */}
            {/* <About/> */}
        
          {/* <Route exact path="/home" element={ */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
