import React from 'react';
import './Barnav.css';

function Barnav() {
  return (
    <div className="Barnav">
      
      <div className="Barnav-1">
      <div className='bar1'>
      <div className="logo-container">
        <a href="https://www.gob.mx/">
        <img
            src={require('../logonav.png')}
            alt="Gobierno de México"
            className="logo"
          />
        </a>
          
        </div>
        <div className="menu">
          <a href="https://www.gob.mx/tramites" className="menu-item">
            Trámites
          </a>
          <a href="https://www.gob.mx/gobierno" className="menu-item">
            Gobierno
          </a>
          <a href="https://www.gob.mx/busqueda" className="menu-item search-icon">
           <img src={require('../lupa-icon.png')} alt="lupa" />
          </a>
        </div>
      </div>
      </div>
      <div className="Barnav-2">
        <div className="title"><p>FACTURA ELECTRÓNICA</p></div>
      </div>
    </div>
  );
}

export default Barnav;
