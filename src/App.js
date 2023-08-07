import "./App.css";
import React, { useState } from 'react';
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
 
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode is enabled or not
  // const [modeTitle, setModeTitle] = useState("Eneble Light Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  const toggleMode = (color) => {
    switch (color) {
      case "light":
        setMode("light");
        showAlert("Light mode has been enabled", "success");
        document.body.style.backgroundColor = "white";
        document.querySelector("#myBox").style.backgroundColor = "white";
        break;
      case "dark":
        setMode("dark");
        showAlert("Dark mode has been enabled", "success");
        document.body.style.backgroundColor = "#999999";
        document.querySelector("#myBox").style.backgroundColor = "#999999";
        break;
      case "success":
        setMode("success");
        showAlert("Green mode has been enabled", "success");
        document.body.style.backgroundColor = "#99B599";
        document.querySelector("#myBox").style.backgroundColor = "#99B599";
        break;
      case "primary":
        setMode("primary");
        showAlert("Blue mode has been enabled", "success");
        document.body.style.backgroundColor = "#AED6F1";
        document.querySelector("#myBox").style.backgroundColor = "#AED6F1";
        break;
      case "warning":
        setMode("warning");
        showAlert("Yellow mode has been enabled", "success");
        document.body.style.backgroundColor = "#F9E79F";
        document.querySelector("#myBox").style.backgroundColor = "#F9E79F";
        break;
      case "danger":
        setMode("danger");
        showAlert("Red mode has been enabled", "success");
        document.body.style.backgroundColor = "#F1948A";
        document.querySelector("#myBox").style.backgroundColor = "#F1948A";
        break;
      case "secondary":
        setMode("secondary");
        showAlert("Gray mode has been enabled", "success");
        document.body.style.backgroundColor = "#D5D8DC";
        document.querySelector("#myBox").style.backgroundColor = "#D5D8DC";
        break;
      case "info":
        setMode("info");
        showAlert("Cyan mode has been enabled", "success");
        document.body.style.backgroundColor = "#C1FAFF";
        document.querySelector("#myBox").style.backgroundColor = "#C1FAFF";
        break;
      default:
        break;
      
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter the text to analyse Below" mode={mode} showAlert={showAlert} />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
} 

export default App;
