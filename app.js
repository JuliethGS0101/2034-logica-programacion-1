//variable
let numeroSecreto = 4;
let numeroUsuario = prompt("Elige un número entre 1 y 10:");

console.log(numeroUsuario);
/*Este codigo realiza la comparacion*/


if (numeroUsuario == numeroSecreto) {
    alert(`Adivinaste, el numero es: ${numeroUsuario}`);
} else {
    alert('Lo siento, no acertaste el numero');
}


