import React from "react";
import Encabezado from "../componentes/Encabezado";
import PieDePagina from "../componentes/PieDePagina";
import RutaListaPerros from "../componentes/ListaPerros/RutaListaPerros";
import TiendaRealAdopcion from "../componentes/TiendaRealAdopcion";

function ListaPerros() {
  return (
    <>
      <Encabezado />
      <main>
        <RutaListaPerros />
        <TiendaRealAdopcion />
      </main>
      <PieDePagina />
    </>
  );
}

export default ListaPerros;
