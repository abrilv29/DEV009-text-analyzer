import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

// funcion para limpiar un button con javascript


const textArea = document.querySelector('textarea');
const botonLimpiar = document.getElementById("reset-button");
const wordMostrar = document.getElementById("palabras-Count");
const characterMostrar = document.getElementById("caracteres-Count");
const characterSinEspacioMostrar = document.getElementById("caracteres-Espacio");
const numMostrar = document.getElementById("numeros-Count");


//Limpiar el boton "reset-button"
botonLimpiar.addEventListener("click", limpiarBtn);

function limpiarBtn(){
  console.log(textArea.value);
   textArea.value ='';
   wordMostrar.innerHTML = ' ';
   characterMostrar.innerHTML =' ';
   characterSinEspacioMostrar.innerHTML='';
   numMostrar.innerHTML='';

  }
  //Llamar al objeto getWordCount
  textArea.addEventListener("keyup", function() {
  
  let text = this.value; 

  console.log("texto");

  const countWords = analyzer.getWordCount(text);

  if(countWords === 0){

    wordMostrar.innerHTML = countWords + " ";
   
  }
  else{

    wordMostrar.innerHTML = countWords + " ";
  }


  //Llamar al objeto getCharacterCount
  const countCharacter = analyzer.getCharacterCount(text); 
  if(countCharacter === 0){

    characterMostrar.innerHTML = countCharacter + " ";
   
  }
  else{

    characterMostrar.innerHTML = countCharacter + " ";
  }

  //Lamar al objeto getCharacterCountExcludingSpaces
  const characterSpace = analyzer. getCharacterCountExcludingSpaces(text); 
  if(characterSpace === 0){

    characterSinEspacioMostrar.innerHTML = characterSpace + " ";
    
  }
  else{

    characterSinEspacioMostrar.innerHTML = characterSpace + " ";
  }
//Llamar al elemento getNumberCount
  const numberCount = analyzer. getNumberCount(text); 
  if(numberCount=== 0){

    numMostrar .innerHTML = numberCount + " ";
    
  }
  else{

    numMostrar .innerHTML = numberCount + " ";
  }


});



