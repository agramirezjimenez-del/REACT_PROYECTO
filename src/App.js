import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTopRoute from "./ScrollToTopRoute";
import Inicio from "./paginas/Inicio";
import ListaPerros from "./paginas/ListaPerros";
import PaginaTiendas from "./paginas/PaginaTiendas";
import PaginaAdopciones from "./paginas/PaginaAdopciones";
import PaginaContacto from "./paginas/PaginaContacto";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTopRoute />
        <Switch>
          <Route path="/" component={Inicio} exact />
          <Route path="/doglist" component={ListaPerros} exact />
          <Route path="/shop" component={PaginaTiendas} exact />
          <Route path="/adoption" component={PaginaAdopciones} exact />
          <Route path="/contacts" component={PaginaContacto} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
