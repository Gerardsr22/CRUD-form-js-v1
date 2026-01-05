const express = require('express')
const app = express()
const PORT = 5000
const cors = require('cors')

// Per poder realitzar peticions desde el propi localhost:5500 (liveserver)
const corsOptions = {
    origin: 'http://127.0.0.1:5500', 
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
// LLibreria per llegir contingut http de tipus application/X-www-form-urlencoded
// extended : true -> Fa que usi la lllibreria qs qeu llegeix objectes JS
app.use(express.urlencoded({ extended: true }));

app.post('/', (req, res) => {
    const datos = req.body
    var nom = datos.nom
    console.log(nom)
    res.status(200).send("Dades rebudes")
})

app.listen(5000, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`)
});