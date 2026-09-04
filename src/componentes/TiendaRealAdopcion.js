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
                <Link to="/shop-details" className="btn">
                  Adoptar <img src="img/icon/w_pawprint.png" alt="" />
                </Link>
              </div>
              <div className="adoption-shop-content">
                <h4 className="title">
                  <Link to="/shop-details">Capitán</Link>
                </h4>
                <div className="adoption-meta">
                  <ul>
                    <li>
                      <i className="fas fa-cog" />
                      <a href="/#">Pastor Siberiano</a>
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" /> Nacimiento : 2021
                    </li>
                  </ul>
                </div>
                <div className="adoption-rating">
                  <ul>
                    <li className="rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </li>
                    <li className="price">
                      Precio : <span>Gratis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="adoption-shop-item">
              <div className="adoption-shop-thumb">
                <img src="img/product/adoption_shop_thumb02.jpg" alt="" />
                <Link to="/shop-details" className="btn">
                  Adoptar <img src="img/icon/w_pawprint.png" alt="" />
                </Link>
              </div>
              <div className="adoption-shop-content">
                <h4 className="title">
                  <Link to="/shop-details">Alessia</Link>
                </h4>
                <div className="adoption-meta">
                  <ul>
                    <li>
                      <i className="fas fa-cog" />
                      <a href="/#">Golden Retriever</a>
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" /> Nacimiento : 2020
                    </li>
                  </ul>
                </div>
                <div className="adoption-rating">
                  <ul>
                    <li className="rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </li>
                    <li className="price">
                      Precio : <span>Gratis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="adoption-shop-item">
              <div className="adoption-shop-thumb">
                <img src="img/product/adoption_shop_thumb03.jpg" alt="" />
                <Link to="/shop-details" className="btn">
                  Adoptar <img src="img/icon/w_pawprint.png" alt="" />
                </Link>
              </div>
              <div className="adoption-shop-content">
                <h4 className="title">
                  <Link to="/shop-details">Charlie</Link>
                </h4>
                <div className="adoption-meta">
                  <ul>
                    <li>
                      <i className="fas fa-cog" />
                      <a href="/#">Pastor Alemán</a>
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" /> Nacimiento : 2020
                    </li>
                  </ul>
                </div>
                <div className="adoption-rating">
                  <ul>
                    <li className="rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </li>
                    <li className="price">
                      Precio : <span>Gratis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="adoption-shop-item">
              <div className="adoption-shop-thumb">
                <img src="img/product/adoption_shop_thumb04.jpg" alt="" />
                <Link to="/shop-details" className="btn">
                  Adoptar <img src="img/icon/w_pawprint.png" alt="" />
                </Link>
              </div>
              <div className="adoption-shop-content">
                <h4 className="title">
                  <Link to="/shop-details">Lassi</Link>
                </h4>
                <div className="adoption-meta">
                  <ul>
                    <li>
                      <i className="fas fa-cog" />
                      <a href="/#">Collie</a>
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" /> Nacimiento : 2021
                    </li>
                  </ul>
                </div>
                <div className="adoption-rating">
                  <ul>
                    <li className="rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </li>
                    <li className="price">
                      Precio : <span>Gratis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="adoption-shop-item">
              <div className="adoption-shop-thumb">
                <img src="img/product/adoption_shop_thumb05.jpg" alt="" />
                <Link to="/shop-details" className="btn">
                  Adoptar <img src="img/icon/w_pawprint.png" alt="" />
                </Link>
              </div>
              <div className="adoption-shop-content">
                <h4 className="title">
                  <Link to="/shop-details">Cuto</Link>
                </h4>
                <div className="adoption-meta">
                  <ul>
                    <li>
                      <i className="fas fa-cog" />
                      <a href="/#">Husky Siberiano</a>
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" /> Nacimiento : 2021
                    </li>
                  </ul>
                </div>
                <div className="adoption-rating">
                  <ul>
                    <li className="rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </li>
                    <li className="price">
                      Precio : <span>Gratis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="adoption-shop-item">
              <div className="adoption-shop-thumb">
                <img src="img/product/adoption_shop_thumb06.jpg" alt="" />
                <Link to="/shop-details" className="btn">
                  Adoptar <img src="img/icon/w_pawprint.png" alt="" />
                </Link>
              </div>
              <div className="adoption-shop-content">
                <h4 className="title">
                  <Link to="/shop-details">Chocolate</Link>
                </h4>
                <div className="adoption-meta">
                  <ul>
                    <li>
                      <i className="fas fa-cog" />
                      <a href="/#">Golden Retriever</a>
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" /> Nacimiento : 2021
                    </li>
                  </ul>
                </div>
                <div className="adoption-rating">
                  <ul>
                    <li className="rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </li>
                    <li className="price">
                      Precio : <span>Gratis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TiendaAdopcion;
