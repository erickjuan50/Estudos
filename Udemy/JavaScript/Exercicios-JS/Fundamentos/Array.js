const valores = [0,1,2,3,4,5];

console.log(valores[1]);
valores[5] = 6;
console.log(valores)
console.log(valores.length);
console.log(valores.push(7)); // Adiciona o elemento dado como parametro na array, na ultima posição
console.log(valores);
console.log(valores.pop()); // Retira o elemento na array do indice dado como parametro e retorna o valor do elemento retirado
delete valores[3]; // Apaga o valor do indice passado como parametro, deixando o espaço alocado como "vazio"
console.log(typeof valores); // Em JS uma array é um objeto
console.log(valores[500]) // Caso você tente acessar um elemento que não exista em uma array, ela retornará undefined
