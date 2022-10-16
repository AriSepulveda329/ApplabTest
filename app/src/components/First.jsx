import { useContext } from "react";
import { UserContext } from "../App";

export default function First() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h2>Bienvenido!</h2>
      {user ? (
        <p>Navega en el sitio como desees </p>
      ) : (
        <p>Inicia sesión para poder navergar en el sitio</p>
      )}
    </div>
  );
}
