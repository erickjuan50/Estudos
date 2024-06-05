let string = "Teste"
let string2 = "erick,juan,gois,oliveira"

console.log(string.charAt(0)); //Retorna o Char do indice dado como parametro
console.log(string.charCodeAt(0)); //Retorna o codigo da tabela ask do char no indice dado como parametro
console.log(string.indexOf("e")); //Retorna o indice do primeiro elemento encontrado dado como parametro
console.log(string.substring(2)); //Retorna uma substring a partir do indice dado como parametro, excluindo o que tiver antes.
console.log(string.substring(2,4)); //Variação da substring onde delimita-se fim até antes do parametro passado. Ex: (2.4) retornara do indice 2 a 3
console.log(string.concat("!")); //Concatena a string com o que for passado como parametro
console.log(string.replace("e","3")); //Substitui o primeiro elemento encontrado do primeiro parametro pelo do segundo parametro
console.log(string2.split(",")); //Transforma a String em Array separando pelo parametro dado
console.log("3"/2); //O javaScript converte a string para number e realiza a operação normalmente
console.log("3" + 2); //Nesse caso, a String tem preferencia, então ao inves de somar, o JS irá concatenar