import React, { useState } from "react";
import "./FormDiv.css";
import FolioFiscalInput from "./FolioFiscalInput";
import TablaComprobante from "./TablaComprobante";
import imgCaptcha from "../Captcha1.jpg"; // Ajusta la ruta si es necesario.
import datosCFDI from "../datosCFDI.json"; // Importar el archivo JSON con los datos

const Formulario = () => {
  const [focused, setFocused] = useState({});
  const [datosFormulario, setDatosFormulario] = useState({
    folioFiscal: "",
    rfcEmisor: "",
    rfcReceptor: "",
    captcha: "",
  });
  const [validacion, setValidacion] = useState({ valido: false, mensaje: "" });
  const [datosCFDISeleccionados, setDatosCFDISeleccionados] = useState(null);

  const handleFocus = (campo) => setFocused({ ...focused, [campo]: true });
  const handleBlur = (campo) => setFocused({ ...focused, [campo]: false });

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "rfcEmisor" || id === "rfcReceptor") {
      setDatosFormulario({
        ...datosFormulario,
        [id]: value.toUpperCase(), // Forzar mayúsculas
      });
    } else {
      setDatosFormulario((prev) => ({ ...prev, [id]: value }));
    }
  };

  const validarDatos = (e) => {
    e.preventDefault();
    const { folioFiscal, rfcEmisor, rfcReceptor, captcha } = datosFormulario;

    // Validación básica
    if (
      folioFiscal.length === 36 &&
      folioFiscal.indexOf("_") === -1 &&
      rfcEmisor &&
      rfcReceptor &&
      captcha.length > 0
    ) {
      if(captcha == 77816){
         // Buscar el folio en el archivo JSON
         const resultado = datosCFDI.find(
         (dato) =>
         dato.folioFiscal === folioFiscal &&
         dato.rfcEmisor === rfcEmisor &&
         dato.rfcReceptor === rfcReceptor
         );

        if (resultado) {
         setDatosCFDISeleccionados(resultado);
         setValidacion({ valido: true, mensaje: "" });
        } else {
         setDatosCFDISeleccionados(null);
         setValidacion({
         valido: false,
         mensaje: "No existe, valide los datos ingresados.",
         });
        }  
      }else{
        setDatosCFDISeleccionados(null);
        setValidacion({
        valido: false,
        mensaje: "Captcha incorrecto. Verifique la imagen.",
      });
      }
      
    } else {
      setDatosCFDISeleccionados(null);
      setValidacion({
        valido: false,
        mensaje: "Los datos ingresados son incorrectos. Verifique e intente de nuevo.",
      });
    }
  };

  return (
    <div className="form-container">
      <div className="letras1-div">
        <h3 className="letras1">
          A través de esta opción, usted podrá verificar si el comprobante fue
          certificado por el SAT
        </h3>
      </div>
      <form className="form" onSubmit={validarDatos}>
        <div className="input-container">
          <label htmlFor="folioFiscal">Folio Fiscal*:</label>
          <FolioFiscalInput
            value={datosFormulario.folioFiscal}
            onChange={(value) =>
              setDatosFormulario((prev) => ({ ...prev, folioFiscal: value }))
            }
            handleFocus={handleFocus}
            handleBlur={handleBlur}
            focused={focused.folioFiscal}
          />
        </div>
        <div className="input-container">
          <label htmlFor="rfcEmisor">RFC emisor*:</label>
          <input
            type="text"
            id="rfcEmisor"
            value={datosFormulario.rfcEmisor}
            onChange={handleChange}
            onFocus={() => handleFocus("rfcEmisor")}
            onBlur={() => handleBlur("rfcEmisor")}
            className={focused.rfcEmisor ? "input-focused" : ""}
          />
        </div>
        <div className="input-container">
          <label htmlFor="rfcReceptor">RFC receptor*:</label>
          <input
            type="text"
            id="rfcReceptor"
            value={datosFormulario.rfcReceptor}
            onChange={handleChange}
            onFocus={() => handleFocus("rfcReceptor")}
            onBlur={() => handleBlur("rfcReceptor")}
            className={focused.rfcReceptor ? "input-focused" : ""}
          />
        </div>
        <div className="input-container">
          <img src={imgCaptcha} alt="Captcha" className="captcha-image" />
        </div>
        <div className="input-container">
          <label htmlFor="captcha">
            Proporcione los dígitos de la imagen<span className="digitos2">*:</span>
          </label>
          <input
            type="text"
            id="captcha"
            value={datosFormulario.captcha}
            onChange={handleChange}
            onFocus={() => handleFocus("captcha")}
            onBlur={() => handleBlur("captcha")}
            className={focused.captcha ? "input-focused" : ""}
          />
        </div>
        <div className="input-container sub-btn">
          <button type="submit" className="submit-button">
            Verificar CFDI
          </button>
        </div>
      </form>
      <p className="DatosObligatorios">* Datos obligatorios</p>

      {/* Mostrar tabla o mensaje de error */}
      {validacion.valido && datosCFDISeleccionados ? (
        <TablaComprobante datos={datosCFDISeleccionados} />
      ) : (
        validacion.mensaje && <p className="error-message">{validacion.mensaje}</p>
      )}
    </div>
  );
};

export default Formulario;

