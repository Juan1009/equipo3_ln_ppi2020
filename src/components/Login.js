import React from "react";
import "../style/Registro.css";
import Navegation from "../components/Navegation";

const Login = () => {
  return (
    <div className="Registro py-5 text-center mb-4">
      <form className="form-signin">
        <img
          className="mb-4"
          src="https://fotos.subefotos.com/3fe9689c0befa50b8f4d3d2806b422d9o.png"
          alt="Logo"
          width="100"
          height="100"
        />
        <h1 class="h3 mb-3 font-weight-normal">Ir al inventario</h1>

        <button class="btn btn-lg btn-primary btn-block " type="submit">
          >
        </button>
        <p class="mt-2 mb-3 text-muted">I.E Las Nieves</p>
      </form>
      <Navegation />
    </div>
  );
};

export default Login;
