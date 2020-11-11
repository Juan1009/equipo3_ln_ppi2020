import React from "react";
import Navegation from "../components/Navegation";
import Login from "../components/Login";
import { Link, withRouter } from "react-router-dom";

const Registro = (props) => {
  const { history } = props;
  return (
    <div class="Login py-5">
      <div class="container py-5">
        <h2>Regrtro del producto</h2>
        <form action="/action_page.php" class="was-validated">
          <div class="form-group">
            <label for="uname">Codigo:</label>
            <input
              type="text"
              class="form-control"
              id="codigo"
              placeholder="Enter codigo"
              name="uname"
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">llena el campo.</div>
          </div>
          <div class="form-group">
            <label for="pwd">Nombre:</label>
            <input
              type="password"
              class="form-control"
              id="nombre"
              placeholder="Enter Nombre"
              name="pswd"
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">llena el campo.</div>
          </div>
          <div class="form-group">
            <label for="pwd">Fecha:</label>
            <input
              type="password"
              class="form-control"
              id="fecha"
              placeholder="Enter fecha"
              name="pswd"
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">llena el campo.</div>
          </div>
          <div class="form-group">
            <label for="pwd">Estado:</label>
            <input
              type="password"
              class="form-control"
              id="estado"
              placeholder="Enter Estafo"
              name="pswd"
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">llena el campo.</div>
          </div>

          <button
            type="submit"
            class="btn btn-primary"
            onClick={() => history.push("/Login")}
          >
            Inicio
          </button>

          <button
            type="submit"
            class="btn btn-danger "
            onClick={() => history.goBack()}
          >
            atras
          </button>
        </form>
      </div>
      <Navegation />
    </div>
  );
};

export default withRouter(Registro);
