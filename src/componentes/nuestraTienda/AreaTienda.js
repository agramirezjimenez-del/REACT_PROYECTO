import React from "react";
import { Link } from "react-router-dom";

function AreaTienda() {
  return (
    <div className="shop-area pt-110 pb-110">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-8 order-2 order-lg-0">
            <aside className="shop-sidebar">
              <div className="widget">
                <div className="sidebar-search">
                  <form>
                    <input type="text" placeholder="Buscar ..." />
                    <button type="submit">
                      <i className="fa fa-search" />
                    </button>
                  </form>
                </div>
              </div>
              <div className="widget">
                <h4 className="sidebar-title">Categoria</h4>
                <div className="shop-cat-list">
                  <ul>
                    <li>
                      <Link to="/shop">
                        Chirriantes <span>+</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop">
                        Comida para perros <span>+</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop">
                        kit para perros <span>+</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop">
                        Casas de perro <span>+</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop">
                        Trajes de seguridad <span>+</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop">
                        Protectores <span>+</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget shop-widget-banner">
                <Link to="/shop">
                  <img src="img/product/shop_add.jpg" alt="" />
                </Link>
              </div>
            </aside>
          </div>
          <div className="col-lg-9">
            <div className="shop-wrap">
              <h4 className="title">Comercio</h4>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-sm-6">
                  <div className="shop-item mb-55">
                    <div className="shop-thumb">
                      <Link to="/shop-details">
                        <img src="img/product/shop_item01.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="shop-content">
                      <span>Juguetes</span>
                      <h4 className="title">
                        <Link to="/shop-details">Angry Bird</Link>
                      </h4>
                      <div className="shop-content-bottom">
                        <span className="price">S/ 28.00</span>
                        <span className="add-cart">
                          <Link to="/shop-details">ADD +</Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="shop-item mb-55">
                    <div className="shop-thumb">
                      <Link to="/shop-details">
                        <img src="img/product/shop_item02.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="shop-content">
                      <span>Juguetes</span>
                      <h4 className="title">
                        <Link to="/shop-details">Pelota Colores</Link>
                      </h4>
                      <div className="shop-content-bottom">
                        <span className="price">S/ 19.00</span>
                        <span className="add-cart">
                          <Link to="shop-details">ADD +</Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="shop-item mb-55">
                    <div className="shop-thumb">
                      <Link to="/shop-details">
                        <img src="img/product/shop_item03.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="shop-content">
                      <span>Juguetes</span>
                      <h4 className="title">
                        <Link to="/shop-details">Armadillo de Lana</Link>
                      </h4>
                      <div className="shop-content-bottom">
                        <span className="price">S/ 29.00</span>
                        <span className="add-cart">
                          <Link to="/shop-details">ADD +</Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="shop-item mb-55">
                    <div className="shop-thumb">
                      <Link to="/shop-details">
                        <img src="img/product/shop_item04.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="shop-content">
                      <span>Juguetes</span>
                      <h4 className="title">
                        <Link to="/shop-details">Yoda en Cuna</Link>
                      </h4>
                      <div className="shop-content-bottom">
                        <span className="price">S/ 49.00</span>
                        <span className="add-cart">
                          <Link to="/shop-details">ADD +</Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="shop-item mb-55">
                    <div className="shop-thumb">
                      <Link to="/shop-details">
                        <img src="img/product/shop_item05.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="shop-content">
                      <span>Juguetes</span>
                      <h4 className="title">
                        <Link to="/shop-details">Conejo</Link>
                      </h4>
                      <div className="shop-content-bottom">
                        <span className="price">S/ 9.00</span>
                        <span className="add-cart">
                          <Link to="/shop-details">ADD +</Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="shop-item mb-55">
                    <div className="shop-thumb">
                      <Link to="/shop-details">
                        <img src="img/product/shop_item06.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="shop-content">
                      <span>Juguetes</span>
                      <h4 className="title">
                        <Link to="/shop-details">Dinosaurio</Link>
                      </h4>
                      <div className="shop-content-bottom">
                        <span className="price">S/ 16.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="shop-item mb-55">
                    <div className="shop-thumb">
                      <Link to="/shop-details">
                        <img src="img/product/shop_item07.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="shop-content">
                      <span>Juguetes</span>
                      <h4 className="title">
                        <Link to="/shop-details">Búho</Link>
                      </h4>
                      <div className="shop-content-bottom">
                        <span className="price">S/ 18.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="shop-item mb-55">
                    <div className="shop-thumb">
                      <Link to="/shop-details">
                        <img src="img/product/shop_item08.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="shop-content">
                      <span>Juguetes</span>
                      <h4 className="title">
                        <Link to="/shop-details">Tortuga</Link>
                      </h4>
                      <div className="shop-content-bottom">
                        <span className="price">S/ 12.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="shop-item mb-55">
                    <div className="shop-thumb">
                      <Link to="/shop-details">
                        <img src="img/product/shop_item09.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="shop-content">
                      <span>Juguetes</span>
                      <h4 className="title">
                        <Link to="/shop-details">Canasta Animales</Link>
                      </h4>
                      <div className="shop-content-bottom">
                        <span className="price">S/ 52.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shop-page-meta">
                <div className="shop-pagination">
                  <ul>
                    <li className="active">
                      <Link to="/shop">1</Link>
                    </li>
                    <li>
                      <Link to="/shop">2</Link>
                    </li>
                    <li>
                      <Link to="/shop">
                        <i className="fas fa-angle-double-right" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AreaTienda;
