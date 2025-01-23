document.getElementById('submitButton').addEventListener('click', function () {
    // Obter o texto do campo de entrada
    const inputText = document.getElementById('textInput').value;

    // Exibir o texto na div de saída
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = `Você escreveu: ${inputText}`;
});