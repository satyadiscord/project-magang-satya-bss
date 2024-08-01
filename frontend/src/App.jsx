import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { apiPagesComponent, listPages } from "./Index";
import "./App.css";
import Nav from "./component/Nav";
import CreateEditMataKuliah from "./crud_api_component/matakuliah_crud_api/Create-Edit-MK";
import CreateEditKelas from "./crud_api_component/kelas_crud_api/Create-Edit-Kelas";
import CreateEditSiswaSekolah from "./crud_api_component/siswaSekolah_crud_api/Create-Edit-SiswaKls";

function App() {
  const { Login, Register } = apiPagesComponent;
  const { Dashboard, Kelas, MataPelajaran, Student, Reqkelas } = listPages;
  // const [isLogins, setIsLogins] = useState(false);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     setIsLogins(true);
  //   }
  // }, []);

  const [showNavLoc, setShowNavLoc] = useState(true);
  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === "/login" || currentPath === "/register") {
      setShowNavLoc(false);
    } else {
      setShowNavLoc(true);
    }
  }, [window.location.pathname]);

  return (
    <>
      <Router>
        {showNavLoc && <Nav />}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="kelas" element={<Kelas />} />
          <Route path="mataPelajaran" element={<MataPelajaran />} />
          <Route path="student" element={<Student />} />
          {/* ini route  createMataKuliah Crud*/}
          <Route path="createMataKuliah" element={<CreateEditMataKuliah />} />
          <Route
            path="/editMataKuliah/:id"
            element={<CreateEditMataKuliah />}
          />
          {/* ini route  Kelas Crud*/}
          <Route path="createKelas" element={<CreateEditKelas />} />
          <Route path="/editKelas/:id" element={<CreateEditKelas />} />

          {/* ini route  siswaSekolah Crud*/}
          <Route
            path="createSiswaSekolah"
            element={<CreateEditSiswaSekolah />}
          />
          <Route
            path="/editSiswaSekolah/:id"
            element={<CreateEditSiswaSekolah />}
          />

          <Route path="reqKelas" element={<Reqkelas />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
