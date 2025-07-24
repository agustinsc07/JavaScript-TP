let num1 = parseInt(prompt("ingrese el primer numero"))
let num2 = parseInt(prompt("ingrese el segundo numero"))

let resultado = Math.max(num1, num2);

let noesMayor = Math.min(num1, num2);

document.writeln(
    "el numero mayor es ",
    resultado,
    "porque el numero",
    noesMayor,
    " es menor",
    " a ",
    resultado
)