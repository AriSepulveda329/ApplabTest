import { useState } from "react";
import "./Login.css";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {};

  return (
    <div className="login-layout">
      <div className="login-content">
        <h2>Iniciar Sesión</h2>
        <form className="login-form" onSubmit={onSubmit}>
          <div className="form-user">
            <label>Usuario:</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="form-password">
            <label>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Aceptar</button>
        </form>
      </div>
    </div>
  );
}
