import React, { useState } from "react";
// Tema: React JS – Manejo de estado (Hooks)
// Se utiliza useState porque el componente deja de ser solo visual.
// Ahora el formulario necesita almacenar, modificar y validar datos
// ingresados por el usuario en tiempo real.

import DireccionContacto from "./DireccionContacto";

function FormularioContacto() {

  // Estado que almacena los valores de cada campo del formulario.
  // Tema: React JS – Formularios controlados
  // Cada input queda vinculado al estado, lo que permite
  // controlar su valor desde React.
  const [formValues, setFormValues] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  // Estado que guarda los errores de validación por cada campo.
  // Tema: Validación de formularios + Renderizado condicional
  // Permite mostrar mensajes de error de forma individual
  // según el campo que no cumpla la validación.
  const [errores, setErrores] = useState({});

  // Estado que controla el mensaje mostrado tras un envío exitoso.
  // Tema: Renderizado condicional
  // Solo se muestra cuando todo el formulario es válido.
  const [mensajeExito, setMensajeExito] = useState("");

  // Evento onChange de los inputs.
  // Tema: Eventos en React
  // Se ejecuta cada vez que el usuario escribe en un campo.
  // Su función es actualizar el estado y permitir corrección dinámica.
  const manejadorCambio = (evento) => {
    const { name, value } = evento.target;

    // Actualiza únicamente el campo que se está modificando.
    // Tema: Manejo de estado con spread operator
    setFormValues((prevValores) => ({
      ...prevValores,
      [name]: value,
    }));

    // Limpia el error del campo que el usuario está corrigiendo.
    // Tema: Corrección dinámica usando estado
    // Evita que el mensaje de error permanezca mientras se edita.
    setErrores((prevErrores) => ({
      ...prevErrores,
      [name]: "",
    }));

    // Oculta el mensaje de éxito si el usuario vuelve a modificar datos.
    setMensajeExito("");
  };

  // Función que valida los datos antes del envío del formulario.
  // Tema: Funciones en JavaScript + Validación de datos
  // Retorna true o false para decidir si el formulario puede enviarse.
  const validarFormulario = () => {
    const nuevosErrores = {};

    // Expresión regular para validar el formato del email.
    // Tema: Expresiones regulares (Regex)
    // Verifica estructura usuario@dominio.extensión
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!formValues.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio.";
    }

    if (!formValues.email.trim()) {
      nuevosErrores.email = "El email es obligatorio.";
    } else if (!emailRegex.test(formValues.email)) {
      nuevosErrores.email = "Ingresa un email válido.";
    }

    // Validación adicional del teléfono.
    // Tema: Validación de datos
    // Se controla que no esté vacío, que solo contenga números
    // y que tenga una longitud mínima aceptable.
    if (!formValues.telefono.trim()) {
      nuevosErrores.telefono = "El teléfono es obligatorio.";
    } else if (!/^[0-9\s]+$/.test(formValues.telefono)) {
      nuevosErrores.telefono = "El teléfono solo debe contener números.";
    } else if (formValues.telefono.replace(/\s/g, "").length < 7) {
      nuevosErrores.telefono = "El teléfono debe tener al menos 7 dígitos.";
    }

    if (!formValues.mensaje.trim()) {
      nuevosErrores.mensaje = "El mensaje es obligatorio.";
    }

    // Se actualiza el estado de errores para mostrarlos en la vista.
    setErrores(nuevosErrores);

    // Retorno booleano que determina si el formulario es válido.
    // Tema: Funciones con return
    return Object.keys(nuevosErrores).length === 0;
  };

  // Evento onSubmit del formulario.
  // Tema: Eventos en React
  // preventDefault evita la recarga de la página al enviar el formulario.
  const manejadorEnvio = (evento) => {
    evento.preventDefault();

    if (!validarFormulario()) {
      setMensajeExito("");
      return;
    }

    // Muestra mensaje de confirmación si todo es correcto.
    // Tema: Renderizado condicional
    setMensajeExito(
      "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto."
    );

    // Limpia los campos luego del envío.
    // Tema: Manejo de estado
    setFormValues({
      nombre: "",
      email: "",
      telefono: "",
      mensaje: "",
    });

    setErrores({});
  };

  return (
    <section className="contact-area pt-110 pb-110">
      <div className="container">
        <div className="container-inner-wrap">
          <div className="row justify-content-center justify-content-lg-between">
            <div className="col-lg-6 col-md-8 order-2 order-lg-0">

              {/* BLOQUE DE TÍTULO ORIGINAL (SE MANTIENE) */}
              {/* Tema: Contenido estático del componente */}
              <div className="contact-title mb-20">
                <h5 className="sub-title">Contacta con nosotros</h5>
                <h2 className="title">
                  Hablemos de preguntas<span>.</span>
                </h2>
              </div>

              <div className="contact-wrap-content">
                <p>
                  El perro doméstico es un descendiente directo del lobo. El
                  perro desciende de un antiguo lobo extinto y del gris moderno.
                </p>

                {/* Formulario controlado con evento onSubmit */}
                {/* Tema: Eventos en React */}
                <form className="contact-form" onSubmit={manejadorEnvio}>

                  <div className="form-grp">
                    <label>Su Nombre<span>*</span></label>
                    <input
                      type="text"
                      name="nombre"
                      placeholder="Juan Pérez..."
                      value={formValues.nombre}
                      onChange={manejadorCambio}
                    />
                    {/* Renderizado condicional del error */}
                    {/* Tema: Condicionales en JSX */}
                    {errores.nombre && (
                      <p className="text-danger mt-5">{errores.nombre}</p>
                    )}
                  </div>

                  <div className="form-grp">
                    <label>Su correo electrónico<span>*</span></label>
                    <input
                      type="email"
                      name="email"
                      placeholder="info@correo.com"
                      value={formValues.email}
                      onChange={manejadorCambio}
                    />
                    {errores.email && (
                      <p className="text-danger mt-5">{errores.email}</p>
                    )}
                  </div>

                  <div className="form-grp">
                    <label>Tu teléfono<span>*</span></label>
                    <input
                      type="text"
                      name="telefono"
                      placeholder="555 123 4567"
                      value={formValues.telefono}
                      onChange={manejadorCambio}
                    />
                    {errores.telefono && (
                      <p className="text-danger mt-5">{errores.telefono}</p>
                    )}
                  </div>

                  <div className="form-grp">
                    <label>Tu mensaje<span>*</span></label>
                    <textarea
                      name="mensaje"
                      placeholder="Opinión..."
                      value={formValues.mensaje}
                      onChange={manejadorCambio}
                    />
                    {errores.mensaje && (
                      <p className="text-danger mt-5">{errores.mensaje}</p>
                    )}
                  </div>

                  <button type="submit" className="btn rounded-btn">
                    Enviar Ahora
                  </button>

                  {/* Mensaje mostrado solo cuando el envío es exitoso */}
                  {/* Tema: Renderizado condicional */}
                  {mensajeExito && (
                    <p className="text-success mt-10">{mensajeExito}</p>
                  )}
                </form>
              </div>
            </div>

            <DireccionContacto />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormularioContacto;
