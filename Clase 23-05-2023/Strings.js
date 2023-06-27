console.log('                 Ejercicio 2')
console.log('Ejercicio a)')
var a = ('El perro esta jugando')
console.log(a.toUpperCase())

console.log('Ejercicio b)')
var b = ('Equilibrista')
console.log(b.substring(0,5))

console.log('Ejecricio c)')
var c = ('Equilibrista')
var d = (c.substring(c.length-3,c.length))
console.log(d)

console.log('Ejecricio d)')
var e = ('equilibrista')
var f = ((e.substring(0,1).toUpperCase()) + e.substring(1))
console.log(f)

console.log('Ejercicio e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Enconrar la posición del primer espacio en blanco y guardarla en unavariable (utilizar indexOf)')
var y = ('El equilibrista')
var t = y.indexOf(' ')
console.log(t)

console.log('Ejercicio f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras enmayúscula y las demás letras en minúscula (utilizar indexOf, substring,toUpperCase, toLowerCase y el operador +).')
var g = ('el equilibrista')
var h = ((g.substring(0,1).toUpperCase()) + g.substring(1,g.indexOf(' ')) + (g.substring(g.indexOf(' '), g.indexOf(' ')+1)) + (g.substring(g.indexOf(' ')+1,g.indexOf(' ')+2).toUpperCase()) + g.substring((g.indexOf(' ')+2)))
console.log(h)


