class CryptVigenere {
    constructor() { }

    /**
 *  Converte um caractere para seu valor ASCII baseado na posição do alfabeto 
 *  Ex: a = 0, b = 1, c = 2, ..., z = 25
 *  
 *  @param {char} char - Caractere a ser convertido
 *  @returns {number} - Caratere já convertido
 */

    static asciiCode(char) {
        let asciiCode = (char.toLowerCase()).charCodeAt(0) - 97; //Converte para minúscula (pois a tabela ascii diferencia maiusculas de minusculas) e ajusta para a posição
        return asciiCode;
    }

    /**
 *  Converte um valor numérico (0-25) de volta para um caractere
 *
 *  @param {number} code - Valor numérico (0-25)
 *  @returns {char} Caractere equivalente ao número passado como parametro
 */

    static asciiChar(code) {
        let asciiChar = String.fromCharCode(code + 97); //Adiciona 97 para obter o caractere correspondente, pra ficar igual a tabela ascii
        return asciiChar;
    }

    /**
     *  Criptografa um único caractere utilizando a cifra de Vigenère
     *  
     *  @param {char} c - Caractere a ser criptografado
     *  @param {char} k - Caractere chave
     *  @returns {char} Caractere já criptografado
     */

    static cryptChar(c, k) {
        let charCode = CryptVigenere.asciiCode(c); //Obtém o valor ASCII do caractere da mensagem
        let keyCode = CryptVigenere.asciiCode(k); //Obtém o valor ASCII do caractere da chave
        let cryptCode = (charCode + keyCode) % 26; //Aplica a fórmula de criptografia
        return CryptVigenere.asciiChar(cryptCode); //Retorna o caractere criptografado
    }

    /**
     *  Encontra o caractere da chave dado um caractere criptografado e seu correspondente na mensagem original
     *  
     *  @param {char} c - Caractere criptografado
     *  @param {char} w - Caractere não criptografado
     *  @return {char} Caractere da chave
     */

    static findKeyChar(c, w) {
        let cryptCharCode = CryptVigenere.asciiCode(c);
        let wordCharCode = CryptVigenere.asciiCode(w);
        let keyCode = (cryptCharCode - wordCharCode + 26) % 26;
        return CryptVigenere.asciiChar(keyCode);
    }

    /**
     *  Criptografa uma palavra utilizando uma palavra chave
     * 
     *  @param {string} word - Palavra à ser criptografada
     *  @param {string} key - Palavra chave
     *  @returns {string} Palavra já criptografada
     */

    static encryptWord(word, key) {
        let encryptedMessage = '';
        let keyIndex = 0; // Índice

        for (let i = 0; i < word.length; i++) {
            let wordChar = word[i];

            // Verifica se o caractere atual é um espaço
            if (wordChar === ' ') {
                encryptedMessage += ' '; // Adiciona espaço sem criptografar, já que estou utilizando ascii...
            } else {
                let keyChar = key[keyIndex % key.length]; // Repetição da chave
                encryptedMessage += CryptVigenere.cryptChar(wordChar, keyChar);
                keyIndex++; // Apenas incrementa se não for espaço
            }
        }
        return encryptedMessage;
    }


}


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
    document.getElementById("encrypted").value = CryptVigenere.encryptWord(originalText, key);
});

// Função acionada ao clicar no botão "Descriptografar"
document.getElementById("decryptButton").addEventListener("click", function() {
    const encryptedText = document.getElementById("encrypted").value;
    const key = document.getElementById("key").value;
    decryptMessage(encryptedText, key);
});







