import { Link } from "react-router-dom";


function Sidebar() {
  return (
    <div
      className="bg-dark text-white p-3"
      style={{ width: "250px", height: "100vh", position: "fixed" }}
    >
      <h4>Panel</h4>
      <hr />

      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/dashboard">Dashboard</Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/register">Registro</Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/forgot">Olvidé mi contraseña</Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/reset">Reset</Link>
        </li>

        
      </ul>
    </div>
  );
}

export default Sidebar;
