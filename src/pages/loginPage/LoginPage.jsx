import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"; // Link para enlazar a otras paginas se usa link no a


function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: "350px" }}>
        <h3 className="text-center mb-4">Iniciar Sesión</h3>

        {/* Input de email */}
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" placeholder="email@example.com" />
        </div>

        {/* Input de contraseña con icono de ojo */}
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              placeholder="Ingresa tu contraseña"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        {/* Recordar */}
        <div className="form-check mb-3">
          <input type="checkbox" className="form-check-input" id="remember" />
          <label htmlFor="remember" className="form-check-label">
            Recordarme
          </label>
        </div>

        {/* Botón de login */}
        <button className="btn btn-primary w-100 mb-3">Ingresar</button>

        {/* Botón de Google */}
        <button className="btn btn-light border w-100 d-flex align-items-center justify-content-center gap-2">
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google logo"
            width="20"
          />
          Continuar con Google
        </button>

        {/* Enlaces */}
        <div className="text-center mt-3">
          <Link to="/forgot">¿Olvidaste tu contraseña?</Link>
        </div>
        <div className="text-center mt-2">
          <Link to="/register">Crear nueva cuenta</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
