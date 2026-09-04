import React from "react";
import Slider from "react-slick";

function Testimonio() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    autoplay: false,
    arrows: false,
    autoplaySpeed: 4000,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
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
    <section className="testimonial-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9">
            <div className="section-title text-center mb-65">
              <div className="section-icon">
                <img src="img/icon/pawprint.png" alt="" />
              </div>
              <h5 className="sub-title">Testimonios</h5>
              <h2 className="title">Personas felices que adoptaron</h2>
              <p>
                Si alguna vez pensaste en tener un amigo que nunca te juzgue y
                siempre esté a tu lado, aquí lo encontrarás. La adopción es el
                inicio de una amistad para toda la vida.
              </p>
            </div>
          </div>
        </div>
        <Slider className="row testimonial-active" {...settings}>
          <div className="col">
            <div className="testimonial-item">
              <div className="testi-avatar-thumb">
                <img src="img/images/testi_avatar01.png" alt="" />
              </div>
              <div className="testi-content">
                <p>
                  “ Adoptar es un acto de amor y compromiso. No se trata solo de
                  tener una mascota, sino de sumar un nuevo miembro a tu
                  familia. ”...
                </p>
                <div className="testi-avatar-info">
                  <h5 className="title">Carmen Gómez D.</h5>
                  <span>Estudiante de Administración</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="testimonial-item">
              <div className="testi-avatar-thumb">
                <img src="img/images/testi_avatar02.png" alt="" />
              </div>
              <div className="testi-content">
                <p>
                  “ Los perros no necesitan lujos, solo un lugar seguro,
                  alimento y mucho amor. Tú puedes ser la persona que les brinde
                  todo eso y más. ”
                </p>
                <div className="testi-avatar-info">
                  <h5 className="title">Jorge Ampuero Q.</h5>
                  <span>Independiente</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="testimonial-item">
              <div className="testi-avatar-thumb">
                <img src="img/images/testi_avatar01.png" alt="" />
              </div>
              <div className="testi-content">
                <p>
                  “ Los perros que esperan aquí no buscan perfección, solo
                  alguien que los acepte tal como son: fieles, juguetones y
                  siempre dispuestos a dar cariño. ”
                </p>
                <div className="testi-avatar-info">
                  <h5 className="title">Liliana Espinoza E.</h5>
                  <span>Ama de casa</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="testimonial-item">
              <div className="testi-avatar-thumb">
                <img src="img/images/testi_avatar02.png" alt="" />
              </div>
              <div className="testi-content">
                <p>
                  “ Cuando adoptas, no solo salvas una vida: abres espacio para
                  que otro perro pueda ser rescatado. Tu decisión tiene un
                  impacto enorme en la cadena de esperanza. ”
                </p>
                <div className="testi-avatar-info">
                  <h5 className="title">Daniel López A.</h5>
                  <span>Comerciante</span>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Testimonio;
