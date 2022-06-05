let lenguajes = ['Python','JavaScript','Csharp','C++','Java','PHP','Ruby']
console.log('Lenguajes: '+lenguajes)

lenguajes.push('Go')
console.log('Lenguajes: '+lenguajes)

lenguajes.shift()
console.log('Lenguajes: '+lenguajes)

lenguajes.unshift('Kotlin')
console.log('Lenguajes: '+lenguajes)

let pos = lenguajes.indexOf('Java')
console.log('La posición de Java es: '+pos)
lenguajes.splice(pos, 1)
console.log('Lenguajes: '+lenguajes)
pos = lenguajes.indexOf('PHP')
console.log('La posición de PHP es: '+pos)
lenguajes.splice(pos, 1)
console.log('Lenguajes: '+lenguajes)

