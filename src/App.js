import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
//import About from './components/About';
//import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  const [mode1, setmode1] = useState("light")
  const [alert1, setalert1] = useState(null)
  const alert2=(message, type) => {
    setalert1({
      msg : message,
      type: type
    })
    setTimeout(() => {
      setalert1(null)
    }, 1500);
  }
  const removebodyclasses = () => 
  {
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')
  }
  const togglemode=(cls)=>
  {
    console.log(cls)
    removebodyclasses();
    document.body.classList.add("bg-"+cls)
    if(mode1==="light")
    {
      setmode1("dark");
      document.body.style.backgroundColor="#003a7e";
      alert2("Dark mode has been enabled","success");
      document.title="Dark Mode - Enabled "
      setInterval(() => {
        document.title="Textutils is an amazing mode "
      }, 1500);
      setInterval(() => {
        document.title="Install Textutils Now"
      }, 2000);
    }
    else
    {
      setmode1("light")
      document.body.style.backgroundColor="white";
      alert2("Light mode has been enabled","success");
      document.title="Light Mode - Enabled "
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" AboutText="About TextUtils" mode={mode1} togglemode1={togglemode}/>
      <Alert alert={alert1}/>
      <div className="container my-3">
      <Routes>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode1} alert3={alert2} togglemode1={togglemode}/>}/>
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
