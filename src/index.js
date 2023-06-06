import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

// funcion para limpiar un button con javascript


const textArea = document.querySelector('textarea');
const botonLimpiar = document.getElementById("reset-button");
botonLimpiar.addEventListener("click", limpiarBtn);

function limpiarBtn(){
  console.log(textArea.value);
   textArea.value ='';

  }
