import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Table from "./component/Table";
import PostInfo from "./component/PostInfo";
import Home from "./pages";
import "./component/style.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/aboutus";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact element={<Home />} path="/" />
          <Route element={<About />} path="/:about" />
          <Route element={<Login />} path="/login" />
          <Route element={<Dashboard />} path="/dashboard" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
