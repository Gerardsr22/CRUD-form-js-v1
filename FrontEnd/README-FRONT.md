
- 1 - [Front-end](FrontEnd/README-FRONT.md)
    - 1.1 - Formulari HTML
    - 1.2 - Formulari JS
        - 1.2.1 - fetch
        - 1.2.2 - async/await/.then() i .catch()
    - 1.3 - Dockerfile

==============================================


**- 1.1 - Formulari HTML**
----------------------------------------------

Ens refereim al formulari mitjançant ```id="form"```

Tots el camps recullen dades mitjacçant etiquetes label - input, que es relacionen amb id(input) i for(label).
Tots el camps son requerits. (required)

El botó dispara la funció de JS per recollir dades, perque te l'atribut ```type="submit"``` Que es l'opció per defecte.

**- 1.2 - Formulari JS**
-----------------------------------------------

<u>Pas 1 -</u>

Guradam l'element form a una variable (form).

<u>Pas 2 -</u>

Usam:
```
form.onsubmit = async function(envio){}
```
Executa una funció a l'hora de clicar el botó del form.

Què és ```envio``` ?

Envio es un parametre que el navegador li pasa a l'script amb la informació dels camps del form.

```
form.onsubmit = function(envio) {
  console.log(envio.type);           // "submit"
  console.log(envio.target);         // El elemento <form>
  console.log(envio.currentTarget);  // También el <form>
  console.log(envio.timeStamp);      // Momento en que ocurrió
  
  // Lo más importante:
  envio.preventDefault();  // Cancela el comportamiento por defecto
  envio.stopPropagation(); // Detiene la propagación del evento
};
``` 

<u>Pas 3 -</u>

Recollim les dades amb ```getElementById()```.<br>
Després declaram un objecte tipo JSON ```dades``` on guardam les dades.<br>
Despres usam: <br>
```JSON.stringify(dades)```<br>
Això transforma el JSON en string i ho gaurda a ```dadesJSON```.

Diferècia entre JSON i JSON string:
```
const personaJSON = {
  nombre: "Ana",
  edad: 25,
  activo: true
};

console.log(typeof personaJSON); // "object"
```

```
const personaJSONstr = '{"nombre":"Ana","edad":25,"activo":true}';

console.log(typeof personaJSONstr); // "string"
```

**- 1.2.1 - fetch**
------------------------------------------------

*fetch* és una forma de fer peticions al servidor ja sigui per enviar o obtenir dades.

```const resposta = await fetch ('http://localhost:5000', {sa_teva_funcio});```

La funcio *fetch* reb com a paràmetre obligatòri la URL a on es fa la petició.<br>

El segon paràmetre es un objecte que pot contenir diverses opcions:<br>
- method: El mètode HTTP (GET, POST, PUT, DELETE ...)
- headers: Proporciona info adicional de la petició. (Content-type: ...) <br>
- body: Son les dades que es volen enviar.

**- 1.2.2 - await/async/.then() i .catch()**
------------------------------------------------------

Per entendre aquest conceptes cal tenir-ne clars els seguents en aquest ordre:

<u>- 1 - Async</u>

Es posa davant d'una funció per indicar que les operacions d'aquestes tardaran.
Al posa async la funció sempre tornarà una promesa (Promise).
Un exemple de la seva sintaxi: <br>
```Promise {"Missatge correctament rebut"}```

<u>- 2 - Promise</u>

Son objectes que representen el resultat futur d'una operació, que tarda en executarse.
Una Promise pot estar en 3 estats:
    - *Pending*
    - Completada (mostra resultat de l'operació)
    - *Rejected* 

Exemples de declaració d'una Promise: <br>
```
const promesa =  new Promise((resolve, reject) => {
    //           ↑        ↑
    //           |        └─ Función para indicar FALLO
    //           └─ Función para indicar ÉXITO
    // Tu código aquí
});

```

<u>- 3 - await</u>

Es una paraula reservada que fa que una operació es detengui fins que l'altre estigui resolta. Això es necessari pq JS no espera a que altres operacions acabin per realitza la següent.<br>
Aquesta paraula segueix unes normes:
   - Només es pot usar dins funcions async
   - Només s'usa amb Promises

<u>- 4 - .then() i .catch()</u>

Ambdos son mètodes per controlar el resultat d'una Promise.
Tenint clars el possibles resultats de la Promise:
Usam:<br>
    - .then() -> En cas de que s'hagi completat correctament<br>
    - .catch() -> En cas contrari.

NO es poden usar simultàniament dins un await, ja que .then() i .catch() espera el resultat i no tendria sentit.

Dins el paréntesi anirà la funció que volem que s'executi damunt la Promise.


**- 1.3 - Dockerfile**
--------------------------------------------------------