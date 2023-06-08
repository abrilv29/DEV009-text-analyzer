  textArea.addEventListener("keyup", () => {

    let textCount = textArea.value;

    document.getElementById('palabras-Count').innerHTML = '<li>Palabras:0</li>' +textCount;
    console.log(textCount);

  });
  return text.split(' ').length;