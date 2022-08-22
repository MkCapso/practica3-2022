async function consultar_dolar() {
    
    const datos = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')

    const dolar = await datos.json()

    let filas = []

    dolar.forEach((element,index) => {
        //console.log(`
        //${index} - ${element.casa.nombre} - Compra: ${element.casa.compra} - Venta: ${element.casa.venta}`)

        let fila = `
            <tr>
                <td>${index+1}</td>
                <td>${element.casa.nombre}</td>
                <td>${element.casa.compra}</td>
                <td>${element.casa.venta}</td>
            </tr>
        `

        filas.push(fila)

    });

    document.getElementById("tbody").innerHTML = filas.join('')
}

consultar_dolar()

