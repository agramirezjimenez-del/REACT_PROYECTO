import React from "react";
import Encabezado from "../componentes/Encabezado";
import PieDePagina from "../componentes/PieDePagina";
import SliderPrincipal from "../componentes/SliderPrincipal";

import ServiciosCriadero from "../componentes/ServiciosCriadero";
import TiendaAdopcion from "../componentes/TiendaAdopcion";
import Testimonio from "../componentes/Testimonio";

function PaginaInicioDos() {
  return (
    <>
      <Encabezado />
      <main>
        <SliderPrincipal />
        <ServiciosCriadero />
        <TiendaAdopcion />
        <Testimonio />
      </main>
      <PieDePagina />
    </>
  );
}

export default PaginaInicioDos;
