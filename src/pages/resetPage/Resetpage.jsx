import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function ResetPage() {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: "350px" }}>
        <h3 className="text-center mb-3">Restablecer contraseña</h3>

        <p className="text-muted text-center" style={{ fontSize: "14px" }}>
          Ingresa tu nueva contraseña para recuperar el acceso a tu cuenta.
        </p>

        {/* Nueva contraseña */}
        <div className="mb-3">
          <label className="form-label">Nueva contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Repetir contraseña */}
        <div className="mb-3">
          <label className="form-label">Repite la contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="********"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </div>

        {/* Botón */}
        <button className="btn btn-primary w-100 mb-3">
          Guardar nueva contraseña
        </button>

        {/* Volver */}
        <div className="text-center">
          <Link to="/">Volver al inicio de sesión</Link>
        </div>
      </div>
    </div>
  );
}

export default ResetPage;
