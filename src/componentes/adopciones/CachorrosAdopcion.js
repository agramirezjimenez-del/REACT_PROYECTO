import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button type="button" className={className} onClick={onClick}>
      <img src="img/icon/arrow.png" alt="prev" />
    </button>
  );
}
function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <button type="button" className={className} onClick={onClick}>
      <img src="img/icon/arrow.png" alt="next" />
    </button>
  );
}

function CachorrosAdopcion() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: false,
    arrows: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 1000,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
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
    <section className="adoption-area-two pt-110 pb-110">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9">
            <div className="section-title text-center mb-65">
              <div className="section-icon">
                <img src="img/icon/pawprint.png" alt="" />
              </div>
              <h5 className="sub-title">Conócelos</h5>
              <h2 className="title">Cachorros en espera de adopción</h2>
              <p>
                Nuestros peludos están vacunados, desparasitados y listos para
                comenzar una nueva etapa. Lo único que necesitan es alguien como
                tú, dispuesto a darles una segunda oportunidad.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container custom-container">
        <Slider className="row adopt-active" {...settings}>
          <div className="col-xl">
            <div className="adoption-item">
              <div className="adopt-thumb">
                <Link to="/contacts">
                  <img src="img/images/adop_img01.png" alt="" />
                </Link>
                <span className="status">Libre</span>
              </div>
              <div className="adopt-content">
                <div className="adopt-date">
                  <i className="far fa-calendar-alt" /> Nació : 2021
                </div>
                <h3 className="title">
                  <Link to="/contacts">Golden Retriever</Link>
                </h3>
                <p>
                  El Golden Retriever es un perro de caza de tamaño mediano a
                  grande.
                </p>
                <Link to="/contacts" className="read-more">
                  Adoptar <img src="img/icon/pawprint.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl">
            <div className="adoption-item">
              <div className="adopt-thumb">
                <Link to="/contacts">
                  <img src="img/images/adop_img02.png" alt="" />
                </Link>
                <span className="status">Libre</span>
              </div>
              <div className="adopt-content">
                <div className="adopt-date">
                  <i className="far fa-calendar-alt" /> Nació : 2021
                </div>
                <h3 className="title">
                  <Link to="/contacts">German Sharped</Link>
                </h3>
                <p>El pastor alemán es una raza de tamaño mediano a grande.</p>
                <Link to="/contacts" className="read-more">
                  Adoptar <img src="img/icon/pawprint.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl">
            <div className="adoption-item">
              <div className="adopt-thumb">
                <Link to="/contacts">
                  <img src="img/images/adop_img03.png" alt="" />
                </Link>
                <span className="status">Libre</span>
              </div>
              <div className="adopt-content">
                <div className="adopt-date">
                  <i className="far fa-calendar-alt" /> Nació : 2021
                </div>
                <h3 className="title">
                  <Link to="/contacts">Siberian Husky</Link>
                </h3>
                <p>
                  El husky siberiano es una raza de perro de trineo de trabajo
                  de tamaño mediano.
                </p>
                <Link to="/contacts" className="read-more">
                  Adoptar <img src="img/icon/pawprint.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl">
            <div className="adoption-item">
              <div className="adopt-thumb">
                <Link to="/contacts">
                  <img src="img/images/adop_img04.png" alt="" />
                </Link>
                <span className="status">Libre</span>
              </div>
              <div className="adopt-content">
                <div className="adopt-date">
                  <i className="far fa-calendar-alt" /> Nació : 2021
                </div>
                <h3 className="title">
                  <Link to="/contacts">French Bulldog</Link>
                </h3>
                <p>
                  El Bulldog Francés es una raza de perro doméstico, criado para
                  ser compañero.
                </p>
                <Link to="/contacts" className="read-more">
                  Adoptar <img src="img/icon/pawprint.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl">
            <div className="adoption-item">
              <div className="adopt-thumb">
                <Link to="/contacts">
                  <img src="img/images/adop_img05.png" alt="" />
                </Link>
                <span className="status">Libre</span>
              </div>
              <div className="adopt-content">
                <div className="adopt-date">
                  <i className="far fa-calendar-alt" /> Nació : 2021
                </div>
                <h3 className="title">
                  <Link to="/contacts">Siberian Husky</Link>
                </h3>
                <p>
                  El Bulldog Francés es una raza de perro doméstico, criado para
                  ser compañero..
                </p>
                <Link to="/contacts" className="read-more">
                  Adoptar <img src="img/icon/pawprint.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default CachorrosAdopcion;
