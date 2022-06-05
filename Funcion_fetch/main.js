async function cosnumir_datos() {
    
    //realidzar la peticion http a traves del metodo GET
    const datos = await fetch('https://jsonplaceholder.typicode.com/users')

    //solo conservo los datos en JSON
    const datos_definitivos = await datos.json()

    datos_definitivos.forEach(element => {
        console.log(element.name)        
    });
}

//invoco a la función
datos_definitivos