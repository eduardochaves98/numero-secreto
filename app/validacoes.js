function verificaSeChutePossuiUmValorValido(numeroFalado){
    if(!isNaN(numeroFalado)){
        if(Number.isInteger(Number(numeroFalado))){
            if(!validaIntervalo(numeroFalado)){
                valorInvalido("Fale um numero dentro do intervalo, por favor");
            }else{
                return true;
            }

        }
        else{
            valorInvalido("Falar um numero inteiro, imbecil!!");
            return false;
        }
    }else{
        valorInvalido("Não é um numero, imbecil!!!");
        return false;
    }

}

function valorInvalido(message) {
    mensagemInvalida = message;
}

function validaIntervalo(numeroFalado) {
    return !(min > numeroFalado || max < numeroFalado);

}
