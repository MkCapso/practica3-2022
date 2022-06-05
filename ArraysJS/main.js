//crear un array o arreglo
let arreglo = ['JavaScript','Php','Java','Csharp']

//la cantidad de elementos de un arreglo (longitud)
let longitud = arreglo.length
console.log('Longitud: '+longitud)

//primer elemento arreglo
console.log( 'Primer elemento: '+arreglo[0] )

//ultimo elemento de un arreglo
console.log( 'Último elemento: '+arreglo[longitud-1] )

//recorrer array con forEach
arreglo.forEach( (element,index) => {
    //mostramos el índice y el elemento
    console.log(index+'-'+element)
});

//agregar un elemento al final de un array
arreglo.push('Go')
console.log(arreglo)

//Eliminar el último de un arreglo
arreglo.pop()
console.log(arreglo)

//Agregar un elemento al principio de un arreglo
arreglo.unshift('Go')
console.log(arreglo)

//Eliminar primer elemento de un arreglo
arreglo.shift()
console.log(arreglo)

//Conocer el índice de un elemento
const indice = arreglo.indexOf('Java')
console.log('Indice de Java es: '+indice)
console.log(arreglo[indice])

//eliminar un elemento conociendo su índice
//const eliminacion =  arreglo.splice(indice,1)
//console.log(arreglo)
//console.log('Elemento eliminiando: '+eliminacion)

//eliminar mas de un elemento
//splice(indice,cant)
const eliminacion = arreglo.splice(indice,2)
console.log(arreglo)
console.log('Elementos eliminados: '+eliminacion)

//generar copia de un arreglo
let copia = arreglo.slice()
console.log(copia.push('Go'))

//cuando concatenamos un array con un string, todo se
//traduce en una cadena de texto
console.log('Arreglo copia: '+copia)
console.log('Original: '+arreglo)

//agregar elemento por indice
//siempre dejar la cantidad de elementos en 0(cero)
arreglo.splice(1,0,"java","Swift")
console.log(arreglo)