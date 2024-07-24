import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { apiPagesComponent } from "./Index";

function App() {
  const { Login, Dashboard, Register } = apiPagesComponent;

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
