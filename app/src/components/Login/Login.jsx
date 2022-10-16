import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import "./Login.css";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (userName === "usuario" && password === "1234") {
      setUser(userName);
      alert("Bienvenido!");
      navigate("/", { replace: true });
    } else {
      alert("Nombre de usuario y/o contraseña incorrecta");
    }
  };

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
