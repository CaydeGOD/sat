import React, { useEffect, useState } from "react";

import './ResultadosCFDI.css'
const ResultadosCFDI = () => {
  const [datosCFDI, setDatosCFDI] = useState(null);

  useEffect(() => {
    // Recuperar datos del Local Storage
    const datos = localStorage.getItem("datosCFDI");
    if (datos) {
      setDatosCFDI(JSON.parse(datos));
    }
  }, []);

  if (!datosCFDI) {
    return <div>Cargando datos...</div>; // Mostrar un mensaje mientras se cargan los datos
  }

  return (
    <div className="resultados-container">
      <header className="resultados-header">
        <img 
          src={require('../Logo_SHCP_SAT-.jpg')} // Ruta del logo de Hacienda
          alt="Hacienda Logo"
          className="logoSat"
        />
      </header>

      <h2 className="resultados-titulo">
        Verificación de comprobantes fiscales digitales por internet
      </h2>
     
      <table className="tabla-comprobante">
        <thead>
          <tr>
            <th>RFC del emisor</th>
            <th>Nombre o razón social del emisor</th>
            <th>RFC del receptor</th>
            <th>Nombre o razón social del receptor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{datosCFDI.rfcEmisor}</td>
            <td>TireForceMX S.A de C.V</td>
            <td>{datosCFDI.rfcReceptor}</td>
            <td>{datosCFDI.razonSocialReceptor}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>Folio fiscal</th>
            <th>Fecha de expedicion</th>
            <th>Fecha certificacion SAT</th>
            <th>PAC que certificó</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{datosCFDI.folioFiscal}</td>
            <td>{datosCFDI.fechaExpedicion}</td>
            <td>{datosCFDI.fechaCertificacion}</td>
            <td>EDICOM</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>Total del CFDI</th>
            <th>Efecto del comprobante</th>
            <th>Estado CFDI</th>
            <th>Estatus de cancelación</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{datosCFDI.totalCFDI}</td>
            <td>Ingreso</td>
            <td>Vigente</td>
            <td>Sin cancelación</td>
          </tr>
        </tbody>
      </table>

      <div className="imprimir-btn2">
        <button onClick={() => window.print()} className="imprimir-button2">
          Imprimir
        </button>
      </div>
    </div>
  );
};

export default ResultadosCFDI;
