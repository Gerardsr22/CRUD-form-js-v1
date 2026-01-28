// Pas 1

const express = require('express')
const app = express()
const PORT = 5000
const cors = require('cors')

// array que mos servirà com a BD
let dades = []

// Pas 2

// Per poder realitzar peticions desde el propi localhost:5500 (liveserver)
const corsOptions = {
    origin: 'http://127.0.0.1:8080', 
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
// LLibreria per llegir contingut http de tipus application/X-www-form-urlencoded
// extended : true -> Fa que usi la lllibreria qs qeu llegeix objectes JS
app.use(express.urlencoded({ extended: true }));

// Pas 3

// endpoint on van les peticion post de /
app.post('/', (req, res) => {
// Recuperam les dades de la petició (que estan al body)
    const datos = req.body
// Les envaima a la nosta BD (array)
    dades.push(datos);

    var email = datos.email
    console.log(`Petició de ${email} rebuda correctament`)
//Tornam un codi status Ok i tmb un missatge
    res.status(200).send(`Dades enviades al servidor de l'user ${email}`)
})

// Inicia el servidor pq escolti al port 5000
app.listen(5000, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`)
});