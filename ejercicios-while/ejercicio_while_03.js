// Ejercicio While 3: Validador de Contraseña
// Desarrolla un programa que use while para solicitar una contraseña hasta que cumpla con los criterios: 
// mínimo 8 caracteres, al menos una mayúscula, una minúscula y un número.

while (!valida) {
    contraseña = prompt("Ingresa una contraseña: ");

    let tieneMayuscula = /[A-Z]/.test(contraseña);
    let tieneMinuscula = /[a-z]/.test(contraseña);
    let tieneNumero = /[0-9]/.test(contraseña);
    let longitudValida = contraseña.length >= 8;

    if (tieneMayuscula && tieneMinuscula && tieneNumero && longitudValida) {
        valida = true;
        console.log("✅ Contraseña válida.");
    } else {
        console.log(" La contraseña no cumple los requisitos. Intenta de nuevo.");
    }
}

