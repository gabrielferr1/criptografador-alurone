const textInput = document.querySelector('.text-input')
const mensagem = document.querySelector('#mensagem')
let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']]
let mensagemArea = document.querySelector('.mensagem-area');

// Chaves
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"


function mostrarMensagemArea() {
    mensagemArea.style.display = 'flex';
}
function ocultarMensagemArea() {
    mensagemArea.style.display = 'none';
}

function btnCriptografar() {
    verificarAcentos()
    if (textInput.value.trim() !== "") {
        let elementH2 = document.getElementById('titulo-mensagem')
        let elementP = document.getElementById('paragrafo-mensagem')
        elementH2.innerHTML = 'Sua mensagem está Criptografada'
        elementP.innerHTML = `A criptografia alurone para <strong>'${textInput.value}'</strong>, é:`

        const textoCriptografado = criptografar(textInput.value)
        mensagem.value = textoCriptografado
        textoCriptografado.value = ''
    }
}

function btnDescriptografar() {
    verificarAcentos()
    if (textInput.value.trim() !== "") {
        let elementH2 = document.getElementById('titulo-mensagem')
        let elementP = document.getElementById('paragrafo-mensagem')
        elementH2.innerHTML = 'Sua mensagem está Descriptografada'
        elementP.innerHTML = `A Descriptografia de <strong>'${textInput.value}'</strong>, é:`

        const textoDescriptografado = descriptografar(textInput.value)
        mensagem.value = textoDescriptografado
        textoDescriptografado.value = ''
    }
}


function criptografar(stringCriptografia) {
    stringCriptografia = stringCriptografia.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringCriptografia.includes(matrizCodigo[i][0])) {
            stringCriptografia = stringCriptografia.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    mostrarMensagemArea()
    return stringCriptografia
}

function descriptografar(stringDescriptografia) {
    stringDescriptografia = stringDescriptografia.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDescriptografia.includes(matrizCodigo[i][1])) {
            stringDescriptografia = stringDescriptografia.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    mostrarMensagemArea()
    return stringDescriptografia
}

function verificarAcentos() {
    let listaAcentos = /[áéíóúãõâêîôûàèìòùäëïöü]/
    if (listaAcentos.test(textInput.value)) {
        textInput.value = ''
        textInput.placeholder = 'ERROR! digite sem acento.'
    } else {
        textInput.placeholder = `⟹ Apenas letras minúsculas e sem acento.`;
    }
}

function copiarTexto() {
    var textarea = document.getElementById('mensagem');
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    document.execCommand('copy');

    let mensagemBotaoCopiado = document.getElementById('botao-copiado')
    mensagemBotaoCopiado.innerHTML = 'Copiado!'

     setTimeout(function() {
        mensagemBotaoCopiado.innerHTML = 'Copiar';
    }, 1500);
}

function limparTextos() {
    ocultarMensagemArea()
    textInput.value = ''
    textInput.style.backgroundColor = 'black'
}

function Clicar() {
    let inputElement = document.getElementById('text');
    inputElement.style.backgroundColor = 'white';
}

function RestaurarCor() {
    let inputElement = document.getElementById('text');
    if (inputElement.value.trim() === '') {
        inputElement.style.backgroundColor = '';
    }
}
