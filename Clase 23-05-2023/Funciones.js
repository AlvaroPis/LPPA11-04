console.log('            Ejercicio 6')

console.log('Ejercicio a)')

function suma( a, b){
    var t = (a + b)
    return console.log(t)
}
suma(7,3)

console.log('Ejercico b)')
function suma2(a,b){
    if (!isNaN(a) && !isNaN(b)){
    var w = (a + b)
    return console.log('El resultado es: ', w, ' Sus variables son: ', a,'y', b)
} else {
    console.log('Las variables ingresadas no son numeros')
}}

suma2(2,9)

console.log('Ejercicio c)')

function validateinteger(a){
    if (Number.isInteger(a)){
        return console.log('Verdadero')
    } else {
        console.log('El valor ingresado no es un numero entero')
    }
}

validateinteger(6)

console.log('Ejercicio d)')


function suma3(a,b){
    if (!isNaN(a) && !isNaN(b)){
        if(!Number.isInteger(a) || !Number.isInteger(b)){
        console.log('Error: Los numeros deben ser enteros.');
            a = Math.round(a);
            b = Math.round(b);   
        }
             var w = (a + b)
            return console.log('El resultado es: ', w, ' Sus variables son: ', a,'y', b)
} else {
    console.log('Las variables ingresadas no son numeros')
}}

suma3(1,7)

console.log('Ejercicio e)')


function validateIntegerNumbers(a,b){
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        console.log('Error: Los numeros deben ser enteros.');
            a = Math.round(a);
            b = Math.round(b);   
        } else{
            return [a,b];
        }
}

function suma4(a,b){
    if (!isNaN(a) && !isNaN(b)){
        validateIntegerNumbers(a,b);
             var w = (a + b)
            return console.log('El resultado es: ', w, ' Sus variables son: ', a,'y', b)
} else {
    console.log('Las variables ingresadas no son numeros')
}}

suma4(1,8)