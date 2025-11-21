import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

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
          <h2>Bienvenido al Dashboard</h2>
          <p>Este es el contenido principal de la página.</p>
        </div>

        {/* Footer */}
        <Footer />

      </div>
    </div>
  );
}

export default DashboardPage;
