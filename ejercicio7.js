let num1 = parseInt(prompt("ingrese el primer numero"))
let num2 = parseInt(prompt("ingrese el segundo numero"))
let num3 = parseInt(prompt("ingrese el tercer numero"))

let resultado = Math.max(num1, num2, num3);
let noesMayor = Math.min(num1, num2, num3);

document.writeln("el numero mayor es ", resultado)