const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const wordsText = text.trim().split(/\s+/);
    return  wordsText.length;
    
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  return text.length;

  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const space = text.replace(/\s+/gi, ' ');
    return space.length;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const wordsLength= text.trim().split(/\s+/);
    const lenght = wordsLength.reduce((acc, cur) => acc + parseFloat(cur), 0);
    const avege = lenght / wordsLength.lenght;
   
    console.log(avege);
    
    return (avege);
    

  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const numCount= text.replace(/[^0-9]+/g, "");
    return numCount.length;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const sumNum = text.match(/\d+/g);

    return sumNum ? sumNum.reduce((acc, cur) => acc + parseInt(cur), 0):0;


  },
};

export default analyzer;
