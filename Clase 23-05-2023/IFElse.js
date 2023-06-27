console.log('                   Ejercico 4')
console.log('Ejercicio a)')
var a = Math.random()
if ( a >= 0.5){
    console.log('Greater than 0.5')
} else console.log('Lower than 0.5')

console.log('El valor de a era: ', a)

console.log('Ejercico b)')
var age = 65

if (age < 2){
    console.log('Bebe')
} else if (2 < age && age < 12 ){
    console.log('Niño')
    } else if (13 <= age && age <= 19){
        console.log('Adolescente')
        }else if (20 <= age && age  <= 30)
        {
            console.log('Joven')
            } else if (31 < age && age < 60)
            {
                console.log('Adulto')
                } else if (61 < age && age <= 75)
                {
                    console.log('Adulto Mayor')
                    } else if( 75 < age )
                    {
                        console.log('Anciano')
                        }
