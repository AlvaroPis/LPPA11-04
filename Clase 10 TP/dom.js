function inputError(param, msg) {
    param.style.border = '1px solid red';
    var div = document.createElement('div');
    div.innerHTML = msg + '*';
    div.className = 'condicion';
    div.style.color = '#ff0000';
    div.style.margin = '0';
    div.style.marginTop = '1.5px';
    div.style.marginBottom = '-2.5px';
    div.style.fontSize = '16.5px';
    div.style.display = 'flex';
    div.style.justifyContent = 'flex-start';
    param.insertAdjacentElement('afterend', div);
}
function focu() {
    this.nextSibling.innerHTML = '';
    this.style.border = '1px solid black';
}

var nameSurn = document.getElementById('userName');
nameSurn.addEventListener('blur', valName);
nameSurn.addEventListener('focus', focu);
nameSurn.addEventListener('keyup', namePlus);

function namePlus() {
    var subTitle = document.getElementById('greetings');
    subTitle.innerText = 'Hola ' + this.value;
}


function valName(e) {
    var nameLengh = nameSurn.value.length;
    var spaceIndex = nameSurn.value.indexOf(" ");
    if (nameLengh > 6 && spaceIndex > -1) {
    } else {
        inputError(this, 'Debe colocar su nombre completo');
    }
}

var email = document.getElementById('email');
email.addEventListener('blur', valemail);
email.addEventListener('focus', focu);

function valemail() {
    var include = this.value.includes('@');
    if (!include) {
        inputError(this, 'Debe ser formato email');
    }
}

var pass = document.getElementById('pass');
pass.addEventListener('blur', valiPass);
pass.addEventListener('focus', focu);

function valiPass() {
    var passValue = this.value;
    var countLetter = 0;
    var countNum = 0;
    for (let index = 0; index < passValue.length; index++) {
        if (Number.isInteger(parseInt(passValue[index]))) {
            countNum++;
        }
        if (passValue[index].toUpperCase() !== passValue[index].toLowerCase()) {
            countLetter++;
        }
    }
    if (countNum < 2 || countLetter < 2 || passValue.length < 8) {
        inputError(this, 'Mínimo 2 numeros, 2 letras y 8 caracteres');
    }
}

var pass2 = document.getElementById('pass2');
pass2.addEventListener('blur', confirPass);
pass2.addEventListener('focus', focu);

function confirPass() {
    var pass2 = this.value;
    var pass1 = document.getElementById('pass').value;
    if (pass1 !== pass2) {
        inputError(this, 'Las contraseñas deben coincidir');
    }
}

var age = document.getElementById('age');
age.addEventListener('blur', function () {
    if (this.value < 18) {
        inputError(this, 'No cumple con la mayoría de edad');
    }
});
age.addEventListener('focus', focu);

function valiLenght(type, msj, cuant) {
    var leng = type.value.length;
    if (leng < cuant) {
        inputError(type, msj);
    }
}

var tel = document.getElementById('tel');
tel.addEventListener('blur', function () {
    var phone = this.value;
    var countNum = 0;
    for (let index = 0; index < phone.length; index++) {
        if (Number.isInteger(parseInt(phone[index]))) {
            countNum++;
        }
    }
    if (phone.includes(' ') || phone.includes('-') || phone.includes('(') || phone.includes(')') || phone.length < 7 || countNum < phone.length - 1) {
        inputError(this, 'No debe incluir espacios/guiones/parentesis');
    }
});
tel.addEventListener('focus', focu);

var adress = document.getElementById('adress');
adress.addEventListener('blur', function () {
    var adres = this.value;
    var countLetter = 0;
    var countNum = 0;
    for (let index = 0; index < adres.length; index++) {
        if (Number.isInteger(parseInt(adres[index]))) {
            countNum++;
        }
        if (adres[index].toUpperCase() !== adres[index].toLowerCase()) {
            countLetter++;
        }
    }
    if (!adres.includes(' ') || adres.length < 5 || countLetter < 0 || countNum < 0) {
        inputError(this, 'Debe tener letras/numeros y un espacio');
    }
});
adress.addEventListener('focus', focu);

var city = document.getElementById('city');
var postal = document.getElementById('postal');
var dni = document.getElementById('dni');

city.addEventListener('blur', function () {
    valiLenght(this, 'Debe tener al menos 3 caracteres', 3);
});
city.addEventListener('focus', focu);

postal.addEventListener('blur', function () {
    valiLenght(this, 'Debe tener al menos 3 caracteres', 3);
});
postal.addEventListener('focus', focu);

dni.addEventListener('blur', function () {
    valiLenght(this, 'Debe tener al menos 7 caracteres', 7);
});
dni.addEventListener('focus', focu);


var btn = document.getElementById('btn-sbt');
btn.addEventListener('click', btnClick);

function btnClick() {
    var validate1 = true;
    var validate2 = true;
    var inpts = document.querySelectorAll('form div input');
    for (let index = 0; index < inpts.length; index++) {
        if (inpts[index].value === '') {
            validate1 = false;
        }
    }
    var errMsg = document.getElementsByClassName('condicion');
    for (let index = 0; index < errMsg.length; index++) {
        if (errMsg[index].innerHTML !== '') {
            validate2 = false;
        }
    }
    if (validate1 && validate2) {
        const conf = confirm('Verifique sus datos:' + '\nNombre: ' + nameSurn.value + '\nEmail: ' + email.value + '\nEdad: ' + age.value + '\nTelefono: ' + tel.value + '\nDireccion: ' + adress.value + '\nCiudad: ' + city.value + '\nCodigo Postal: ' + postal.value + '\nDNI: ' + dni.value);
        if (conf) {
            var url = 'https://jsonplaceholder.typicode.com/todos/';    
            fetch(url).then(function (response) {
                if (response.ok) {
                    var form = document.querySelector('form');
                    form.style.visibility = 'hidden';
                    localStorage.clear();
                    localStorage.setItem('name',nameSurn.value);
                    localStorage.setItem('email',email.value);
                    localStorage.setItem('age',age.value);
                    localStorage.setItem('tel',tel.value);
                    localStorage.setItem('adress',adress.value);
                    localStorage.setItem('city',city.value);
                    localStorage.setItem('postal',postal.value);
                    localStorage.setItem('dni',dni.value);
                    localStorage.setItem('pass',pass.value);
                    alert('Usuario creado con exito');
                } else {
                    alert('No se ha podido conectar con el servidor');
                }
            });
        } else {
            alert('Subscipcion cancelada con exito');
        }

    }

}

var btnForm = document.getElementById('btn-subs');
btnForm.addEventListener('click', function callForm() {
    var form = document.querySelector('form');
    form.style.display = 'flex';
    btnForm.style.visibility = 'hidden';
    if (localStorage.length!==0) {
        nameSurn.value = localStorage.getItem('name');
        email.value = localStorage.getItem('email');
        age.value = localStorage.getItem('age');
        tel.value = localStorage.getItem('tel');
        adress.value = localStorage.getItem('adress');
        city.value = localStorage.getItem('city');
        postal.value = localStorage.getItem('postal');
        dni.value = localStorage.getItem('dni');
        pass.value = localStorage.getItem('pass');
        pass2.value = localStorage.getItem('pass');
    }
});

var btnClose = document.getElementById('btn-close');
btnClose.addEventListener('click', function CloseForm() {
    var form = document.querySelector('form');
    form.style.display = 'none';
    btnForm.style.visibility = 'visible';
});