import React from "react";
import Encabezado from "../componentes/Encabezado";
import PieDePagina from "../componentes/PieDePagina";
import RutaContacto from "../componentes/contactos/RutaContacto";
import FormularioContacto from "../componentes/contactos/FormularioContacto";

function PaginaContacto() {
  return (
    <>
      <Encabezado />
      <main>
        <RutaContacto />
        <FormularioContacto />
      </main>
      <PieDePagina />
    </>
  );
}

export default PaginaContacto;
