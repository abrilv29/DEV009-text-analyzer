# PROYECTO TEXT ANALYZER
## Objetivo del Proyecto
* Desarrollar una calculadora de texto que permita mostrar al usuario las métricas de palabras,espacios,números,suma de números y el promedio de la cadena de texto.
* Dentro del desarrollo del proyecto se debe utilizar HTML semántico, CSS y Javascript.

## Prototipo de baja fidelidad
* Con el objetivo de implementar los requimientos solicitados en el proyecto y uso de especificaciones dentro del HTML Y CSS se opto por un diseño sobrio que le permita al usuario poder visualizar de manera clara la información.
* Mostrando los datos en tiempo real una vez que se esta tecleando la cadena de texto en el textarea.

![Alt text](prototipo.png)

## Interfaz de Usuario

## 1. HTML

* Encabezado
* Titulo con la etiqueta h1
* textarea
* boton para limpiar el textarea
* lista donde muestra las métricas
* pie de página/Autor

## 2. Estilos CSS

* Uso de flexbox
* Paleta de colores claros
* Efecto hover en boton
* background-image 
* listas `<ul>`
* box model para dar estilos a las listas

## 3. Funcionamiento Javascript

* Declaración de variables con `let` y `const`
* Uso de eventos con `Event Listener` y `keyup` para al momento de teclear el texto dentro del  `texarea`.
* Manipulacion de selectores en el `DOM` querySelector y 
getElementById.   
* Uso de `if..else`, `for` y  `array`
* uso de los metodos para manipular strings como `split`, `trim` o `replace`.
* Uso de módulos ECMAScrip  `import` y  `export`


## Deacuerdo a lo anterior dare una breve explicación de algunos conceptos.

**Métodos de JAVASCRIPT**

	• Trim() = elimina los espacios en blanco en ambos extremos del string.
	• Split() = división de cadenas de textos (string) empleando un separador que puede ser solo un carácter, otra cadena o una expresión regular
	• Replace()= reemplaza parte de una cadena de texto, basándose en el número de caracteres especificados, con otra cadena de texto.

**Evento EventListener**
	•  Registra un evento a un objeto en específico.

**Evento keyup**

	• ¿Qué es keyup? Es un evento que se ejecuta cuando la tecla deja de estar abajo (o sea, cuando soltamos la tecla).

**Manipulación del Web API** 

**DOM**

	• El querySelector()método devuelve el primer elemento que coincide con un selector CSS.
	 El getElementById()método de la Documentinterfaz devuelve un Elementobjeto que representa el elemento cuya id propiedad coincide con la cadena especificada.

**Inner HTML**

	• La innerHTML propiedad establece o devuelve el contenido HTML (HTML interno) de un elemento

**Textcontent**

	• La textContent propiedad establece o devuelve el contenido de texto del nodo especificado y todos sus descendientes .

**Nodo:** cualquier etiqueta del cuerpo dentro del árbol del DOM.

**Expresiones Regulares**

	• Las expresiones regulares son patrones utilizados para encontrar una determinada combinación de caracteres dentro de una cadena de texto. En JavaScript, las expresiones regulares también son objetos.
**Ejemplo:**

                      
                             split(/\s+/);

 Dividimos la cadena con la /\s+/ expresión regular, lo que   significa uno o más caracteres de     espacio en blanco.


**Módulos de ECMAScript (Módulos ES)**

	• A partir de ECMAScript se introduce una característica nativa 
	denominada Módulos ES (ESM), que permite la importación y 
	exportación de fragmentos de datos entre diferentes 
	ficheros Javascript.
	
**Import y export**

Para poder utilizar los módulos es necesario con la instalación
 de node.js en nuestro proyecto para que los ficheros puedan
  ser utilizados en otros fragmentos de código.

	• Export
Con un export puedes exportar todo tipo de piezas de software, 
como datos en variables de tipos primitivos, funciones, objetos, clases.
**Ejemplo:**

                       export default analyzer;

    

•Import

En el momento que queramos cargar alguna cosa de un módulo externo, usaremos la sentencia import.
**Ejemplo:**


                   import analyzer from './analyzer.js';


Como llamar al objeto desde analyzar.js para utilizar las funciones en  import  index.js

Se declara una variable que almacene el valor contenido el función para mostrar los resultados mediante la manipulación del DOM.
**Ejemplo:**

             const countWords = analyzer.getWordCount(text);





## Herramientas Adicionales 

* Instalación de Git
* Cuenta de usuario de Github
* Configuración de la key SSH
* Clonar repositorio DEV009-text-analyzer
* Instalacion de Node.js
* Correr npm rum start
* Pruebas de desarrollo(test) playwright 

## Pruebas de criterios mínimos de aceptación
1. npm run test:oas-html
2. npm run test:oas-css
3. npm run test:oas-web-api
4. npm run test:oas-js

## Pruebas unitarias (unit tests)
1. npm run test

## Pruebas end-to-end

1. npm run test:e2e

## Conclusion 

De acuerdo con lo anterior y los criterios solicitados de la aplicación web **analizador de texto**, logre entender conceptos de temas sobre Javascript que mediante la investigación y la practica pude ir entendiendo y abordando. El principal reto de este proyecto fue entender la logica del flujo de información y como se debería ir resolviendo las etapas del proyecto, para esto la estrategía implemetada fue llevar un control de puntos en específico que deseaba entender e ir por pasos hasta llegar al funcionamiento del la página  web.

El diseño final tomando encuenta la interación con el usuario y el diseño UX, escogi colores primarios que fueran accesibles a la vista y que la información se desplegara en un solo momento y se visualizara de madera optima. 

![Alt text](image.png)










<<<<<<< HEAD
=======
* `npm run test:oas-html`
* `npm run test:oas-css`
* `npm run test:oas-web-api`
* `npm run test:oas-js`

#### Pruebas end-to-end

Una prueba end-to-end (E2E) es una técnica de prueba de software en la que
se verifica el funcionamiento de todo el sistema desde el inicio hasta el
final. En otras palabras, se prueba el flujo completo del software, simulando
la interacción del usuario con la aplicación, para asegurarse de que todas las
partes del sistema funcionan correctamente en conjunto.

Puedes ejecutar estas pruebas con el comando `npm run test:e2e` como se muestra
en la siguiente imagen:

![npm run test e2e](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650622-a4da630e-8d39-4dd8-9fde-1a38c31a53e2.gif "npm run test e2e")

### Github actions

Este repositorio usa una GitHub Action para ejecutar automáticamente
las pruebas unitarias, pruebas de criterios mínimos de aceptación y
y pruebas end-to-end cada vez que se hagas un _push_ en la rama
_main_ de tu repositorio.

Puedes consultar el resultado de esta Github Action
en la pestaña _Actions_ de tu repositorio en Github
como se muestra en la siguiente imagen:

![Github Action](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650640-a8a8ed26-6f48-4053-8b3b-7dec7e35a9f8.gif "Github Action")

## 7. Pistas, tips y lecturas complementarias

### Prepara tu PC para trabajar

Antes de comenzar instala lo siguiente:

1. [Node.js](https://nodejs.org/)
2. [git](https://git-scm.com/download/) Si estas en Linux es muy probable que
  ya este instalado 👀.
  Para conocer más de git visita
  [este enlace](https://curriculum.laboratoria.la/es/topics/scm/01-git)
3. Un editor de código, te sugerimos [Code](https://code.visualstudio.com/)

Después en [GitHub](https://github.com/):

1. Crear una cuenta. Conoce más de GitHub en este
  [link](https://curriculum.laboratoria.la/es/topics/scm/02-github/01-github)
2. Realiza un fork de este proyecto
3. Configura tu SSH Key  en GitHub. Puedes revisar este
[video](https://www.youtube.com/watch?v=g0ZV-neSM7E) o
[artículo](https://docs.github.com/es/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

Luego en una [shell](https://curriculum.laboratoria.la/es/topics/shell)
ejecuta lo siguiente. Si estas en Windows puedes usar Git Bash:

1. Clona el fork en tu PC
2. Ubica la shell en el proyecto que clonaste
3. Instala las dependencias del proyecto con `npm install`
4. Instala `playwright` con `npx playwright install chromium --with-deps`
5. Para arrancar el servidor web `npm start` y dirígete a
   `http://localhost:3000` en tu navegador.
6. A codear se ha dicho! :rocket:

### Recursos y temas relacionados

Súmate al canal de Slack [#project-text-analyzer](https://claseslaboratoria.slack.com/archives/C058GP6K9NY)

## 8. Consideraciones para pedir tu Project Feedback

Antes de agendar tu Project Feedback con un coach, asegúrate que tu proyecto:

* [ ] Cumple con todos los criterios mínimos de aceptación al ejecutar `npm run test:oas`
* [ ] Cumple con todas las pruebas unitarias al ejecutar `npm run test`
* [ ] Cumple con todas las pruebas _end to end_ al ejecutar `npm run test:e2e`
* [ ] Esta libre de _errores_ de `eslint` al ejecutar `npm run test`
* [ ] Está subido a GitHub.
* [ ] Esta desplegado en GitHub Pages.
* [ ] Tiene un README con la definición del producto.

Además recuerda que debes hacer: llenado de sprint check out de cierre de proyecto, una autoevaluación de objetivos de aprendizaje y autoevaluación de life skills desde tu dashboard de estudiante. [Acá el link](https://coda.io/d/_deHfHkTC743/Como-lograras-aprender-DEV_sumg1#_lu6qL) del flujo para que puedas ver el proceso.

Si no has completado todo lo anterior, no consideramos que estás lista para tu sesión de Project Feedback. ([acá](https://coda.io/d/_deHfHkTC743/Project-Feedback_suLH5) te dejamos el link de esta instancia).

## 9. Objetivos de aprendizaje

Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

### HTML

- [ ] **Uso de HTML semántico**

  <details><summary>Links</summary><p>

  * [HTML semántico](https://curriculum.laboratoria.la/es/topics/html/02-html5/02-semantic-html)
  * [Semantics - MDN Web Docs Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
</p></details>

### CSS

- [ ] **Uso de selectores de CSS**

  <details><summary>Links</summary><p>

  * [Intro a CSS](https://curriculum.laboratoria.la/es/topics/css/01-css/01-intro-css)
  * [CSS Selectors - MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)
</p></details>

- [ ] **Modelo de caja (box model): borde, margen, padding**

  <details><summary>Links</summary><p>

  * [Box Model & Display](https://curriculum.laboratoria.la/es/topics/css/01-css/02-boxmodel-and-display)
  * [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  * [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  * [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  * [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
</p></details>

### Web APIs

- [ ] **Uso de selectores del DOM**

  <details><summary>Links</summary><p>

  * [Manipulación del DOM](https://curriculum.laboratoria.la/es/topics/browser/02-dom/03-1-dom-methods-selection)
  * [Introducción al DOM - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Localizando elementos DOM usando selectores - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
</p></details>

- [ ] **Manejo de eventos del DOM (listeners, propagación, delegación)**

  <details><summary>Links</summary><p>

  * [Introducción a eventos - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events)
  * [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
  * [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/removeEventListener)
  * [El objeto Event](https://developer.mozilla.org/es/docs/Web/API/Event)
</p></details>

- [ ] **Manipulación dinámica del DOM**

  <details><summary>Links</summary><p>

  * [Introducción al DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Node.appendChild() - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/appendChild)
  * [Document.createElement() - MDN](https://developer.mozilla.org/es/docs/Web/API/Document/createElement)
  * [Document.createTextNode()](https://developer.mozilla.org/es/docs/Web/API/Document/createTextNode)
  * [Element.innerHTML - MDN](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML)
  * [Node.textContent - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/textContent)
</p></details>

### JavaScript

- [ ] **Tipos de datos primitivos**

  <details><summary>Links</summary><p>

  * [Valores primitivos - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures#valores_primitivos)
</p></details>

- [ ] **Strings (cadenas de caracteres)**

  <details><summary>Links</summary><p>

  * [Strings](https://curriculum.laboratoria.la/es/topics/javascript/06-strings)
  * [String — Cadena de caracteres - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)
</p></details>

- [ ] **Variables (declaración, asignación, ámbito)**

  <details><summary>Links</summary><p>

  * [Valores, tipos de datos y operadores](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/01-values-variables-and-types)
  * [Variables](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/02-variables)
</p></details>

- [ ] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

  <details><summary>Links</summary><p>

  * [Estructuras condicionales y repetitivas](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/01-conditionals-and-loops)
  * [Tomando decisiones en tu código — condicionales - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals)
</p></details>

- [ ] **Uso de bucles/ciclos (while, for, for..of)**

  <details><summary>Links</summary><p>

  * [Bucles (Loops)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/02-loops)
  * [Bucles e iteración - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)
</p></details>

- [ ] **Funciones (params, args, return)**

  <details><summary>Links</summary><p>

  * [Funciones (control de flujo)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/03-functions)
  * [Funciones clásicas](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/01-classic)
  * [Arrow Functions](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/02-arrow)
  * [Funciones — bloques de código reutilizables - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions)
</p></details>

- [ ] **Pruebas unitarias (unit tests)**

  <details><summary>Links</summary><p>

  * [Empezando con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/getting-started)
</p></details>

- [ ] **Módulos de ECMAScript (ES Modules)**

  <details><summary>Links</summary><p>

  * [import - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import)
  * [export - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export)
</p></details>

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

### Control de Versiones (Git y GitHub)

- [ ] **Git: Instalación y configuración**

- [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [ ] **GitHub: Despliegue con GitHub Pages**

  <details><summary>Links</summary><p>

  * [Sitio oficial de GitHub Pages](https://pages.github.com/)
</p></details>

### Centrado en el usuario

- [ ] **Diseñar y desarrollar un producto o servicio poniendo a las usuarias en el centro**

### Diseño de producto

- [ ] **Diseñar en distintos niveles de fidelidad**

- [ ] **Seguir los principios básicos de diseño visual**

## 10. Funcionalidades opcionales

Si terminaste con todas las [funcionalidades requeridas](#3-funcionalidades),
intenta implementar las siguientes funcionalidades opcionales para
profundizar en los objetivos de aprendizaje del proyecto:

* Que el recuento de palabras y caracteres sea 0 para una entrada de
  texto vacía.
* Que el recuento de palabras y caracteres sea 0 para una entrada de
  texto con solo espacios.
* Que el recuento de palabras y caracteres sea 0 para una entrada de
  texto con solo caracteres de puntuación.

Puedes habilitar las pruebas unitarias y en _end to end_ de estos casos
en los archivos [test/analyzer.spec.js](test/analyzer.spec.js) y
[read-only/test/e2e/app.spec.js](read-only/test/e2e/app.spec.js).
>>>>>>> 4a36d9ea7bdaba2a4933348b8af6c45dd2e28284
