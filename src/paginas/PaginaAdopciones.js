import React from "react";
import Encabezado from "../componentes/Encabezado";
import PieDePagina from "../componentes/PieDePagina";
import RutaAdopcion from "../componentes/adopciones/RutaAdopcion";
import CachorrosAdopcion from "../componentes/adopciones/CachorrosAdopcion";
import GaleriaAdopcion from "../componentes/adopciones/GaleriaAdopcion";

function PaginaAdopciones() {
  return (
    <>
      {" "}
      <Encabezado />
      <main>
        <RutaAdopcion />
        <CachorrosAdopcion />
        <GaleriaAdopcion />
      </main>
      <PieDePagina />
    </>
  );
}

export default PaginaAdopciones;
