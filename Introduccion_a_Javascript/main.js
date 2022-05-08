        //Inicializamos o creamos por primera vez una constante
        //acá se declara la constante
        const numero = 22

        //es una ventana emergente o popup
        //alert(numero)

        //consola del navegado
        console.log('probando uso de consola')
        console.log('Edad: '+numero+' - DNI: 33621602')

        //template string
        console.log(`
            probando template:
            
            - Edad:${numero}
            - Item 2
            - Item 3
        `)

        const dato_ingresado = prompt('Ingrese su DNI')

        //testeo
        console.log(dato_ingresado)