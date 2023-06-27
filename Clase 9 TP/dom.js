function validateNombre() {
    var nombreInput = document.getElementById("nombre");
    var nombreError = document.getElementById("nombreError");

    if (nombreInput.value.length <= 6 || !nombreInput.value.includes(" ")) {
      nombreError.textContent = "Nombre completo inválido";
    } else {
      nombreError.textContent = "";
    }
  }

  function validateEmail() {
    var emailInput = document.getElementById("email");
    var emailError = document.getElementById("emailError");

    var validacionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!validacionEmail.test(emailInput.value)) {
      emailError.textContent = "Email inválido";
    } else {
      emailError.textContent = "";
    }
  }

  function validatePassword() {
    var passwordInput = document.getElementById("password");
    var passwordError = document.getElementById("passwordError");

    var password = passwordInput.value;
    var hasLetters = /[a-zA-Z]/.test(password);
    var hasNumbers = /\d/.test(password);

  if (password.length < 8 || !hasLetters || !hasNumbers) {
    passwordError.textContent = "La contraseña debe tener al menos 8 caracteres y contener letras y números";
  } else {
    passwordError.textContent = "";
  }
  }

  function validateEdad() {
    var edadInput = document.getElementById("edad");
    var edadError = document.getElementById("edadError");

    if (isNaN(edadInput.value) || parseInt(edadInput.value) < 18 || !Number.isInteger(parseFloat(edadInput.value))) {
      edadError.textContent = "La edad debe ser un Número entero mayor o igual a 18";
    } else {
      edadError.textContent = "";
    }
  }

  function validateTelefono() {
    var telefonoInput = document.getElementById("telefono");
    var telefonoError = document.getElementById("telefonoError");

    var validacionTelefono = /^\d{7,}$/;
    if (!validacionTelefono.test(telefonoInput.value)) {
      telefonoError.textContent = "Teléfono inválido";
    } else {
      telefonoError.textContent = "";
    }
  }

  function validateDireccion() {
    var direccionInput = document.getElementById("direccion");
    var direccionError = document.getElementById("direccionError");
    var direccionValue = direccionInput.value;

    if (direccionValue.length < 5) {
      direccionError.textContent = "La dirección debe tener al menos 5 caracteres";
    } else {
      var caracteresEspeciales = /^[A-Za-z0-9]+\s[A-Za-z0-9]+$/;
      if (!caracteresEspeciales.test(direccionValue)) {
        direccionError.textContent =
          "La dirección debe tener al menos 5 caracteres, con letras, números y un espacio en el medio";
      } else {
        direccionError.textContent = "";
      }
    }
  }

  function validateCiudad() {
    var ciudadInput = document.getElementById("ciudad");
    var ciudadError = document.getElementById("ciudadError");

    if (ciudadInput.value.length < 3) {
      ciudadError.textContent = "Ciudad inválida";
    } else {
      ciudadError.textContent = "";
    }
  }

  function validateCodigoPostal() {
    var codigoPostalInput = document.getElementById("codigoPostal");
    var codigoPostalError = document.getElementById("codigoPostalError");

    if (codigoPostalInput.value.length < 3) {
      codigoPostalError.textContent = "Código Postal inválido";
    } else {
      codigoPostalError.textContent = "";
    }
  }

  function validateDNI() {
    var dniInput = document.getElementById("dni");
    var dniError = document.getElementById("dniError");
  
    var dniValue = dniInput.value;
  
    if (dniValue.length < 7 || dniValue.length > 8 || isNaN(dniValue)) {
      dniError.textContent = "DNI inválido";
    } else {
      dniError.textContent = "";
    }
  }

  function clearError(errorId) {
    var errorElement = document.getElementById(errorId);
    errorElement.textContent = "";
  }

  function validateForm() {
    validateNombre();
    validateEmail();
    validatePassword();
    validateEdad();
    validateTelefono();
    validateDireccion();
    validateCiudad();
    validateCodigoPostal();
    validateDNI();
  }