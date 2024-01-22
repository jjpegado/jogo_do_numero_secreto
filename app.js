let listaDeNumeroSorteado = []
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let compo = document.querySelector(tag);
    compo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Portuguese Female', {rate: 1.2});
};

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolher um Número entre 1 e 10');
};

exibirMensagemInicial();


function exibirChute (){
    let chute = document.querySelector('input').value
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativa = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`

    if(numeroSecreto == chute){
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    }else if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor')
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior')
        }
        tentativas++
        limparCampo() 
    };

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1 );
    let quantidadeElementosNaLista = listaDeNumeroSorteado.length;

    if(quantidadeElementosNaLista == numeroLimite){
        listaDeNumeroSorteado = []
    }
    
    if(listaDeNumeroSorteado.includes(numeroEscolhido)){
        return gerarNumeroAleatorio()
    }else{
        listaDeNumeroSorteado.push(numeroEscolhido)
        console.log(listaDeNumeroSorteado)
        return numeroEscolhido
    }
};

function limparCampo() {
    let chutar = document.querySelector('input')
    chutar.value = (' ')
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}