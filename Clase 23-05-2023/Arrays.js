console.log('                   Ejercico 3')
console.log('Ejercico a)')
var  array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log(array[5],array[11])

console.log('Ejercicio b)')
var u = array.sort()
console.log(u)

console.log('Ejercico c)')
var q = array.unshift("Nuevo mes")
var q = array.push("Mes final")
console.log(array)

console.log('Ejercicio d)')
var e = array.shift()
var e = array.pop()
console.log(array)

console.log('Ejercicio e)')
var r = array.reverse()
console.log(r)

console.log('Ejercicio f)')
var y = array.join('-')
console.log(y)

console.log('Ejercicio g')
var  array2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
var h = array2.slice(4,11)
console.log(h)