import React from "react";
import Navegation from "../components/Navegation";

const Inicio = () => {
  return (
    <div className="py-5">
      <div className="jumbotron py-5">
        <div className="container">
          <h1 className="display-3">Bienvenidos al inventario Institucional</h1>
          <h3>
            <p> Necesidad encontrada</p>
          </h3>
          <p>
            El tiempo que se le dedica a realizar el inventario manualmente
            teniendo en cuenta que se realiza a principio y final del año y en
            este lapso la información puede variar; esta actividad puede
            intervenir en las actividades académicas y curriculares de los
            docentes que realizan el inventario.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Juliana Tapias</h2>
            <img
              src="https://fotos.subefotos.com/ee5f417be87ae910e55d0f84defa0e68o.jpg"
              alt="Juliana"
              width="200"
              height="350"
            />
            <p>Integrante #1 su rol en el grupo de trabajo es _________</p>
          </div>
          <div className="col-md-4">
            <h2>Paola Carvajal</h2>
            <img
              src="https://fotos.subefotos.com/3eac265915be1efb566a3fcca7f78702o.jpg"
              alt="Paola"
              width="200"
              height="350"
            />
            <p>Integrante #2 su rol en el grupo de trabajo es _____________</p>
          </div>
          <div className="col-md-4">
            <h2>Juan Jose Muñoz</h2>
            <img
              src="https://fotos.subefotos.com/76661f10e9b81b36f8c03851fb347217o.jpg"
              alt="Juan"
              width="200"
              height="350"
            />
            <p>Integrante #3 su rol en el grupo de trabajo es ____________</p>
          </div>
        </div>
        <hr />
      </div>
      <Navegation />
    </div>
  );
};

export default Inicio;
