import './Encabezado.css';
import React from 'react'

function Encabezado() {
  return (
    <div className='Encabezado'>
       <div>
         <p className='p-nav'>
         <a className='HomeLink' href="https://www.gob.mx/"><img className='icon-home' src={require('../icon-home.png')} alt="" /></a> 
          <svg className='Arrow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#5a5a5a" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>   
          <a className='HomeLink' href="https://www.gob.mx/"><span className='Inicio'>Inicio</span></a>      
         </p>
       </div>
       <div>
         <img className='logoSat' src={require('../Logo_SHCP_SAT-.jpg')} alt="logo" />
       </div>
       <div>
        <h1>Verificación de comprobantes fiscales digitales por internet</h1>
       </div>
       <div className='Linea'></div>
    </div>
  )
} 

export default Encabezado