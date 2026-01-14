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

    // console.log(dades);

    // Usam llibreria JSON amb metode .stringify
    // per convertir l'objecte a string json
    const dadesJSON = JSON.stringify(dades)
    // Es declara una promesa resposta, que contindrà el resultat 
    // de l'operació del fetch.

    try {
        const resposta = await fetch ('http://localhost:5000', {

        method: 'POST',
        // Headers son informacio adicional per servidor
        headers: {
            // Defineix el format del cos de resposta
            "Content-Type": "application/json"
        },
        body: dadesJSON
        });
    

    // Comprobació per saber si el servidor torna la resposta
    if(!resposta.ok){
        // Aquesta linia atura la funció en aquesta linia en cas de 
        // que la condició es compleixi i bota directament al catch més proper
        throw new Error(`Error:${resposta.status}`);
    }
    
    } catch (error){
        console.log('Error:',error)
        alert('Error a l\'hora d\'enviar el formulari')
    }

    const resultado = await JSON.stringify(resposta)
    console.log(resultado)
}

