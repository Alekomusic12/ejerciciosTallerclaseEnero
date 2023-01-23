function validarFormulario() {
    let inputCorreo = document.querySelector("#correoUsuario")
    let inputPassword = document.querySelector("#passUsuario")

    if (inputCorreo.value != '' && inputPassword.value != '') {
        validarUsuarios(inputCorreo.value, inputPassword.value)
    }
}


//guardando una variable en el localstorage
function validarUsuarios(usuario, pass) {
    let usuarioValido = "correo@admin.com";
    let passValido = "contraseña123"

    if (usuario == usuarioValido) {
        if (pass == passValido) {
            sessionStorage.setItem("sesionIniciada", "true");
        } else {
            alert("Credenciales invalidas, intente de nuevo")
        }
    } else {
        alert("Credenciales invalidas, intente de nuevo")
    }
    validarSesion()
}

function validarSesion() {
    if (sessionStorage.getItem("sesionIniciada") != null) {
        document.querySelector("#formulario").classList.add("d-none")
        document.querySelector("#logout").classList.remove("d-none")
    } else {
        document.querySelector("#formulario").classList.remove("d-none")
        document.querySelector("#logout").classList.add("d-none")
    }
}

validarSesion()


function cerrarSesion() {
    sessionStorage.removeItem("sesionIniciada")
    validarSesion()
}

let edad = parseInt(prompt("Cual es su edad?"))


switch (edad) {
    case 5:
        alert("Usted es menor de edad")
        break
    case 18:
        alert("Usted es bienvenido a esta pagina")
        break
    default:
        alert("Ingrese la edad correspondiente")
        break
}









function cambiarFondo(colorSeleccionado, opcionCambio) {
    document.querySelector("body").removeAttribute("style")
    document.querySelector("body").removeAttribute("class")
    if (opcionCambio == "inputColor") {
        document.querySelector("body").setAttribute("style", `background-color: ${colorSeleccionado}`)
    } else if (opcionCambio == "listaDesplegable") {
        document.querySelector("body").classList.add('fs-2', colorSeleccionado, 'degrade')
    }

}

// function saludo(nombre = "Pepe", edad = 18) {
//     if (edad >= 18) {
//         alert(`Hola ${nombre}, como estas?, bienvenido a mi pagina xxx`)
//     } else {
//         location.href = "https://www.google.com"
//     }
// }


// saludo("Fulano", 18)