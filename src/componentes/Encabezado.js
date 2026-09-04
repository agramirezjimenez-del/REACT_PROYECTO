import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import $ from "jquery";

function Encabezado() {
  const location = useLocation();

  useEffect(() => {
    if ($(".menu-area li.menu-item-has-children ul").length) {
      $(".menu-area .navigation li.menu-item-has-children").append(
        '<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'
      );
    }

    if ($(".mobile-menu").length) {
      var mobileMenuContent = $(".menu-area .main-menu").html();
      $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);

      // Dropdown Button (Menú móvil)
      $(".mobile-menu li.menu-item-has-children .dropdown-btn").on(
        "click",
        function () {
          $(this).toggleClass("open");
          $(this).prev("ul").slideToggle(500);
        }
      );

      // Mostrar Menú Móvil
      $(".mobile-nav-toggler").on("click", function () {
        $("body").addClass("mobile-menu-visible");
      });

      // Ocultar Menú Móvil
      $(".menu-backdrop, .mobile-menu .close-btn").on("click", function () {
        $("body").removeClass("mobile-menu-visible");
      });
    }

    // Cerrar menú móvil al hacer clic en un enlace (si se usa el menú móvil)
    $(".navbar-nav li a").on("click", function () {
      $("body").removeClass("mobile-menu-visible"); // Cerramos el menú
      $(".navbar-collapse").removeClass("show"); // Si aplica para un toggle de Bootstrap
    });

    // Toggle de la Búsqueda
    $(".header-search > a").on("click", function () {
      $(".search-popup-wrap").slideToggle();
      return false;
    });

    $(".search-close").on("click", function () {
      $(".search-popup-wrap").slideUp(500);
    });
  }, []); // Se ejecuta solo una vez al montar el componente

  const isActive = (path) =>
    location.pathname === path ||
    (path === "/" && location.pathname === "/home-two");

  return (
    <header>
      <div id="sticky-header" className="menu-area">
        <div className="container custom-container">
          <div className="row">
            <div className="col-12">
              <div className="mobile-nav-toggler">
                <i className="fas fa-bars" />
              </div>
              <div className="menu-wrap">
                <nav className="menu-nav show">
                  <div className="logo">
                    <Link to="/">
                      <img src="img/logo/logo.png" alt="" />
                    </Link>
                  </div>
                  <div className="navbar-wrap main-menu d-none d-lg-flex">
                    <ul className="navigation">
                      <li
                        className={
                          isActive("/")
                            ? "active menu-item-has-children"
                            : "menu-item-has-children"
                        }
                      >
                        <Link to="/">Inicio</Link>
                      </li>
                      <li className={isActive("/doglist") ? "active" : ""}>
                        <Link to="/doglist">Lista de Perritos</Link>
                      </li>
                      <li
                        className={
                          isActive("/shop") || isActive("/shop-details")
                            ? "active menu-item-has-children"
                            : "menu-item-has-children"
                        }
                      >
                        <Link to="/shop">Tienda</Link>
                      </li>

                      <li className={isActive("/adoption") ? "active" : ""}>
                        <Link to="/adoption">Adopción</Link>
                      </li>
                      <li className={isActive("/contacts") ? "active" : ""}>
                        <Link to="/contacts">Contáctenos</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="header-action d-none d-md-block">
                    <ul>
                      <li className="header-btn">
                        <Link to="/adoption" className="btn">
                          Adopta aquí{" "}
                          <img src="img/icon/w_pawprint.png" alt="" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="mobile-menu">
                <nav className="menu-box">
                  <div className="close-btn">
                    <i className="fas fa-times" />
                  </div>
                  <div className="nav-logo">
                    <Link to="/">
                      <img src="img/logo/logo.png" alt="" title="true" />
                    </Link>
                  </div>
                  <div className="menu-outer"></div>
                </nav>
              </div>
              <div className="menu-backdrop" />
            </div>
          </div>
        </div>
        <div
          className="header-shape"
          style={{ backgroundImage: "url('img/bg/header_shape.png')" }}
        />
      </div>

      <div
        className="search-popup-wrap"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="search-close">
          <span>
            <i className="fas fa-times" />
          </span>
        </div>
        <div className="search-wrap text-center">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="title">Buscar...</h2>
                <div className="search-form">
                  <form>
                    <input
                      type="text"
                      name="search"
                      placeholder="Type keywords here"
                    />
                    <button className="search-btn">
                      <i className="fas fa-search" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Encabezado;
