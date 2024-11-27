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


// Criando elementos
const newGuest = document.createElement("li")

const guestName = document.createElement("span")

guestName.textContent = "Teste123456"

newGuest.append(guestName)

console.log(newGuest)

// Manipulação de atributos
const input1 = document.querySelector("#input")
input1.setAttribute("placeholder", "teste1234")
// input.setAttribute("disabled", true)
input1.removeAttribute("name")

// Event listener
window.addEventListener("load", () => {
    console.log("Página carregada")
})

let contador = 0;
addEventListener("click", (event) => {
    contador++;
    // console.log(contador)
})

addEventListener("click", (i) => {
    // i.preventDefault()
    // console.log(i.target)
})

const button = document.querySelector("button")
button.addEventListener("click", (event) => {
    console.log("clicou")
})

// Lidando com um evento especifico

const form = document.querySelector("form")
form.onsubmit = (event) => {
    event.preventDefault()
    console.log("Submit")
}

// event Listener em inputs

const input2 = document.querySelector("#input")
input2.addEventListener("keydown", (event) => {
    //keydown - captura tudo, ctrl, shift, TUDO, quando for pressionado.
    // console.log(event, "keydown")
})

input2.addEventListener("keypress", (event) => {
    //keypress - captura quando uma tecla do tipo caractere for pressionada (letras, números, pontos...)
    // console.log(event, "keypress")
})

// Expressões regulares
input2.addEventListener("input", (event) => {
    const regex = /\D+/g
    const value = input2.value
    console.log(value.match(regex))

    const isValid = regex.test(value)
    console.log(isValid)

    
})


