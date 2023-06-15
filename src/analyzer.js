const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const wordsText = text.trim().split(/\s+/);//trim() elimina espacios en ambos extremos del "string" split(/\s+/) se divide la cadena la expReg indica uno o más espacios en blanco
    if (wordsText.length === 0) { //validadamos que la variable wordsText "de verdad" se encuentre en cero
      return 0; //
    }
    return wordsText.length;// retornar la logitud de las palabras
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length; //muestra la longitud de la cadena de texto

  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    //const space = text.replace(/\s+/gi,"");
    //split(' ').join("")
    //const space = text.split(' ').join("").replace(/,/g, "");//remplaza comas
    // replace(/\./g, '') remplaza puntos
    const space = text.split(' ').join("").replace(/\./g, '').replace(/,/g, "");
    return space.length;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let totalLength = 0; // variable donse se almacena el valor total de la longitud 
    const wordsLength = text.trim().split(/\s+/);
    if (wordsLength.length === 0) {
      return 0;
    }
    for (let i = 0; i < wordsLength.length; i++) { //recorremos el arreglo e incrementamos el valos de wordsLength
      totalLength = totalLength + wordsLength[i].length;//sumamos la logitud del arreglo
    }
    const average = totalLength / wordsLength.length;
    // Convertir numero a decimal y solo mostrar dos decimales
    return parseFloat(average.toFixed(2));//convertivos la variable averge en flotante(decimal) y le agregamos la propiedad toFixed()para tomar en cuenta solo dos decimales.
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    //const numCount= text.replace(/[^0-9]+/g, "");
    //return numCount.length;
    const numCount = text.trim().split(/\s+/);
    let countNumber = 0; //declaramos el contador en 0
    for (let i = 0; i < numCount.length; i++) { //recorremos el arreglo
      const number = Number(numCount[i]);//convirtiendo a número
      if (!isNaN(number)) { //validamos que el número que se número
        countNumber += 1; // incrementamos en +1
      }
    }
    return countNumber; // devolvemos el valor del contador
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.trim().split(/\s+/);
    let sumaNum = 0; // declaramos la variable donde se alamacena la suma de los números
    for (let i = 0; i < words.length; i++) { //recorremos el arreglo
      const number = Number(words[i]);//convirtiendo a numero el arreglo
      if (!isNaN(number)) {// validamos que el números sea número
        sumaNum += number;// realizamos la suma
      }
    }
    return parseFloat(sumaNum);//convertimos el valiable sumaNum a flotante(decimales).
  },

};

export default analyzer;
