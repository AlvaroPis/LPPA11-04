console.log('            Ejercico 5')
console.log('Ejercico a)')
var dias = ["lunes", "martes", "miercoles", "jueves", "viernes"]

for (var i = 0; i<5; i++){
    console.log('El día es: ', dias[i])
}


console.log('Ejercicio b)')
for (var i = 0; i<5; i++){
    var t = (dias[i].substring(0,1).toUpperCase() + dias[i].substring(1).toLowerCase())
    dias[i] = t
} console.log(dias)


console.log('Ejercicio c)')
var sentence = []
for (var i = 0; i<5; i++){
    sentence[i] = dias[i]
} console.log(sentence)


console.log('Ejercicio d)')
var array2 = []
for (var i = 0; i<10; i++){
    array2[i] = i
} console.log(array2)


