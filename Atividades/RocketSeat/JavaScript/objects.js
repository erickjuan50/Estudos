// Object




// Objeto vázio

const obj = {}

// Objeto com conteúdo

const user = {
  name: "Erick",
  age: 22,
  gender: "Masculino",
  email: "erickjuan50@gmail.com",
  address: {
    street: "Manoel Euclides de Oliveira",
    number: 199,
    neighborhood: "Farolândia",
    city: "Aracaju",
    state: "Sergipe"
  },
  isAdmin: true,
  message: function () {
    console.log(`Hello ${this.name}`)
  }
}

console.log("Objeto vazio: ", obj);
console.log(user);
console.log(user["name"]);
console.log(user["address"]["neighborhood"]);
user.message()



