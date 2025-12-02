import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import LogoutButton from "../../components/LogoutButton";

function DashboardPage() {
  return (
    <div className="d-flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Contenedor principal */}
      <div className="flex-grow-1" style={{ marginLeft: "250px" }}>

        {/* Navbar */}
        <Navbar />

        {/* Contenido */}
        <div className="container py-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2>Bienvenido al Dashboard</h2>
            
            {/* Botón para cerrar sesión */}
            <LogoutButton />
          </div>

          <p>Este es el contenido principal de la página.</p>

          {/* Aquí puedes agregar tu lista de usuarios o cualquier otra sección */}
        </div>

        {/* Footer */}
        <Footer />

      </div>
    </div>
  );
}

export default DashboardPage;
