import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    Swal.fire({
      icon: "error",
      title: "Acceso denegado",
      text: "Por favor inicia sesión.",
      confirmButtonText: "Entendido",
    });

    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
