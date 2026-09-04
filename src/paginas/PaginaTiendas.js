import React from "react";
import Encabezado from "../componentes/Encabezado";
import PieDePagina from "../componentes/PieDePagina";
import RutaTienda from "../componentes/nuestraTienda/RutaTienda";
import AreaTienda from "../componentes/nuestraTienda/AreaTienda";

function PaginaTiendas() {
  return (
    <>
      <Encabezado />
      <main>
        <RutaTienda />
        <AreaTienda />
      </main>
      <PieDePagina />
    </>
  );
}

export default PaginaTiendas;
