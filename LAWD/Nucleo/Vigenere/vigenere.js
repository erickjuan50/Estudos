//Converte um caractere para seu valor ASCII baseado na posição do alfabeto (a=0, b=1, ..., z=25)


//Converte um valor numérico (0-25) de volta para um caractere
function asciiChar(code){
    let asciiChar =  String.fromCharCode(code  + 97); //Adiciona 97 para obter o caractere correspondente, pra ficar igual a tabela ascii
    return asciiChar;
}

//Criptografa um único caractere usando a cifra de Vigenère
function cryptChar(c,k){
    let charCode = asciiCode(c); //Obtém o valor ASCII do caractere da mensagem
    let keyCode = asciiCode(k); //Obtém o valor ASCII do caractere da chave
    let cryptCode = (charCode + keyCode) % 26; //Aplica a fórmula de criptografia
    return asciiChar(cryptCode); //Retorna o caractere criptografado
}

//Descriptografa um único caractere usando a cifra de Vigenère
function decryptChar(c,k){
    let charCode = asciiCode(c); //Obtém o valor ASCII do caractere criptografado
    let keyCode = asciiCode(k); //Obtém o valor ASCII do caractere da chave
    let decryptCode = (charCode - keyCode + 26) % 26; //Aplica a fórmula de descriptografia
    return asciiChar(decryptCode); //Retorna o caractere descriptografado
}

//Encontra o caractere da chave dado um caractere criptografado e seu correspondente na mensagem original (Achei a chave assim...)
function findKeyChar(c, w) {
    let cryptCharCode = asciiCode(c);
    let wordCharCode = asciiCode(w);
    let keyCode = (cryptCharCode - wordCharCode + 26) % 26;
    return asciiChar(keyCode);
}


// Criptografa uma palavra usando uma chave
function encryptWord(word, key) {
    let encryptedMessage = ''; 
    let keyIndex = 0; // Índice

    for (let i = 0; i < word.length; i++) {
        let wordChar = word[i];

        // Verifica se o caractere atual é um espaço
        if (wordChar === ' ') {
            encryptedMessage += ' '; // Adiciona espaço sem criptografar, já que estou utilizando ascii...
        } else {
            let keyChar = key[keyIndex % key.length]; // Repetição da chave
            encryptedMessage += cryptChar(wordChar, keyChar);
            keyIndex++; // Apenas incrementa se não for espaço
        }
    }
    return encryptedMessage;
}


function decryptWord(word,cryptWord){ // (A função decryptWord ainda não foi implementada, mas deve seguir uma lógica similar à encryptWord)

}

// Dados para a requisição
const data = {
    "encrypted_message": "QOESZ FCUFNGG",
    "keyword": "jasontodd"  // Substitua por sua palavra-chave descoberta
};

// Função para enviar a requisição
async function decryptMessage() {
    try {
        const response = await fetch("https://desafio9.onrender.com/decrypt_message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        // Verifica a resposta da requisição
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log("Mensagem Descriptografada:", jsonResponse.decrypted_message);
        } else if (response.status === 400) {
            const errorResponse = await response.json();
            console.log("Erro:", errorResponse.error);
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
    }
}

// Chama a função para descriptografar a mensagem
// decryptMessage(); // Não precisa do console.log aqui, pois a função já faz a impressão (essa nota é eu não esquecer...)

// Envia uma requisição POST para descriptografar uma mensagem usando o endpoint
async function decryptMessage(encryptedText, key) {
    const data = {
        "encrypted_message": encryptedText,
        "keyword": key
    };

    try {
        const response = await fetch("https://desafio9.onrender.com/decrypt_message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const jsonResponse = await response.json();
            document.getElementById("original").value = jsonResponse.decrypted_message;
        } else if (response.status === 400) {
            const errorResponse = await response.json();
            alert("Erro: " + errorResponse.error);
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
    }
}

// Função acionada ao clicar no botão "Criptografar"
document.getElementById("encryptButton").addEventListener("click", function() {
    const originalText = document.getElementById("original").value;
    const key = document.getElementById("key").value;
    document.getElementById("encrypted").value = encryptWord(originalText, key);
});

// Função acionada ao clicar no botão "Descriptografar"
document.getElementById("decryptButton").addEventListener("click", function() {
    const encryptedText = document.getElementById("encrypted").value;
    const key = document.getElementById("key").value;
    decryptMessage(encryptedText, key);
});


