function printHelloWorld() {
    console.log("Hello World")
}

printHelloWorld();

const sum = function(a,b){
    console.log(a+b)
}

sum(2,3)


//Função anônima - que não possui nome
const showMessage = function(){
    console.log("Alo Vaca")
}

console.log(showMessage)


const showMessage2 = function(entrada){
    return entrada + "123"
    
}

console.log(showMessage2("coisa"))