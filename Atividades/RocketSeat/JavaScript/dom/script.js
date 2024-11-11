// Visualizar o conteúdo do document
console.log(document);

// Obter o title da página
console.log(document.title);

// Acessar elemento pelo ID
const id = document.getElementById("teste1")

console.log(id)

// Mostra as propriedades do objeto
console.dir(id)

// Acessar elemento com classe
const id2 = document.getElementsByClassName("btn")

console.log(id2)

console.log(id2.item(1))

//Selecionar lista de elementos pela tag
const idByTag = document.getElementsByTagName("div")
console.log(idByTag)

//Query Selector
const idQ = document.querySelector("#teste1")
console.log(idQ)

const classQ = document.querySelector(".btn-danger")
console.log(classQ)

const qAll = document.querySelectorAll(".btn")
console.log(qAll)

// --------------------------------------------

// Retorna o conteudo como texto
const guest = document.querySelector("#guest-1 p")
console.log(guest.textContent);

guest.textContent = "Pimba"

console.log(guest.textContent);

console.log(guest);

console.log(guest.textContent); //Retorna o conteúdo visível e oculto
console.log(guest.innerText); //Retorna o conteúdo visível
console.log(guest.innerHTML); //Retorna o HTML como texto