try {
    console.log(coisa);
} catch (error) {
    console.log("Variável não definida")
} finally {
console.log("FIM")
}

let result = 0;

try {
    if(result === 0){
        throw new Error("Valor igual a zero")
    }
}catch (error){
    console.log(error)
}