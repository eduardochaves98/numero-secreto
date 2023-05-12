let max = 1000;
let min = 0;

const numeroSecreto = gerarNumeroAleatorio();

// const elementoNumeroSecreto = document.querySelector(".box");
const elementoMenorvalor = document.getElementById("menor-valor");
const elementoMaiorvalor = document.getElementById("maior-valor");

console.log("O numero secreto é: " + numeroSecreto);
elementoMenorvalor.textContent = min;
elementoMaiorvalor.textContent = max;

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * (max - min + 1) + min);

}
