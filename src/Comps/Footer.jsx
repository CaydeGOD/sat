import React from "react";
import "./Footer.css"; // Archivo CSS para estilos

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Sección del logo y nombre */}
        <div className="footer-section">
          <div className="footer-logo">
            <img
              src={require('../logofooter.png')}
              alt="Gobierno de México"
              className="logo-image"
            />
            
          </div>
          
        </div>

        {/* Sección de enlaces */}
        <div className="footer-section">
          <p className="footer-heading">Enlaces</p>
          <ul className="footer-links">
            <li><a href="http://www.participa.gob.mx/" className="footer-links">Participa</a></li>
            <li><a href="https://www.gob.mx/publicaciones"
            className="footer-links">Publicaciones Oficiales</a></li>
            <li><a href="http://www.ordenjuridico.gob.mx/"
            className="footer-links">Marco Jurídico</a></li>
            <li><a href="https://consultapublicamx.inai.org.mx/vut-web/"
            className="footer-links">Plataforma Nacional de Transparencia</a></li>
          </ul>
        </div>

        {/* Sección de información */}
        <div className="footer-section">
          <h3 className="footer-heading centrao">¿Qué es gob.mx?</h3>
          <p className="p-footer">
            Es el portal único de trámites, información y participación ciudadana. <a className="a-footer" href="https://www.gob.mx/que-es-gobmx">Leer más</a>
          </p>
          <ul className="footer-links">
            <li><a href="https://datos.gob.mx/"
            className="footer-links">Portal de datos abiertos</a></li>
            <li><a href="https://www.gob.mx/accesibilidad"
            className="footer-links">Declaración de accesibilidad</a></li>
            <li><a href="https://www.gob.mx/privacidadintegral"
            className="footer-links">Aviso de privacidad integral</a></li>
            <li><a href="https://www.gob.mx/privacidadsimplificado"
            className="footer-links">Aviso de privacidad simplificado</a></li>
            <li><a href="https://www.gob.mx/terminos#medidas-seguridad-informacion"
            className="footer-links">Términos y condiciones</a></li>
            <li><a href="https://www.gob.mx/terminos#medidas-seguridad-informacion"
            className="footer-links">Política de seguridad</a></li>
            <li><a href="https://www.gob.mx/sitemap"
            className="footer-links">Mapa de sitio</a></li>
          </ul>
        </div>

        {/* Sección de denuncia */}
        <div className="footer-section">
          
          <h3 className="footer-heading Denuncia"><a href="https://www.gob.mx/tramites/ficha/presentacion-de-quejas-y-denuncias-en-la-sfp/SFP54">
          Denuncia contra servidores públicos
          </a></h3>
          <div className="siguenos">
            <h4>Síguenos en</h4>
            <div className="footer-social">
              <span><a href="https://www.facebook.com/gobmexico/"><img className='logored' src={require('../fbook_icon.png')} alt="logo"/></a></span>
              <span><a href="https://twitter.com/GobiernoMX"><img className='logored' src={require('../twi_icon.png')} alt="logo" /></a></span>
            </div>
          </div>
        </div>
      </div>

      {/* Decoración de textura */}
      <div className="footer-decor"></div>

      {/* Espacio color crema */}
      <div className="footer-cream-space"></div>
    </footer>
  );
};

export default Footer;
