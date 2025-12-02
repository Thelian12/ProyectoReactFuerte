import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth); // Cierra sesión en Firebase

      Swal.fire({
        icon: "success",
        title: "Sesión cerrada",
        text: "Has cerrado sesión correctamente.",
        showConfirmButton: false,
        timer: 1500,
      });

      // Redirige al login
      navigate("/");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo cerrar sesión. Intenta nuevamente.",
      });
    }
  };

  return (
    <button className="btn btn-outline-secondary" onClick={handleLogout}>
      Cerrar Sesión
    </button>
  );
}

export default LogoutButton;
