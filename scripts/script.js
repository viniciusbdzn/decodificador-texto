document.addEventListener('DOMContentLoaded', function() {
    let textoExibido = document.getElementsByClassName('notificacao__texto')[0];
    let textoAviso = document.getElementsByClassName('texto__aviso')[0];
    const elemento = document.getElementById('botao__copiar');
    
    let jaFoiExibido = false; // Flag para controlar a visibilidade
        function mostrarUmaVez() {
            
            if (!jaFoiExibido) {
                elemento.classList.remove('botao__oculto'); // Remove a classe para tornar o elemento visível
                jaFoiExibido = true;
        }
    }




    document.getElementById('botao__copiar').addEventListener('click', function() {
        // Seleciona o elemento de texto
        const texto = document.getElementsByClassName('notificacao__texto')[0].innerText;
        
        
        // Usa a API Clipboard para copiar o texto
        navigator.clipboard.writeText(texto).then(() => {
            alert('Texto copiado para a área de transferência!');
        }).catch(err => {
            console.error('Falha ao copiar: ', err);
        });
    });


    function validarTexto(texto) {
        if (!/^[a-z\s]+$/.test(texto)) {
            return alert("Apenas letras minúsculas e sem acento.");
        }
        return null;
    };


function criptografarTexto() {
    let textoDigitado = document.getElementsByClassName('decodificador__texto')[0].value;
    let textoString = textoDigitado.toString();
    
    let erro = validarTexto(textoString);
    if (erro) {
        textoAviso.innerHTML = erro;
        return;
    }
    
    document.getElementsByClassName("imagem__personagem")[0].style.display = "none";
    document.getElementsByClassName("texto__decodificado")[0].style.display = "none";
    
    
        let textoCriptografado = 
            textoString.replace(/e/g, "enter")
                        .replace(/i/g, "imes")
                        .replace(/a/g, "ai")
                        .replace(/o/g, "ober")
                        .replace(/u/g, "ufat");

        textoExibido.innerHTML = textoCriptografado;
        mostrarUmaVez()
        return textoCriptografado;
    }


function descriptografarTexto() {
    let textoDigitado = document.getElementsByClassName('decodificador__texto')[0].value;
    let textoString = textoDigitado.toString();
        
    let erro = validarTexto(textoString);
    if (erro) {
        textoAviso.innerHTML = erro;
        return;
    }

    document.getElementsByClassName("imagem__personagem")[0].style.display = "none";
    document.getElementsByClassName("texto__decodificado")[0].style.display = "none";


    // Mapeamento de substituições para descriptografar
    const mapeamento = {
        "enter": "e",
        "imes": "i",
        "ai": "a",
        "ober": "o",
        "ufat": "u"
    };

    let textoDescriptografado = textoString;

    // Realiza as substituições na ordem correta
    for (const [key, value] of Object.entries(mapeamento)) {
        textoDescriptografado = textoDescriptografado.split(key).join(value);
    }
        textoExibido.innerHTML = textoDescriptografado;
        return textoDescriptografado;
    }    

document.getElementById('botao__criptografar').onclick = criptografarTexto;
document.getElementById('botao__descriptografar').onclick = descriptografarTexto;
});









