

// Falsy
console.log(false ? "verdadeiro" : "falso")
console.log(0 ? "verdadeiro" : "falso")
console.log(-0 ? "verdadeiro" : "falso")
console.log("" ? "verdadeiro" : "falso")
console.log(null ? "verdadeiro" : "falso")
console.log(undefined ? "verdadeiro" : "falso")
console.log(NaN ? "verdadeiro" : "falso")

//Truthy
console.log(true ? "verdadeiro" : "falso")
console.log({} ? "verdadeiro" : "falso")
console.log(1 ? "verdadeiro" : "falso")
console.log(3.25 ? "verdadeiro" : "falso")
console.log("Oi" ? "verdadeiro" : "falso")
console.log(" " ? "verdadeiro" : "falso")
console.log(-1 ? "verdadeiro" : "falso")
console.log(Infinity ? "verdadeiro" : "falso")
console.log(-Infinity ? "verdadeiro" : "falso")