import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TextForm from "./components/TextForm";

const App = () => {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  setTimeout(() => {
    setAlert(null);
  }, 1300);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("dark mode enable", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enable", "success");
    }
  };
  return (
    <div>
      <Navbar title="TextUtils" toggleMode={toggleMode} mode={mode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <TextForm
          showAlert={showAlert}
          heading="Enter the Text To Analyz Below"
          mode={mode}
        /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the Text To Analyz Below"
                  mode={mode}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};
export default App;
