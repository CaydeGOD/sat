import React from "react";
import "./TablaComprobante.css";

const TablaComprobante = ({ datos }) => {
  const handleImprimir = () => {
    // Guardar los datos en Local Storage
    localStorage.setItem("datosCFDI", JSON.stringify(datos));
    // Abrir nueva pestaña
    window.open("/ResultadosCFDI", "_blank");
  };

  return (
    <div className="tabla-container">
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
            <td>{datos.rfcEmisor}</td>
            <td>TireForceMX S.A de C.V</td>
            <td>{datos.rfcReceptor}</td>
            <td>{datos.razonSocialReceptor}</td>
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
            <td>{datos.folioFiscal}</td>
            <td>{datos.fechaExpedicion}</td>
            <td>{datos.fechaCertificacion}</td>
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
            <td>{datos.totalCFDI}</td>
            <td>Ingreso</td>
            <td>Vigente</td>
            <td>Sin cancelación</td>
          </tr>
        </tbody>
      </table>
      <div className="imprimir-btn">
        <button onClick={handleImprimir} className="imprimir-button">
          Imprimir
        </button>
      </div>
    </div>
  );
};

export default TablaComprobante;
