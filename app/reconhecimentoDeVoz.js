const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;

const elementoNumeroFalado = document.querySelector(".box");
const elementoChute = document.getElementById("chute");

var mensagemInvalida = "";
var continuar = true;


const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';

recognition.start();
recognition.addEventListener('result', onSpeak)

function exibeChuteNaTela(numeroFalado) {

    elementoChute.innerHTML = `
        <div>Voce disse:</div>
        <span class="box">${numeroFalado}</span>
        `;
    if(mensagemInvalida !== ""){
        elementoChute.innerHTML  +=
            `<div> ${mensagemInvalida} </div>`;
    }else {
        if (numeroFalado < numeroSecreto) {
            elementoChute.innerHTML +=
                `<div>O número sercreto é maior <i class="fa-solid fa-up-long"></i></div>`;

        }
        if (numeroFalado > numeroSecreto) {
            elementoChute.innerHTML +=
                `<div>O número sercreto é menor <i class="fa-solid fa-down-long"></i></div>`;
        }
        if (Number(numeroFalado) === numeroSecreto) {
            // elementoChute.innerHTML +=
            //     `<div>Acertou disgramado<i className="fa-solid fa-down-long"></i></div>`;
            document.body.innerHTML = `
            <h2>Acertou mizeravi!!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            `
            document.body.innerHTML += `<button id ="jogar-novamente" class="btn-jogar">Jogar Novamente</button>`;
            continuar = false;
        }
    }
    mensagemInvalida = "";
}

function onSpeak(e) {
    const numeroFalado = e.results[0][0].transcript;
    console.log(numeroFalado);
    verificaSeChutePossuiUmValorValido(numeroFalado);
    exibeChuteNaTela(numeroFalado);

}

recognition.addEventListener('end', () =>{
    if(continuar){
        recognition.start();
    }else{
        recognition.stop();
    }
} );

document.body.addEventListener("click", e => {
    if (e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})