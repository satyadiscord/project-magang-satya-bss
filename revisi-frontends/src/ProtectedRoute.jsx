import { Navigate } from "react-router-dom";

// Komponen ProtectedRoute untuk mengecek status login
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token"); // Ambil status token

  // Jika tidak ada token, arahkan ke halaman login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Jika sudah login, tampilkan halaman yang diinginkan
  return children;
};

export default ProtectedRoute;
