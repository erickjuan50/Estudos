function testar(a,b){
    console.log(a + b)
}
testar(1,3);

//armazenar funcao em variavel
const imprimirSoma = function (a,b){
    console.log(a + b);
}
imprimirSoma(1,2);
//armazenar funcao arrow em variavel
const soma = (a,b) => {
    return (a+b);
}
console.log(soma(2,5));
//retorno implicito
const subtracao = (a,b) => a - b;
console.log(subtracao(10,5));