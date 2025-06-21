import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import { Home } from "./components/Home";
import About from "./components/About";
import CardState from "./context/cards/CardState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [alert, setAlert] = useState(null);

  const handleAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  return (
    <div style={{ backgroundColor: "#3D3D3D" }}>
      <CardState>
        <Router>
          <Navbar />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home handleAlert={handleAlert} />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login handleAlert={handleAlert} />} />
              <Route path="/signup" element={<Signup handleAlert={handleAlert} />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </CardState>
    </div>
  );
}

export default App;
