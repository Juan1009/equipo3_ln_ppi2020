import React from "react";
//Navegación
import { Link, withRouter } from "react-router-dom";

const Nav = (props) => {
  const { history } = props;
  return (
    <React.Fragment>
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
          <Link className="navbar-brand" to="">
            Bienvenidos
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => history.push("/Login")}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/Registro">
                  {" "}
                  Registro Productos
                </Link>
                <span className="sr-only">(current)</span>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Destino">
                  {" "}
                  Docentes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Login">
                  {" "}
                  Inventario
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Nav);
