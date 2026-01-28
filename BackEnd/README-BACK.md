- 2 - [Back-end](BackEnd/README-BACK.md)
    - 2.1 - NodeJS 
    - 2.2 - ExpressJS
    - 2.3 - Cors *
    - 2.4 - Dockerfile




**- 2.1 - NodeJS**
----------------------------------------------

Per començar el projecte del backend necessitam tenir instalar nodesj.<br>
Inicialitzam el projecte dins la carpeta Backend: ```npm -init```

Després usam el seu gestor de paquets per instalar el següent:

```
"dependencies": {
    "cors": "^2.8.5",
    "express": "^5.2.1"
  },
  "devDependencies": {
    "nodemon": "^3.1.11"
  }
```

**- 2.2 - ExpressJS**
-----------------------------------------------

Per crear un servidor usam la llibreria expressJS. <br>
Aquesta segueix una estructura.<br> Cada pas està marcat a server.js


<u>Pas 1 -</u>

Crear la app amb el framework, i tot lo necessari (ports i cors).<br>
També iniciam el servidor usant app.listen, que arranca el servidor pel port que li especifiquem (últimes linies de codi).

<u>Pas 2 -</u>

Configuram middleware i altres opcions que express usarà.

<u>Pas 3 -</u>

Crear un endpoint per rebre les peticions a la ruta /.
L'endpoint reb una request i response com a paràmetres perque despres amb la seva funció executi la lògica.<br>
En el nostre cas recuperam el body de la request per guardar les dades i despres tornar un missatge d'èxit.


**- 2.3 - CORS**
------------------------------------------------

CORS és un mecanisme de seguretat dels navegadors que controla quines pàgines web poden fer peticions al teu servidor. Per defecte, els navegadors bloquegen peticions HTTP que es fan des d'un origen diferent (domini, protocol o port diferent) al del servidor.

Permets que la pàgina servida des de http://127.0.0.1:8080 pugui fer peticions al teu servidor
```optionsSuccessStatus: 200``` assegura compatibilitat amb navegadors antics que esperen un codi 200 en lloc de 204 per a peticions preflight.

Recordam que en el docker del front-end, tenim el port mapejat al 8080. Això vol dir que les peticions venen del port 8080 del contenidor, es canvien al port 80 que es per on escolta el servei (nginx).



**- 2.4 - Dockerfile**
------------------------------------------------------

Al Dockerfile ja està cada linia explicada.

Coses a tenir en compte:

A partir del Dockerfile (del backend)