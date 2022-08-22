async function consultar_dolar() {
    
    const datos = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')

    const dolar = await datos.json()    

    dolar.forEach((element,index) => {
        console.log(`
        ${index} - ${element.casa.nombre} - Compra: ${element.casa.compra} - Venta: ${element.casa.venta}`)
        
    });
    
}

consultar_dolar()

