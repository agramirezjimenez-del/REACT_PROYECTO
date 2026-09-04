import React from "react";
import { Link } from "react-router-dom";

function TiendaAdopcion() {
  return (
    <section className="adoption-shop-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9">
            <div className="section-title text-center mb-65">
              <div className="section-icon">
                <img src="img/icon/pawprint.png" alt="" />
              </div>
              <h2 className="title">Perritos en espera de adopción</h2>
              <p>
                Nuestros peludos están vacunados, desparasitados y listos para
                comenzar una nueva etapa. Lo único que necesitan es alguien como
                tú, dispuesto a darles una segunda oportunidad.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="adoption-shop-item">
              <div className="adoption-shop-thumb">
                <img src="img/product/adoption_shop_thumb01.jpg" alt="" />
                <Link to="/doglist" className="btn">
                  Más info <img src="img/icon/w_pawprint.png" alt="" />
                </Link>
              </div>
              <div className="adoption-shop-content">
                <h4 className="title">Capitán</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="adoption-shop-item">
              <div className="adoption-shop-thumb">
                <img src="img/product/adoption_shop_thumb02.jpg" alt="" />
                <Link to="/doglist" className="btn">
                  Más info <img src="img/icon/w_pawprint.png" alt="" />
                </Link>
              </div>
              <div className="adoption-shop-content">
                <h4 className="title">Alessia</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="adoption-shop-item">
              <div className="adoption-shop-thumb">
                <img src="img/product/adoption_shop_thumb03.jpg" alt="" />
                <Link to="/doglist" className="btn">
                  Más info <img src="img/icon/w_pawprint.png" alt="" />
                </Link>
              </div>
              <div className="adoption-shop-content">
                <h4 className="title">Charlie</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="adoption-shop-item">
              <div className="adoption-shop-thumb">
                <img src="img/product/adoption_shop_thumb04.jpg" alt="" />
                <Link to="/doglist" className="btn">
                  Más info <img src="img/icon/w_pawprint.png" alt="" />
                </Link>
              </div>
              <div className="adoption-shop-content">
                <h4 className="title">Lassi</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="adoption-shop-item">
              <div className="adoption-shop-thumb">
                <img src="img/product/adoption_shop_thumb05.jpg" alt="" />
                <Link to="/doglist" className="btn">
                  Más info <img src="img/icon/w_pawprint.png" alt="" />
                </Link>
              </div>
              <div className="adoption-shop-content">
                <h4 className="title">Cuto</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="adoption-shop-item">
              <div className="adoption-shop-thumb">
                <img src="img/product/adoption_shop_thumb06.jpg" alt="" />
                <Link to="/doglist" className="btn">
                  Más info <img src="img/icon/w_pawprint.png" alt="" />
                </Link>
              </div>
              <div className="adoption-shop-content">
                <h4 className="title">Chocolate</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TiendaAdopcion;
