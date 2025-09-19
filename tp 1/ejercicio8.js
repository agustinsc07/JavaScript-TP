let numeroIngresado = parseInt(prompt("ingrese un numero"));

let dividir = numeroIngresado % 2;

resultadoFinal = dividir === 0;

document.writeln(
    " el numero ",
    numeroIngresado,
    " es divisible en 2? ",
    resultadoFinal
)