import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Dashboard,
  Kelas,
  Login,
  MataPelajaran,
  ProfilUser,
  Register,
  Student,
} from "./pages/IndexPages.jsx";
import {
  CreateEditKelas,
  CreateEditMapel,
  CreateEditStudent,
  TambahKelas,
  TambahMapel,
  TambahStudent,
} from "./CreateEditFormCRUD/IndexCreateEdit.jsx";
import MainApp from "./pages/MainApp/MainApp.jsx";
import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <MainApp />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="/kelas" element={<Kelas />} />
            <Route path="/mataPelajaran" element={<MataPelajaran />} />
            <Route path="/student" element={<Student />} />
          </Route>

          {/* Routes di luar mainApp */}
          <Route path="/profil" element={<ProfilUser />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Crud routing */}
          <Route path="/tambahKelas" element={<TambahKelas />} />
          <Route path="/createEditKelas/:id" element={<CreateEditKelas />} />
          <Route path="/tambahMapel" element={<TambahMapel />} />
          <Route path="/createEditMapel/:id" element={<CreateEditMapel />} />
          <Route path="/tambahStudent" element={<TambahStudent />} />
          <Route
            path="/createEditStudent/:id"
            element={<CreateEditStudent />}
          />
        </Routes>
      </Router>
    </>
  );
}
