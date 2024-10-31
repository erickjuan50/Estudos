// Converte um caractere em um valor ASCII (a=0, ..., z=25)
function asciiCode(char) {
    return char.toLowerCase().charCodeAt(0) - 97;
}

// Converte um valor numérico (0-25) para um caractere
function asciiChar(code) {
    return String.fromCharCode(code + 97);
}

// Criptografa um único caractere usando a cifra de Vigenère
function cryptChar(c, k) {
    let charCode = asciiCode(c);
    let keyCode = asciiCode(k);
    let cryptCode = (charCode + keyCode) % 26;
    return asciiChar(cryptCode);
}

// Criptografa uma frase completa, preservando espaços
function encryptSentence(sentence, key) {
    // Divide a frase em palavras
    const words = sentence.split(' ');
    const encryptedWords = words.map(word => {
        let encryptedWord = '';
        let keyIndex = 0;

        for (let i = 0; i < word.length; i++) {
            let wordChar = word[i];
            let keyChar = key[keyIndex % key.length];
            encryptedWord += cryptChar(wordChar, keyChar);
            keyIndex++;
        }

        return encryptedWord;
    });

    // Junta as palavras criptografadas com um espaço entre elas
    return encryptedWords.join(' ');
}

// Dados para a requisição
const data = {
    "encrypted_message": "qoesz aruleyc",
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
decryptMessage(); // Não precisa do console.log aqui, pois a função já faz a impressão

// Teste de criptografia
console.log(encryptSentence("homem morcego", "jasontodd")); // Saída esperada: "qoesz aruleyc"
