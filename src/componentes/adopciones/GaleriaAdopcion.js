import React from "react";
import Slider from "react-slick";

function GaleriaAdopcion() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 1000,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          speed: 1000,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          speed: 1000,
        },
      },
    ],
  };
  return (
    <section className="breeder-gallery-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-0 order-lg-2">
            <Slider className="breeder-gallery-active" {...settings}>
              <div className="breeder-gallery-item">
                <img src="img/images/breeder_gallery01.jpg" alt="" />
              </div>
              <div className="breeder-gallery-item">
                <img src="img/images/breeder_gallery02.jpg" alt="" />
              </div>
              <div className="breeder-gallery-item">
                <img src="img/images/breeder_gallery03.jpg" alt="" />
              </div>
              <div className="breeder-gallery-item">
                <img src="img/images/breeder_gallery04.jpg" alt="" />
              </div>
            </Slider>
          </div>
          <div className="col-lg-6">
            <div className="adoption-content">
              <h5 className="sub-title">Conoce como Adoptar</h5>
              <h2 className="title">
                Requisitos para <span>Adoptar</span>
              </h2>
              <div className="adoption-list">
                <ul>
                  <li>
                    <i className="flaticon-tick" /> Ser mayor de edad (18 años o
                    más).
                  </li>
                  <li>
                    <i className="flaticon-tick" /> Contar con espacio adecuado
                    y tiempo para el cuidado.
                  </li>
                  <li>
                    <i className="flaticon-tick" /> Firmar un compromiso de
                    tenencia responsable.
                  </li>
                  <li>
                    <i className="flaticon-tick" /> Indicar datos personales,
                    experiencia previa con mascotas y condiciones del hogar.
                  </li>
                  <li>
                    <i className="flaticon-tick" /> Completar un formulario en
                    línea o presencial en la organización PERRUNOS.
                  </li>
                  <li>
                    <i className="flaticon-tick" /> Quere mucho a los
                    perritos...
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GaleriaAdopcion;
