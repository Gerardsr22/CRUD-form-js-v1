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



**- 2.4 - Dockerfile**
------------------------------------------------------

