const form = document.getElementById("form");

// S'usa la propietat .onsubmit (que s executa quan es boto 
// amb value="submit" s'apreta ) i executa la funcio
// envio es l'event de lo que ha succeit

// async per evitar que el servidor aturi tot per respondre a la peticio
form.onsubmit = async function(envio){

    envio.preventDefault();

    let nom = document.getElementById("nom").value;
    let llinatge = document.getElementById("llinatge").value;
    let email = document.getElementById("email").value;
    let missatge = document.getElementById("missatge").value;
    let check = document.getElementById("notificacions").checked;

    const dades = {
        "nom": nom,
        "llinatge": llinatge,
        "email": email,
        "missatge": missatge,
        "check": check
    };

    console.log(dades);

    // Usam llibreria JSON amb metode .stringify
    // per convertir l'objecte a string json
    const dadesJSON = JSON.stringify(dades)

    const resposta = await fetch ('http://localhost:4999', {

        method: 'POST',
        // Headers son informacio adicional per servidor
        headers: {
            // Defineix el format del cos de resposta
            "Content-Type": "application/json"
        },
        body: dadesJSON
    })
}

